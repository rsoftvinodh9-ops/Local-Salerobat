import { Page } from '@playwright/test';

type PermissionType = 'View' | 'Create' | 'Edit' | 'Delete';

type ProfilePermissionMap = {
  [profileName: string]: PermissionType[];
};

export async function ProfilePrivileges(
  page: Page,
  permissionsData: ProfilePermissionMap
) {
  const columnIndex: Record<PermissionType, number> = {
    View: 1,
    Create: 2,
    Edit: 3,
    Delete: 4,
  };

  const permissionPopup = page
    .locator('.profilemodulepopup, .modal-content, .profileModulePopup')
    .filter({ has: page.locator('input[type="checkbox"]') })
    .last();

  await permissionPopup.waitFor({ state: 'visible' });

  for (const profileName in permissionsData) {
    const permissions = permissionsData[profileName];
    const row = permissionPopup.locator('tr', {
      has: page.locator('td', { hasText: profileName }),
    });

    await row.waitFor({ state: 'visible' });
    await row.scrollIntoViewIfNeeded();

    for (const permission of permissions) {
      const checkbox = row
        .locator('td')
        .nth(columnIndex[permission])
        .locator('input[type="checkbox"]');

      await checkbox.waitFor({ state: 'attached' });
      await checkbox.scrollIntoViewIfNeeded();

      if (!(await checkbox.isChecked())) {
        await checkbox.setChecked(true, { force: true });
      }
    }
  }
}

export async function Submitbutton(page:Page){
    await page.getByRole('button', { name: /^Submit$/i }).click();
}