import { Page } from '@playwright/test';

export async function clickProfile(page: Page) {
  await page.locator("//label[text()='Profile']").click();
}
export async function clickRole(page: Page) {
await page.getByText('Role').click();

}
export async function loginhistory(page: Page) {
    await page.getByText('Login History').click();
}