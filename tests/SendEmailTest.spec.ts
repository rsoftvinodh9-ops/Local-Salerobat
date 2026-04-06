import '../utils/Screenshot';
import { test } from '@playwright/test';
import { login } from '../utils/login';
import { clickMenu } from '../utils/Dashboard';
import { Menulist } from '../utils/Menulist';
import { selectDropdown } from '../utils/SendEmailDropdowns';

test('Send Email Test', async ({ page }) => {
  test.setTimeout(90000);
  await login(page, 'NAVEEN', 'rsoft', 'RSoft!@345');
  await clickMenu(page);
  await Menulist(page, 'Leads');
  const selectEmailField = async (dialogLabel: string, value: string) => {
    await selectDropdown(page, {
      container: emailDialog,
      dropdownLocator: emailDialog.locator(
        `xpath=.//*[normalize-space()="${dialogLabel}"]/following::*[@role="combobox"][1]`
      ),
      values: [value],
    });
  };

  try{
    const row = page.locator('#row-794085');

  await row.locator('span.qa_icon:has-text("quickreply")').click();
  } catch (error) {
    console.error('Error occurred while clicking quickreply:', error);
  }

  await page.getByText('mail', { exact: true }).click();
  const emailDialog = page.locator('#quick-action-modal');
  await emailDialog.getByText('Send Email', { exact: true }).waitFor({ state: 'visible' });

  await selectDropdown(page, {
    container: emailDialog,
    dropdownLocator: emailDialog.locator(
      'xpath=.//*[normalize-space()="Outgoing Email Address"]/following::*[@role="textbox"][1]'
    ),
    values: ['rsoftvinodh9@gmail.com'],
  });

  await selectEmailField('From Email', 'Primary Email ( Pradeep');
  await selectEmailField('To Email', 'Email (Leads)');
  await selectEmailField('Add Cc', 'Email (Leads)');
  await selectDropdown(page, {
    container: emailDialog,
    dropdownLocator: emailDialog.locator(
      'xpath=.//*[normalize-space()="Choose Template"]/following::*[@role="combobox"][1]'
    ),
    values: ['Suresh'],
  });
  await selectDropdown(page, {
    container: emailDialog,
    dropdownLocator: emailDialog.locator(
      'xpath=.//*[normalize-space()="Add Fields"]/following::*[@role="combobox"][1]'
    ),
    values: ['Area'],
    exact: true,
  });
  await page
    .locator('iframe[title="Editor, qaBlockArea"]')
    .contentFrame()
    .locator('body')
    .fill('sadh;asfsafkasfcs');
  const sendButton = emailDialog.getByRole('button', { name: 'send' });
  await sendButton.scrollIntoViewIfNeeded();
  await sendButton.click({ force: true });
  await page.waitForTimeout(3000);

     

  
});


   

