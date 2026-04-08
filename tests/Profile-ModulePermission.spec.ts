import '../utils/Screenshot';
import { test, expect } from '@playwright/test';
import { login } from '../utils/login';
import { openMyProfile } from '../utils/ProfileActions';
import { goToCRMSettings, clickMenu } from '../utils/Dashboard';
import { clickProfile } from '../utils/SettingsPage';
import { clickProfileAction, closeprofilepopup ,} from '../utils/ProfilePageActions';
import { setMultiplePermissions } from '../utils/SetModulePermission';
import { Menulist } from '../utils/Menulist';
import { logout } from '../utils/logout';
import {verifyModulePermissions} from '../utils/RecordPermission';

test('Profile-userview Test', async ({ page }) => { 
  test.setTimeout(50000);

  await login(page, 'VINODH', 'rsoft', 'Vinodh@5292');
  await openMyProfile(page);
  await goToCRMSettings(page);
  await clickProfile(page);
  await clickProfileAction(page, 'Implementation', 'Modules');

  await setMultiplePermissions(page, 'Leads', {
    View: true,
    // Edit: false,
    // Delete: true,
    // Create: false,
  });

  await closeprofilepopup(page);
  //await page.locator('button.profileModulePopupClose').click();

  await logout(page);

  await login(page, 'VINODH', 'Pradeep', 'User@1234');
  await clickMenu(page);
  await Menulist(page, 'Leads');

  await verifyModulePermissions(page, 'Leads');
 

});
