import { Page } from '@playwright/test';

export async function logout(page: Page) {
  await page.evaluate(() => {
    const form = document.getElementById('logout-form') as HTMLFormElement | null;
    form?.submit();
  });
}
