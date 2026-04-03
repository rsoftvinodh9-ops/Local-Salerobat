import { Page } from '@playwright/test';

export async function logout(page: Page) {
  await page.locator('.dropdown-toggle.nav-link.dropdown-user-link').click();
  await page.getByRole('link', { name: /Logout/i }).click();
  await page.getByRole('textbox', { name: 'Company Name' }).waitFor({ state: 'visible' });
}
