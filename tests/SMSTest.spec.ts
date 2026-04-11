import '../utils/Screenshot';
import { test } from '@playwright/test';
import { login } from '../utils/login';
import { DashboardPage } from '../pages/DashboardPage';
import {clickMenu} from'../utils/Dashboard';
import { LeadsPage } from '../pages/LeadsPage';
import { SMSModalPage } from '../pages/SMSModalPage';
import {Menulist} from '../utils/Menulist';
import {LeadsPage1} from '../pages/LeadsPage';
import { TableActions } from '../pages/ListViewActions';


test('Send SMS to Lead', async ({ page }) => {

  const dashboard = new DashboardPage(page);
  const leads = new LeadsPage(page);
  const sms = new SMSModalPage(page); 
  const leads1 = new LeadsPage1(page);
  const table = new TableActions(page);

 // Login

 await login(page, 'NAVEEN', 'rsoft', 'RSoft!@345');

  // Navigate to Leads 
  await clickMenu(page);
  await Menulist(page, 'Leads');
  await leads1.openQuickReply('647696');
  // Send SMS
   await sms.selectSMS();
   //Dropdown  hahdled 
  await sms.selectMobileField();
  await sms.selectTemplate('Custom Template');
  await sms.selectMergeField('Area');
  await sms.sendSMS();
  await sms.closeModal();
  //open Lead
  // await page.waitForTimeout(1000);
  await leads1.openLead('647696');
 

  // Update Captuerd 
  await page.waitForTimeout(1000);
const update = await page.locator('li.appendli').locator('div').nth(1).innerText();
console.log("Update Captured date & Time: " + update);

const update1 = await page.locator('li.appendli').locator('div').nth(2).innerText();
console.log('Updates from: ' + update1);












});