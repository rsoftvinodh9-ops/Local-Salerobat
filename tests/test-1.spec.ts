import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://rdot.in/public/login');
  await page.getByRole('textbox', { name: 'Company Name' }).click();
  await page.getByRole('textbox', { name: 'Company Name' }).fill('VINODj');
  await page.getByRole('textbox', { name: 'Company Name' }).press('Tab');
  await page.getByRole('textbox', { name: 'User Name' }).fill(' ');
  await page.getByRole('textbox', { name: 'Company Name' }).click();
  await page.getByRole('textbox', { name: 'Company Name' }).fill('VINODh');
  await page.getByRole('textbox', { name: 'User Name' }).click();
  await page.getByRole('textbox', { name: 'User Name' }).fill(' rsoft');
  await page.getByRole('textbox', { name: 'Enter Password' }).click();
  await page.getByRole('textbox', { name: 'Enter Password' }).fill('Vinodh@5292');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.locator('#vertical_header_name').click();
  await page.getByRole('link', { name: 'Contact_Mail Leads', exact: true }).click();
  await page.getByRole('button', { name: 'Add Leads' }).click();
  await page.locator('input[name="leads_name"]').click();
  await page.locator('input[name="leads_name"]').fill('Vinodh');
  await page.locator('#select2-selfield_1162-container').click();
  await page.getByRole('treeitem', { name: 'Lead Lost' }).click();
  await page.locator('textarea[name="leads_textarea"]').click();
  await page.locator('textarea[name="leads_textarea"]').fill('Test');
  await page.getByRole('button', { name: 'Save', exact: true }).click();
});