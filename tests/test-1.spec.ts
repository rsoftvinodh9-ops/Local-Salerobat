import '../utils/Screenshot';
import { expect, test } from '@playwright/test';
import { clickMenu } from '../utils/Dashboard';
import { login } from '../utils/login';
import { Menulist } from '../utils/Menulist';
import { selectDropdown } from '../utils/SendEmailDropdowns';

test('test', async ({ page }) => {
  test.setTimeout(90000);

  await login(page, 'NAVEEN', 'rsoft', 'RSoft!@345');
  await page.waitForURL(/\/admin\/Dashboard/i);

  await clickMenu(page);
  await Menulist(page, 'Leads');
  await expect(page).toHaveURL(/Module=Leads/);

  const leadRow = page.locator('tr[id^="row-"]').filter({ hasText: 'quickreply' }).first();
  await expect(leadRow).toBeVisible();
  await leadRow.locator('span.qa_icon:has-text("quickreply")').click();

  const quickActionModal = page.locator('#quick-action-modal');
  await expect(quickActionModal).toBeVisible();

  await quickActionModal.getByText('mail', { exact: true }).click();
  await expect(quickActionModal.getByText('Send Email', { exact: true })).toBeVisible();

  await selectDropdown(page, {
    container: quickActionModal,
    dropdownLocator: quickActionModal.locator(
      'xpath=.//*[normalize-space()="Choose Template"]/following::*[@role="combobox"][1]'
    ),
    values: ['Test Template'],
  });

  await selectDropdown(page, {
    container: quickActionModal,
    dropdownLocator: quickActionModal.locator('#select2-qa_Emailvarfields-container'),
    values: ['Modified By'],
    exact: true,
  });

  const editorBody = page
    .locator('iframe[title="Editor, qaBlockArea"]')
    .contentFrame()
    .locator('body');
  await expect(editorBody).toBeVisible();
  await editorBody.fill('Playwright email smoke test');

  await quickActionModal.getByRole('button', { name: 'send' }).click();
  await quickActionModal.getByText('close', { exact: true }).click();
  await expect(quickActionModal).toBeHidden();

  await clickMenu(page);
  await Menulist(page, 'Emails');
  await expect(page).toHaveURL(/Module=Emails/);
  test.setTimeout(90000);

  await page.locator('span:has-text("View All -")').click();
  await expect(page.getByRole('link', { name: 'View All -' })).toBeVisible();
});
