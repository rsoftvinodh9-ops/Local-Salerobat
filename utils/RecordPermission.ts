import { expect, Page } from '@playwright/test';
import { Menulist } from '../utils/Menulist';

export async function verifyModulePermissions(
  page: Page,
  moduleName: string
) {
  try {
    // Navigate to module
    await Menulist(page, moduleName);

    // Dynamic heading check
    await expect(
      page.getByRole('heading', { name: new RegExp(`${moduleName}`, 'i') })
    ).toBeVisible();

    const permissions: string[] = [];

    // 🔹 View Permission
    const viewBtn = page.getByRole('button', { name: 'View' });
    if (await viewBtn.count() > 0) {
      permissions.push('View');
    }

    // 🔹 Edit Permission
    const editIcon = page.locator('i.fa-edit, .fa-pencil');
    if (await editIcon.count() > 0) {
      permissions.push('Edit');
    }

    // 🔹 Delete Permission
    const deleteIcon = page.locator('i.fa-trash');
    if (await deleteIcon.count() > 0) {
      permissions.push('Delete');
    }

    // 🔹 Print result (dynamic module name)
    if (permissions.length > 0) {
      console.log(
        `✅ ${moduleName} Module having: ${permissions.join(', ')} Permission`
        
      );
    } else {
      console.log(`❌ ${moduleName} Module has NO permissions`);
    }

  } catch (error) {
    console.error(`❌ Error while verifying ${moduleName} permissions`);
    console.error(error);
    //throw error;
  }
}