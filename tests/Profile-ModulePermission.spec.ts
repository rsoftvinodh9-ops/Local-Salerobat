import '../utils/Screenshot';
import { expect, test } from '@playwright/test';
import { login } from '../utils/login';
import { openMyProfile } from '../utils/ProfileActions';
import { goToCRMSettings, clickMenu } from '../utils/Dashboard';
import { clickProfile } from '../utils/SettingsPage';
import { clickProfileAction } from '../utils/ProfilePageActions';
import { setMultiplePermissions } from '../utils/SetModulePermission';
import { Menulist } from '../utils/Menulist';
import { logout } from '../utils/logout';

test('Profile-userview Test', async ({ page }) => {
  test.setTimeout(90000);

  await login(page, 'VINODH', 'rsoft', 'Vinodh@5292');
  await openMyProfile(page);
  await goToCRMSettings(page);
  await clickProfile(page);
  await clickProfileAction(page, 'Implementation', 'Modules');

  await setMultiplePermissions(page, 'Calls', {
    View: true,
    Edit: false,
    Delete: true,
    Create: false,
  });
  await page.locator('button.profileModulePopupClose').click();

  await logout(page);

  await login(page, 'VINODH', 'Pradeep', 'User@1234');
  await clickMenu(page);
  await Menulist(page, 'Calls');

  await expect(page.getByRole('heading', { name: /Calls - All/i })).toBeVisible();
  await expect(page.getByRole('button', { name: 'Edit' })).toHaveCount(0);
});
