import { Page } from '@playwright/test';
import { openUserMenu } from './Dashboard';

// Open My Profile
export async function openMyProfile(page: Page) {
  await openUserMenu(page);
  await page.getByRole('link', { name: /My Profile/i }).click();
}

// Click User Tab
export async function openUserTab(page: Page) {
  await page.locator('#block1').getByRole('link', { name: 'User' }).click();
}

