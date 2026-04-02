import { Page } from '@playwright/test';

export async function Menulist(page: Page, moduleName: string) {
  await page.getByText(moduleName, { exact: true }).click();

}
