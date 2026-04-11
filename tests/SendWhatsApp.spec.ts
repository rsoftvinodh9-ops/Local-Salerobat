import '../utils/Screenshot';
import { test } from '@playwright/test';
import { login } from '../utils/login';
import { DashboardPage } from '../pages/DashboardPage';
import {clickMenu} from'../utils/Dashboard';
import { LeadsPage } from '../pages/LeadsPage';
import { SMSModalPage } from '../pages/SMSModalPage';
import {Menulist} from '../utils/Menulist';
import {WhatsAppPage} from'../pages/WhatsAppPage';
import {LeadsPage1} from '../pages/LeadsPage';
import { TableActions } from '../pages/ListViewActions';


test ('Send WhatsApp Task',async ({ page }) =>{ 
     test.setTimeout(60000);
     const dashboard = new DashboardPage(page);
  const leads = new LeadsPage(page);
  const leads1 = new LeadsPage1(page);
  const whatsApp =new WhatsAppPage(page);
  const table = new TableActions(page);


  // Login
await login(page, 'NAVEEN', 'rsoft', 'RSoft!@345');
// Navigate to Leads
await clickMenu(page);
await Menulist(page, 'Leads');
await leads1.openQuickReply('647696');
// Send WhatsApp
//await whatsApp.selectWhatsapp();
await whatsApp.selectMobileField();
await whatsApp.slectTemplate();
await whatsApp.AddField();
await whatsApp.URLField ();
await whatsApp.EXpiryDate ();
await whatsApp.Sendbutton();
await whatsApp.closeModal();
//Open Lead
 await leads1.openLead('647696');

 // Update Captuerd 
const update = await page.locator('.updatesappend').locator('div.act-time').first().innerText();

console.log("Update Captured date & Time: " + update);
const update1 = await page.locator('li.appendli').locator('.base-timeline-info').first().innerText();
console.log('Updates from: ' + update1);



});