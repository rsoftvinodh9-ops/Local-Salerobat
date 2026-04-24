import '../utils/Screenshot';
import { test, Page, BrowserContext } from '@playwright/test';
import { login } from '../utils/login';
import { clickMenu } from '../utils/Dashboard';
import { Menulist } from '../utils/Menulist';

import { LeadsPage, LeadsPage1 } from '../pages/LeadsPage';
import { SMSModalPage } from '../pages/SMSModalPage';
import { TableActions } from '../pages/ListViewActions';
import { SubRecord } from '../pages/SubRecord';
import { GlobalSearch } from '../pages/GlobalSearch';

let page: Page;
let context: BrowserContext;

// ✅ LOGIN ONLY ONCE
test.beforeAll(async ({ browser }) => {
  context = await browser.newContext();
  page = await context.newPage();

  await login(page, 'NAVEEN', 'rsoft', 'RSoft!@345');
});

// ✅ CLOSE AFTER ALL TESTS
test.afterAll(async () => {
  await context.close();
});


// ✅ TEST 1
test('Send SMS from Listview', async () => {
  test.setTimeout(300000);

  const leads1 = new LeadsPage1(page);
  const sms = new SMSModalPage(page);

  await clickMenu(page);
  await Menulist(page, 'Leads');

  await leads1.openQuickReply('743087');

  await sms.selectSMS();
  await sms.selectMobileField('Alternat Phone   (Leads)');
  await sms.selectTemplate('Custom Template');
  await sms.selectMergeField('Area');
  await sms.sendSMS();
  await sms.closeModal();

  await leads1.openLead('743087');

  await page.waitForTimeout(1000);

  const update = await page.locator('li.appendli div').nth(1).innerText();
  console.log("Update Captured date & Time: " + update);

  const update1 = await page.locator('li.appendli div').nth(2).innerText();
  console.log('SMS Triggered Update from List View: ' + update1);
});


// ✅ TEST 2
test('Send SMS from Detailview', async () => {
  test.setTimeout(300000);

  const leads1 = new LeadsPage1(page);
  const sms = new SMSModalPage(page);

  await clickMenu(page);
  await Menulist(page, 'Leads');

  await leads1.openLead('743087');
  await leads1.openQuickReplyDetail();

  await sms.selectSMS();
  await sms.selectMobileField('Alternat Phone   (Leads)');
  await sms.selectTemplate('Custom Template');
  await sms.selectMergeField('Assigned To');
  await sms.sendSMS();
  await sms.closeModal();

  await page.waitForTimeout(1000);

  const update = await page.locator('li.appendli div').nth(1).innerText();
  console.log("Update Captured date & Time: " + update);

  const update1 = await page.locator('li.appendli div').nth(2).innerText();
  console.log('SMS Triggered Update from Detail View: ' + update1);
});


// ✅ TEST 3
test('Send SMS from Submodal using ListView Quickaction', async () => {
  test.setTimeout(300000);

  const leads1 = new LeadsPage1(page);
  const sms = new SMSModalPage(page);

  await clickMenu(page);
  await Menulist(page, 'Leads');

  await leads1.openLead('743087');

  await page.locator('[role="tab"]').nth(1).click();
  await leads1.openQuickReplySub();

  await sms.selectSMS();
  await sms.selectMobileField('Alternat Phone   (Demo Module)');
  await sms.selectTemplate('Custom Template');
  await sms.selectMergeField('Assigned To');
  await sms.sendSMS();
  await sms.closeModal();

  await page.locator('[role="tab"]').nth(1).click();
  await page.reload();

  await page.waitForTimeout(1000);

  const update = await page.locator('li.appendli div').nth(1).innerText();
  console.log("Update Captured date & Time: " + update);

  const update1 = await page.locator('li.appendli div').nth(2).innerText();
  console.log('SMS Triggered Update from Submodule ListView: ' + update1);
});


// ✅ TEST 4
test('Send SMS using GlobalSearch Quickaction', async () => {
  test.setTimeout(300000);

  const leads1 = new LeadsPage1(page);
  const sms = new SMSModalPage(page);
  const search = new GlobalSearch(page);

  await search.Searchicon();
  await search.selectModule('All Records');
  await search.globalsearchbar('9030358240');
  await search.Globalsearchicon();
  await search.selectmodulefromsearch('Leads');

  await leads1.openQuickReplyglobal('600080');

  await sms.selectSMS();
  await sms.selectMobileField('Alternat Phone   (Leads)');
  await sms.selectTemplate('Custom Template');
  await sms.selectMergeField('Assigned To');
  await sms.sendSMS();
  await sms.closeModal();

  await leads1.openrecordfromglobalsearch('600080');
  
});