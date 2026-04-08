import { Page } from '@playwright/test';

export async function AddModule(page: Page) {
  await page.getByRole('button', { name: 'Add Module' }).click();
}

type ActionType =
  | 'Quick Create'
  | 'Mobile View'
  | 'Auto Dialer'
  | 'Edit'
  | 'Delete';

export async function ClickModulePermission(
  page: Page,
  moduleName: string,
  action: ActionType,
  shouldCheck?: boolean // optional for icons
) {
  const moduleRow = page
    .locator('tr')
    .filter({
      has: page.locator('td').filter({
        hasText: new RegExp(`^${moduleName}$`, 'i'),
      }),
    })
    .filter({ hasNot: page.locator('td').filter({ hasText: /Testing/i }) })
    .first();

  await moduleRow.waitFor({ state: 'visible' });
  await moduleRow.scrollIntoViewIfNeeded();

  // 🔥 ADD THIS BLOCK (ICON ACTIONS)
  if (action === 'Edit' || action === 'Delete') {
    let icon;

    if (action === 'Edit') {
      icon = moduleRow.locator('i.fa-edit, i.fa-pencil').first();
    } else {
      icon = moduleRow.locator('i.fa-trash').first();
    }

    await icon.waitFor({ state: 'visible' });
    await icon.click();

    console.log(`✅ ${action} icon clicked for ${moduleName}`);
    return;
  }

  // 🔥 EXISTING CHECKBOX LOGIC (UNCHANGED)
  const columnIndex = await page
    .locator('tr')
    .filter({ has: page.getByRole('columnheader', { name: action }) })
    .first()
    .getByRole('columnheader')
    .evaluateAll((headers, actionName) => {
      return headers.findIndex(
        (header) => header.textContent?.trim() === actionName
      );
    }, action);

  if (columnIndex < 0) {
    throw new Error(`Could not find column for action: ${action}`);
  }

  const permissionCell = moduleRow.locator('td').nth(columnIndex);
  const permissionCheckbox = permissionCell.getByRole('checkbox');

  await permissionCheckbox.waitFor({ state: 'visible' });
  const isChecked = await permissionCheckbox.isChecked();

  if (shouldCheck) {
    if (isChecked) {
      console.log(`${action} is already checked`);
      return;
    }

    console.log(`Before ${action} is unchecked`);
    await permissionCheckbox.check();
    console.log(`Now ${action} is checked`);
    return;
  }

  if (isChecked) {
    console.log(`Before ${action} is checked`);
    await permissionCheckbox.uncheck();
    console.log(`Now ${action} is unchecked`);
    return;
  }

  console.log(`${action} is already unchecked`);
}