import '../utils/Screenshot';
import { test } from '@playwright/test';
import { login } from '../utils/login';
import { clickCall, clickDay, clickLogo, clickMenu, clickNo, clickSettings, clickYes, openMyProfile } from '../utils/Dashboard';
import {Menulist} from '../utils/Menulist';
import {verifyModule}from '../utils/ModuleValidation';
import { RphoneProvider } from '../utils/R-phoneaction';



test('Profile-userview Test', async ({ page }) => {
    await login(page, {
        companyName: 'NAVEEN',
        userName: 'rsoft',
        password: 'RSoft!@345',
    });

    await openMyProfile(page);
});
