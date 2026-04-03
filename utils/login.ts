import { Page, expect } from '@playwright/test';

type LoginData = {
  companyName: string;
  userName: string;
  password: string;
};

// Login function supporting both object and positional args
export async function login(
  page: Page,
  companyOrData: string | LoginData,
  username?: string,
  password?: string
) {
  const data =
    typeof companyOrData === 'string'
      ? {
          companyName: companyOrData,
          userName: username ?? '',
          password: password ?? '',
        }
      : companyOrData;

  await page.goto('https://rdot.in/public/login');
  await page.getByRole('textbox', { name: 'Company Name' }).fill(data.companyName);
  await page.getByRole('textbox', { name: 'User Name' }).fill(data.userName);
  await page.getByRole('textbox', { name: 'Enter Password' }).fill(data.password);
  await page.getByRole('button', { name: 'Login' }).click();

  const existingSessionPrompt = page.getByRole('heading', {
    name: /Would you like to log out the existing session/i,
  });
  if (await existingSessionPrompt.isVisible().catch(() => false)) {
    await page.getByRole('button', { name: 'Yes' }).click();
  }
}

// Verify invalid login
export async function verifyInvalidLogin(page: Page) {
  await expect(page.getByText(/Incorrect User Name or Password/i)).toBeVisible();
}

// Toggle password visibility
export async function togglePassword(page: Page) {
  await page.locator('#Changeicon').click();
}
