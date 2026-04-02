import { expect, Page } from '@playwright/test';

export async function logout(page: Page) {
  const profileToggle = page.locator('a.dropdown-toggle.nav-link.dropdown-user-link');
  const logoutLink = page.locator('a.dropdown-item[href*="/public/logout"]');

  await profileToggle.click();
  await expect(logoutLink).toBeVisible();
  await logoutLink.click();
}

