import { Page, expect } from '@playwright/test';

export async function verifyModule(page: Page, moduleName: string) {
  try {
    await expect(
      page.getByRole('heading', { name: new RegExp(moduleName, 'i') })
    ).toBeVisible();

    console.log(`✅ ${moduleName} module is open successfully`);

  } catch (error) {
    console.log(`❌ Failed to open the ${moduleName} module`);
  }
}