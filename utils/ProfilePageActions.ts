import { Page } from '@playwright/test';

type ActionType = 'delete' | 'edit' | 'duplicate';

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

    default:
      throw new Error(`Unknown action: ${action}`);
  }
}