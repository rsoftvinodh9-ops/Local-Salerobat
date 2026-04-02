import { test } from '@playwright/test';
import { login } from '../utils/login';
import { clickDay, clickMenu, clickNo, clickSettings, clickYes } from '../utils/Dashboard';
import {Menulist} from '../utils/Menulist';
import {verifyModule}from '../utils/ModuleValidation';
test('Dashboard Interaction Test', async ({ page }) => {
    await login(page, {
        companyName: 'VINODH',
        userName: 'rsoft',
        password: 'Vinodh@5292',
    });
    await clickDay(page);
    await clickNo(page);
    await clickMenu(page);
    //await clickSettings(page);
    await Menulist(page, 'Calls');
    await verifyModule(page, 'Leads');

}); 