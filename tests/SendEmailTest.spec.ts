import '../utils/Screenshot';
import { test, Page, BrowserContext } from '@playwright/test';
import { login } from '../utils/login';
import { clickMenu } from '../utils/Dashboard';
import { Menulist } from '../utils/Menulist';

import { LeadsPage, LeadsPage1 } from '../pages/LeadsPage';
import { EmailModalPage } from '../pages/EmailModalPage';
import { EmailsPage } from '../pages/EmailsPage';
import { GlobalSearch } from '../pages/GlobalSearch';
import { TableActions } from '../pages/ListViewActions';
import { toasterMess } from '../utils/CRMtoaster';  

let page: Page;
let context: BrowserContext;

// ✅ LOGIN ONLY ONCE
test.beforeAll(async ({ browser }) => {
  context = await browser.newContext();
  page = await context.newPage();

  await login(page, 'NAVEEN', 'rsoft', 'RSoft!@345');
});

// ✅ CLEANUP
test.afterAll(async () => {
  await context.close();
});


// ✅ TEST 1
test('Send email to lead and verify', async () => {
  test.setTimeout(300000);

  const leads1 = new LeadsPage1(page);
  const emailModalPage = new EmailModalPage(page);
  const emailsPage = new EmailsPage(page);

  await clickMenu(page);
  await Menulist(page, 'Leads');

  await leads1.openQuickReply('743087');
  await emailsPage.QuickEmail();

  await emailModalPage.selectEmailType('Secondary Email ( rsoft Assigned To )');
  await emailModalPage.openEmailFieldsDropdown();
  await emailModalPage.selectEmailField('Secondary Email ( rsoft Assigned To )');
  await emailModalPage.selectTemplate('Sample template');
  await emailModalPage.sendEmail();
  await emailsPage.Quickclose();

  await leads1.openLead('743087');

  const update = await page.locator('li.appendli div').nth(1).innerText();
  console.log("Update Captured date & Time: " + update);

  const update1 = await page.locator('li.appendli div').nth(2).innerText();
  console.log('Email Triggered Update from List View: ' + update1);
});


// ✅ TEST 2
test('Send email from detail view', async () => {
  test.setTimeout(300000);

  const leads1 = new LeadsPage1(page);
  const emailModalPage = new EmailModalPage(page);
  const emailsPage = new EmailsPage(page);

  await clickMenu(page);
  await Menulist(page, 'Leads');

  await leads1.openLead('743087');
  await leads1.openQuickReplyDetail();
  await emailsPage.QuickEmail();

  await emailModalPage.selectEmailType('Secondary Email ( rsoft Assigned To )');
  await emailModalPage.openEmailFieldsDropdown();
  await emailModalPage.selectEmailField('Secondary Email ( rsoft Assigned To )');
  await emailModalPage.selectTemplate('Sample template');
  await emailModalPage.sendEmail();
  await emailsPage.Quickclose();

  await page.reload();

  const update = await page.locator('li.appendli div').nth(1).innerText();
  console.log("Update Captured date & Time: " + update);

  const update1 = await page.locator('li.appendli div').nth(2).innerText();
  console.log('Email Triggered Update from Detail View: ' + update1);
});


// ✅ TEST 3
test('Send email from submodule', async () => {
  test.setTimeout(300000);

  const leads1 = new LeadsPage1(page);
  const emailModalPage = new EmailModalPage(page);
  const emailsPage = new EmailsPage(page);

  await clickMenu(page);
  await Menulist(page, 'Leads');

  await leads1.openLead('743087');
  await page.locator('[role="tab"]').nth(1).click();
  await leads1.openQuickReplySub();
  await emailsPage.QuickEmail();

  await emailModalPage.selectEmailType('Secondary Email ( rsoft Assigned To )');
  await emailModalPage.openEmailFieldsDropdown();
  await emailModalPage.selectEmailField('Secondary Email ( rsoft Assigned To )');
  await emailModalPage.selectTemplate('Sample template');
  await emailModalPage.sendEmail();
  await emailsPage.Quickclose();

  await page.reload();

  const update = await page.locator('li.appendli div').nth(1).innerText();
  console.log("Update Captured date & Time: " + update);

  const update1 = await page.locator('li.appendli div').nth(2).innerText();
  console.log('Email Triggered Update from Submodule: ' + update1);
});


// ✅ TEST 4
test('Send email from global search', async () => {
  test.setTimeout(300000);

  const leads1 = new LeadsPage1(page);
  const emailModalPage = new EmailModalPage(page);
  const search = new GlobalSearch(page);

  await search.Searchicon();
  await search.selectModule('All Records');
  await search.globalsearchbar('9030358240');
  await search.Globalsearchicon();
  await search.selectmodulefromsearch('Leads');

  await leads1.openQuickReplyglobal('600080');

  await emailModalPage.selectEmailType('Email (Leads)');
  await emailModalPage.openEmailFieldsDropdown();
  await emailModalPage.selectEmailField('Email (Leads)');
  await emailModalPage.selectTemplate('Sample template');
  await emailModalPage.sendEmail();
  await emailModalPage.closeModal();

  await leads1.openrecordfromglobalsearch('600080');
  await page.reload();6
});