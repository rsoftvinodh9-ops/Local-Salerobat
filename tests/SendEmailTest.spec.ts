import '../utils/Screenshot';
import { test } from '@playwright/test';
import { login } from '../utils/login';
import { clickMenu } from '../utils/Dashboard';
import { Menulist } from '../utils/Menulist';
import { selectDropdown } from '../utils/SendEmailDropdowns';

test('Send Email Test', async ({ page }) => {
  await login(page, 'VINODH', 'rsoft', 'Vinodh@5292');
  await clickMenu(page);
  await Menulist(page, 'Leads');
  try{
    const row = page.locator('#row-794085');

await row.locator('span.qa_icon:has-text("quickreply")').click();
  } catch (error) {
    console.error('Error occurred while clicking quickreply:', error);
  }

  await page.getByText('mail', { exact: true }).click();
  const emailDialog = page.getByText('Send Email', { exact: true }).locator('..');
  await emailDialog.waitFor({ state: 'visible' });

  await selectDropdown(page, {
    container: emailDialog,
    dropdownLocator: emailDialog.getByRole('textbox', { name: 'Select an Option', exact: true }),
    values: ['rsoftvinodh9@gmail.com'],
  });

   await page.locator('#From Email').click();


  
});


   



