import '../utils/Screenshot';
import { expect, test } from '@playwright/test';
import { login, verifyInvalidLogin } from '../utils/login';
import {openMyProfile} from '../utils/ProfileActions';
import { goToCRMSettings } from '../utils/Dashboard';
import {clickProfile} from '../utils/SettingsPage';
import { clickProfileAction } from '../utils/ProfilePageActions';   

test('Profile-userview Test', async ({ page }) => {
  test.setTimeout(50000);
  // Valid login
  await login(page, 'VINODH', 'rsoft', 'Vinodh@5292');
    // await verifyInvalidLogin(page);

  await openMyProfile(page);
  await goToCRMSettings(page);
  await clickProfile(page);
  await clickProfileAction(page, 'mobile app testing', 'edit');





  //await expect(page.getByRole('heading', { name: /User Management/i })).toBeVisible();



});
