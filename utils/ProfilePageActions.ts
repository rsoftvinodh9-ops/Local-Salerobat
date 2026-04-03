import { Page } from '@playwright/test';
import { settings } from 'cluster';

type ActionType = 'delete' | 'edit' | 'duplicate'|'Modules'|'Settings'|'Info' ;

export async function clickProfileAction(
  page: Page,
  profileName: string,
  action: ActionType
) {
  // Locate the row using profile name
  const row = page.locator('tr', {
    has: page.locator('td', { hasText: profileName }),
  });

  // Action column (last td)
  const actionCell = row.locator('td').last();

  // Click based on action type
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
      await actionCell.locator('i.material-symbols-outlined:has-text("category")').click();
      break;
    case 'Settings':
      await page.locator('i').filter({ hasText: 'admin_panel_settings' }).first().click();
      break;
    case 'Info':
      await page.locator('i.ft-info').click();
      break;  

    default:
      throw new Error(`Unknown action: ${action}`);
  }
}