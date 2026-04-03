import { expect, test } from '@playwright/test';
import { login } from '../utils/login';

test('test', async ({ page }) => {
  test.setTimeout(90000);

  await login(page, {
    companyName: 'VINODh',
    userName: 'rsoft',
    password: 'Vinodh@5292',
  });

  await page.locator('.dropdown-toggle.nav-link.dropdown-user-link').click();
  await page.getByRole('link', { name: /CRM Setting/i }).click();
  await page.goto('https://rdot.in/public/admin/Settings?Module=Profile&parent=Setting&view=index');

  await page.locator('#profile_9 a').filter({ hasText: 'admin_panel_settings' }).click();
  await page.locator('#profileModelPop').getByText('User').click();
  await page.getByRole('button', { name: /×|Ã—/ }).click();

  await page.locator('.dropdown-toggle.nav-link.dropdown-user-link').click();
  await page.getByRole('link', { name: /Logout/i }).click();

  await page.getByRole('textbox', { name: 'Company Name' }).fill('VINODh');
  await page.getByRole('textbox', { name: 'User Name' }).fill('Pradeep');
  await page.getByRole('textbox', { name: 'Enter Password' }).fill('User@123');
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page.getByText(/Incorrect User Name or Password/i)).toBeVisible();

  await page.getByRole('textbox', { name: 'User Name' }).fill('Pradeep');
  await page.getByRole('textbox', { name: 'Enter Password' }).fill('User@1234');
  await page.locator('#Changeicon').click();
  await page.getByRole('button', { name: 'Login' }).click();

  await page.locator('.dropdown-toggle.nav-link.dropdown-user-link').click();
  await page.getByRole('link', { name: /My Profile/i }).click();
  await page.locator('#block1').getByRole('link', { name: 'User' }).click();
});
