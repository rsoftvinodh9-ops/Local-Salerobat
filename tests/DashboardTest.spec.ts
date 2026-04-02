import '../utils/Screenshot';
import { test } from '@playwright/test';
import { login } from '../utils/login';
import { clickCall, clickDay, clickMenu, clickNo, clickSettings, clickYes } from '../utils/Dashboard';
import {Menulist} from '../utils/Menulist';
import {verifyModule}from '../utils/ModuleValidation';
import { RphoneProvider } from '../utils/R-phoneaction';

test.use({
  permissions: ['microphone']
});

test('Dashboard Interaction Test', async ({ page }) => {
    await login(page, {
        companyName: 'NAVEEN',
        userName: 'rsoft',
        password: 'RSoft!@345',
    });

    // await clickDay(page);
    // await clickNo(page);
    // await clickCall(page);

    //const screenshot = await page.screenshot();
    // await test.info().attach('R-phone is opened', {
    //    body: screenshot,
    //    contentType: 'image/png'
    // });

    // const dialerSettings = page.locator('body');
    // await RphoneProvider(page, dialerSettings, 'Naveen IVR', 'vvv');

    await clickDay(page);
    await clickNo(page);
    await clickMenu(page);
    //await clickSettings(page);
    await Menulist(page, 'Leads');
    await verifyModule(page, 'Calls');
});
