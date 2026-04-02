// utils/logout.ts
import { expect, Page } from '@playwright/test';

export async function logout(page: Page) {
  await page.getByRole('button', { name: /dayin/i }).click();

  const logoutItem = page.getByRole('link', { name: /logout/i })
    .or(page.getByRole('button', { name: /logout/i }))
    .or(page.getByText(/logout/i));

  await expect(logoutItem).toBeVisible();
  await logoutItem.click();
}
