import '../utils/Screenshot';
import {expect , test} from '@playwright/test';
import {login } from '../utils/login';
import {openMyProfile} from '../utils/ProfileActions';
import {goToCRMSettings} from '../utils/Dashboard';
import{clickProfile, EditField, Studio} from '../utils/SettingsPage';
import { AddModule, ClickModulePermission } from '../pages/EditFieldPage';
import {setMultiplePermissions} from '../utils/SetModulePermission';
import { CreateModule ,closeprofile} from '../utils/Create New Module';
import {ProfilePrivileges, Submitbutton} from '../utils/Profile Privileges';
import {addField} from '../utils/Filed Creation';

test('All Ui Test', async ({ page }) => {
  test.setTimeout(180000);
  await login(page, 'VINODH', 'rsoft', 'Vinodh@5292'); 
  await openMyProfile(page);
  await goToCRMSettings(page);
  await Studio(page);
  await EditField(page);
  await AddModule(page);
await CreateModule(page, {
  moduleName: 'Nithyanandam',
  moduleType: 'Basic',
  defaultBlock: 'Basic Info',
  favIcon: 'Notifications'
});


await ProfilePrivileges(page, {
  'Test123': ['View', 'Create', 'Edit', 'Delete'],
  //'New Profile': ['View', 'Edit'],
});

await Submitbutton(page);
await ClickModulePermission(page, 'Nithyanandam', 'Quick Create', true);
await ClickModulePermission(page, 'Nithyanandam', 'Edit');

// await addField(page, {
//   fieldType: 'Text Area',
//   required: true

// });
const fieldTypes = [

  'Text Area',
  'Email',
  'Phone Number',
  'Name Field',
  'Url',
  'File',
  'Numbers',
  'Currency',
  //'Date',
  //'Time',
  'City',
  'State',
  'Country'
  //'Sequence Numbering'

];

for (const fieldType of fieldTypes) {
  await addField(page, {
    fieldType,
    required: true
  });
}


//await page.getByRole('button', { name: /^Submit$/i }).click();




  // await ClickModulePermission(page,'Leads','Quick Create',true);
  // await ClickModulePermission(page,'Leads','Mobile View',false);
  // await ClickModulePermission(page,'Leads','Auto Dialer',true);



}); 





