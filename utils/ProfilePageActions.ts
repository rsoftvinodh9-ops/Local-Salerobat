import { Page } from '@playwright/test';

type ActionType = 'delete' | 'edit' | 'duplicate'|'Modules'|'Settings'|'Info' ;

export async function clickProfileAction(
  page: Page,
  profileName: string,
  action: ActionType
) {
  const row = page.locator('tr', {
    has: page.locator('td', { hasText: profileName }),
  });

  await row.waitFor({ state: 'visible' });

  const actionCell = row.locator('td').last();

  switch (action) {
    case 'delete':
      await actionCell.locator('i.fa-trash, .fa-trash').click();
      break;

    case 'edit':
      await actionCell.locator('i.fa-edit, .fa-pencil').click();
      break;

    case 'duplicate':
      await actionCell.locator('i.fa-copy, .fa-clone').click();
      break;

    case 'Modules':
      await actionCell.getByText('category', { exact: true }).click();
      break;

    case 'Settings':
      await actionCell.getByText('admin_panel_settings', { exact: true }).click();
      break;

    case 'Info':
      await actionCell.locator('i.ft-info, .ft-info').click();
      break;

    default:
      throw new Error(`Unknown action: ${action}`);
  }
}

export async function closeprofilepopup(page: Page) {
  await page.locator('button.profileModulePopupClose').click();
}
