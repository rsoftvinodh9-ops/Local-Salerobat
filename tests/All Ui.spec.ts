import '../utils/Screenshot';
import {expect , test} from '@playwright/test';
import {login } from '../utils/login';
import {openMyProfile} from '../utils/ProfileActions';
import {goToCRMSettings} from '../utils/Dashboard';
import{clickProfile, EditField, Studio} from '../utils/SettingsPage';
import { AddModule, ClickModulePermission } from '../pages/EditFieldPage';

test('All Ui Test', async ({ page }) => {
  test.setTimeout(60000);
  await login(page, 'VINODH', 'rsoft', 'Vinodh@5292'); 
  await openMyProfile(page);
  await goToCRMSettings(page);
  await Studio(page);
  await EditField(page);
  //await AddModule(page);
  await ClickModulePermission(page,'Leads','Quick Create');
  await ClickModulePermission(page,'Leads','Mobile View');
  // await ClickModulePermission(page,'Leads','Auto Dialer');


  





}); 
