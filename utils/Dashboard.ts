import { Page } from '@playwright/test';

// Click Day button
export async function clickDay(page: Page) {
  await page.getByRole('button', { name: /day/i }).click();
}

// Click Yes
export async function clickYes(page: Page) {
  await page.getByRole('button', { name: 'Yes' }).click();
}

// Click No
export async function clickNo(page: Page) {
  await page.getByRole('button', { name: 'No' }).click();
}

// Click Logo
export async function clickLogo(page: Page) {
  await page.locator("img[src*='rsoftlogo2']").click();
}

// Logout
export async function logout(page: Page) {
  await page.getByRole('link', { name: 'Logout' }).click();
}
//Call Button
export async function clickCall(page: Page) {
  const headerActions = page
    .locator('ul')
    .filter({ has: page.getByRole('button', { name: /day/i }) })
    .first();

  await headerActions.locator('li').nth(1).click();
}
// Notification
export async function clickNotification(page: Page) {
  await page.getByRole('link', { name: 'Notification' }).click();
}
//settings
export async function clickSettings(page: Page) {
 await page.locator("i:has-text('settings')").click();
}
// Menu
export async function clickMenu(page: Page) {
 await page.getByText('list', { exact: true }).click();
}
