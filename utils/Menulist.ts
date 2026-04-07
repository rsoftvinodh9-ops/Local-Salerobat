import { Page } from '@playwright/test';

export async function Menulist(page: Page, moduleName: string) {
  try {
    const moduleLocator = page.getByText(moduleName, { exact: true }).first();

    // Check if module exists & visible
    if (await moduleLocator.count() === 0) {
      console.log(`❌ User doesn't having permission of the ${moduleName}`);
      return false;
    }

    if (!(await moduleLocator.isVisible())) {
      console.log(`❌ User doesn't having permission of the ${moduleName}`);
      return false;
    }

    // Click if available
    await moduleLocator.click();
    console.log(`✅ Navigated to ${moduleName}`);
    return true;

  } catch (error) {
    console.log(`❌ User doesn't having permission of the ${moduleName}`);
    return false; // DO NOT throw error
  }
}
