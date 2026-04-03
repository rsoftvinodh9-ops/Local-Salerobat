import '../utils/Screenshot';
import { expect, test } from '@playwright/test';
import { login, verifyInvalidLogin } from '../utils/login';
import {openMyProfile} from '../utils/ProfileActions';
import { goToCRMSettings } from '../utils/Dashboard';
import {clickProfile} from '../utils/SettingsPage';
import { clickProfileAction } from '../utils/ProfilePageActions'; 
import { setMultiplePermissions } from '../utils/SetModulePermission';


test('Profile-userview Test', async ({ page }) => {
  test.setTimeout(90000);
  // Valid login
  await login(page, 'VINODH', 'rsoft', 'Vinodh@5292');
    // await verifyInvalidLogin(page);

  await openMyProfile(page);
  await goToCRMSettings(page);
  await clickProfile(page);
  await clickProfileAction(page, 'Test123', 'Modules');
  await setMultiplePermissions(page, 'Calls', {
    View: true,
    Edit: false,
    Delete: true,
    Create: false,
  });





 // await page.screenshot({ path: 'screenshots/Profile-userview.png', fullPage: true });      





  //await expect(page.getByRole('heading', { name: /User Management/i })).toBeVisible();



});