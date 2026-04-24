import '../utils/Screenshot';
import { test, Page, BrowserContext } from '@playwright/test';
import { login } from '../utils/login';
import { clickMenu } from '../utils/Dashboard';
import { Menulist } from '../utils/Menulist';

import { LeadsPage1 } from '../pages/LeadsPage';
import { WhatsAppPage } from '../pages/WhatsAppPage';
import { SubRecord } from '../pages/SubRecord';
import { GlobalSearch } from '../pages/GlobalSearch';

let page: Page;
let context: BrowserContext;

// ✅ LOGIN ONLY ONCE
test.beforeAll(async ({ browser }) => {
  context = await browser.newContext();
  page = await context.newPage();

  
  context.on('page', async (newPage) => {
    try {
      await newPage.waitForLoadState('domcontentloaded');

      if (!newPage.isClosed() && newPage.url() === 'about:blank') {
        await newPage.close();
      }
    } catch (error) {
      if (!newPage.isClosed()) {
        throw error;
      }
    }
  });

  await login(page, 'NAVEEN', 'rsoft', 'RSoft!@345');
});

// ✅ CLEANUP
test.afterAll(async () => {
  await context.close();
});



// ✅ TEST 1
test('Send WhatsApp Task', async () => {
  test.setTimeout(300000);

  const leads1 = new LeadsPage1(page);
  const whatsApp = new WhatsAppPage(page);

  await clickMenu(page);
  await Menulist(page, 'Leads');

  await leads1.openQuickReply('743087');

  await whatsApp.selectWhatsapp();
  await whatsApp.selectMobileField();
  await whatsApp.slectTemplate();
  await whatsApp.AddField();
  await whatsApp.URLField();
  //await whatsApp.EXpiryDate();
  await whatsApp.Sendbutton();
  await whatsApp.closeModal();

  await leads1.openLead('743087');

  const update = await page.locator('.updatesappend div.act-time').first().innerText();
  console.log("Update Captured date & Time: " + update);

  const update1 = await page.locator('li.appendli .base-timeline-info').first().innerText();
  console.log('WhatsApp Message Triggered Update from list View : ' + update1);
});


// ✅ TEST 2
test('Send WhatsApp Task in Detailview', async () => {
  test.setTimeout(300000);

  const leads1 = new LeadsPage1(page);
  const whatsApp = new WhatsAppPage(page);

  await clickMenu(page);
  await Menulist(page, 'Leads');

  await leads1.openLead('743087');
  await leads1.openQuickReplyDetail();

  await whatsApp.selectWhatsapp();
  await whatsApp.selectMobileField();
  await whatsApp.slectTemplate();
  await whatsApp.AddField();
  await whatsApp.URLField();
  //await whatsApp.EXpiryDate();
  await whatsApp.Sendbutton();
  await whatsApp.closeModal();

  await page.reload();

  const update = await page.locator('.updatesappend div.act-time').first().innerText();
  console.log("Update Captured date & Time: " + update);

  const update2 = await page.locator('li.appendli .base-timeline-info').first().innerText();
  console.log("WhatsApp Message Triggered Update from Detail View: " + update2);
});


// ✅ TEST 3
test('Send WhatsApp Task from Submodule ListView', async () => {
  test.setTimeout(300000);

  const leads1 = new LeadsPage1(page);
  const whatsApp = new WhatsAppPage(page);

  await clickMenu(page);
  await Menulist(page, 'Leads');

  await leads1.openLead('743087');
  await page.locator('[role="tab"]').nth(1).click();
  await leads1.openQuickReplySub();

  await whatsApp.selectWhatsapp();
  await whatsApp.selectMobileField();
  await whatsApp.slectTemplate();
  await whatsApp.AddField();
  await whatsApp.URLField();
  //await whatsApp.EXpiryDate();
  await whatsApp.Sendbutton();
  await whatsApp.closeModal();

  await page.reload();

  const update = await page.locator('.updatesappend div.act-time').first().innerText();
  console.log("Update Captured date & Time: " + update);

  const update1 = await page.locator('li.appendli .base-timeline-info').first().innerText();
  console.log("WhatsApp Message Triggered Update from Submodule ListView: " + update1);
});


// ✅ TEST 4
test('Send WhatsApp Task from Global Search', async () => {
  test.setTimeout(300000);

  const leads1 = new LeadsPage1(page);
  const whatsApp = new WhatsAppPage(page);
  const search = new GlobalSearch(page);

  await search.Searchicon();
  await search.selectModule('All Records');
  await search.globalsearchbar('9030358240');
  await search.Globalsearchicon();
  await search.selectmodulefromsearch('Leads');

  await leads1.openQuickReplyglobal('600080');

  await whatsApp.selectWhatsapp();
  await whatsApp.selectMobileField();
  await whatsApp.slectTemplate();
  await whatsApp.AddField();
  await whatsApp.URLField();
  //await whatsApp.EXpiryDate();
  await whatsApp.Sendbutton();
  await whatsApp.closeModal();

  await leads1.openrecordfromglobalsearch('600080');
});

