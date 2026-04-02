import { Page } from '@playwright/test';

export type LoginData = {
  companyName: string;
  userName: string;
  password: string;
};

export async function login(page: Page, data: LoginData) {
  await page.goto('https://rdot.in/public/login');
  await page.getByRole('textbox', { name: 'Company Name' }).fill(data.companyName);
  await page.getByRole('textbox', { name: 'User Name' }).fill(data.userName);
  await page.getByRole('textbox', { name: 'Enter Password' }).fill(data.password);
  await page.locator("//i[@id='Changeicon']").click();
  await page.getByRole('button', { name: 'Login' }).click();
}