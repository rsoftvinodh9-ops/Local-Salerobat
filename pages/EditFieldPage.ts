import {expect ,test,Page} from '@playwright/test';


 export async function AddModule(page:Page){
   await page.getByRole('button', { name: 'Add Module' }).click();
}

type ActionType = 'Quick Create' | 'Mobile View'|'Auto Dialer';

export async function ClickModulePermission(Page:Page,ModuleName:string,Action:ActionType){
  const row = Page.locator('tr').filter({ has: Page.locator('td').filter({ hasText: ModuleName }) }).filter({ hasNot: Page.locator('td').filter({ hasText: 'Testing' }) });
      
  
  await row.waitFor({ state: 'visible' });
  await row.scrollIntoViewIfNeeded();

  let actionCell;
    switch (Action) {
        case 'Quick Create':
            actionCell = row.locator('td').last().locator('i').filter({ hasText: 'bolt' });
            await actionCell.waitFor({ state: 'visible' });
            await actionCell.click();
            break;

        case 'Mobile View':
            actionCell = row.locator('td').last().locator('i').filter({ hasText: 'phone_iphone' });
            await actionCell.waitFor({ state: 'visible' });
            await actionCell.click();
            break;
        case 'Auto Dialer':
            actionCell = row.locator('td').last().locator('i').filter({ hasText: 'call' });
            await actionCell.waitFor({ state: 'visible' });
            await actionCell.click();
            break;  
        default:
            throw new Error(`Unknown action: ${Action}`);
    }



}