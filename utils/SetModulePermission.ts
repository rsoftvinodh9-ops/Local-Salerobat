import { Page } from '@playwright/test';

type PermissionType = 'View' | 'Create' | 'Edit' | 'Delete';

export async function setPermission(
  page: Page,
  moduleName: string,
  permission: PermissionType,
  value: boolean // true = check, false = uncheck
) {
  // Find the row using module name
  const row = page.locator('tr', {
    has: page.locator('td', { hasText: moduleName }),
  });

  // Column index mapping (adjust if UI changes)
  const columnIndex: Record<PermissionType, number> = {
    View: 1,
    Create: 2,
    Edit: 3,
    Delete: 4,
  };

  const cell = row.locator('td').nth(columnIndex[permission]);

  const checkbox = cell.locator('input[type="checkbox"]');

  // Check / Uncheck dynamically
  if (value) {
    await checkbox.check();
  } else {
    await checkbox.uncheck();
  }

  
}

// Helper to set multiple permissions at once
export async function setMultiplePermissions(
  page: Page,
  moduleName: string,
  permissions: Partial<Record<PermissionType, boolean>>
) {
  for (const [key, value] of Object.entries(permissions)) {
    await setPermission(page, moduleName, key as PermissionType, value!);
  }
 
}
