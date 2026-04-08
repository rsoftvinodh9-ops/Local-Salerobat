import { Page } from '@playwright/test';



type CreateModuleData = {
  moduleName: string;
  moduleType: string;
  defaultBlock: string;
  favIcon: string;
};

export async function CreateModule(page: Page, data: CreateModuleData) {
  // Module Name
  await page.locator('input[name="modulename"]').fill(data.moduleName);

  // Module Type (dropdown)
  await page.getByRole('textbox', { name: /Basic/i }).click();
  await page.getByRole('treeitem', { name: data.moduleType }).click();

  // Default Block
  await page.locator('input[name="module_block"]').fill(data.defaultBlock);

  // Fav Icon dropdown
  await page.getByText('None-Selected').click();
  await page
    .locator('#createnewmodule')
    .getByRole('listitem', { name: new RegExp(`^${data.favIcon}$`, 'i') })
    .click();

  // Next
  await page.getByText('Next', { exact: true }).click();

  // Profile selection when a visible control is available
  // const profileCheckbox = page.locator('#createnewmodule input[type="checkbox"]#profilechecked');
  // if (await profileCheckbox.count()) {
  //   const isVisible = await profileCheckbox.isVisible().catch(() => false);
  //   if (isVisible) {
  //     await profileCheckbox.check();
  //   }
    
//   }
//       // Next Button
//   const submitButton = page.locator('#createnewmodule button[type="submit"], #createnewmodule .custom-save').first();
//   await submitButton.click({ force: true });
}


export async function closeprofile(page: Page) {
 await page.locator('button.close.removevalue:visible').click().catch(() => {});

}
// export async function Nextbutton(page: Page) {
//      await page.getByText('Next', { exact: true }).click();
// }   
   
