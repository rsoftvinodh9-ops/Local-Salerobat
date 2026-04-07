import {expect ,test,Page} from '@playwright/test';


 export async function AddModule(page:Page){
   await page.getByRole('button', { name: 'Add Module' }).click();
}

type ActionType = 'Quick Create' | 'Mobile View'|'Auto Dialer';

export async function ClickModulePermission(Page:Page,ModuleName:string,Action:ActionType){
  const row = Page.locator('tr').filter({ has: Page.locator('td').filter({ hasText: ModuleName }) }).filter({ hasNot: Page.locator('td').filter({ hasText: 'Testing' }) });
      
  
  await row.waitFor({ state: 'visible' });
  await row.scrollIntoViewIfNeeded();

  let iconText: string;
  switch (Action) {
        case 'Quick Create':
            iconText = 'bolt';
            break;
        case 'Mobile View':
            iconText = 'phone_iphone';
            break;
        case 'Auto Dialer':
            iconText = 'call';
            break;  
        default:
            throw new Error(`Unknown action: ${Action}`);
    }

  // Try multiple selector strategies
  const lastTd = row.locator('td').last();
  let actionCell = lastTd.locator(`[class*="${iconText}"], [data-icon*="${iconText}"]`);
  
  // If not found, try looking for any element with the text
  if (await actionCell.count() === 0) {
    actionCell = lastTd.locator('//*[contains(text(), "' + iconText + '")]');
  }
  
  // If still not found, try within span or i tags
  if (await actionCell.count() === 0) {
    actionCell = lastTd.locator(`i, span, svg`).filter({ hasText: iconText }).first();
  }

  await actionCell.waitFor({ state: 'visible', timeout: 5000 });
  await actionCell.click();
}
}