import { Page } from '@playwright/test';
import { openUserMenu } from './Dashboard';

export async function clickProfile(page: Page) {
  await page.getByRole('button', { name: /User & Access Control/i }).click();
  await page.getByRole('link', { name: /^Profile$/i }).click();
}
export async function clickRole(page: Page) {
await page.getByText('Role').click();

}
export async function loginhistory(page: Page) {
    await page.getByText('Login History').click();
}

export async function Studio(page:Page){
 await page.getByText('Studio').click();

}

export async function EditField(page: Page) {
  //await page.getByRole('button', { name: /User & Access Control/i }).click();
  await page.locator('b:has-text("Edit Field")').waitFor();
  await page.locator('b:has-text("Edit Field")').click();

}
                // My Profile
export async function openMyProfile(page: Page) {
    await page.getByText("//span[contains(@class,'avatar')]//img").click();
    }

             // CRM Settings

export async function goToCRMSettings(page: Page) {
  // await openUserMenu(page); // Assuming dropdown is already open from ProfileIcon
  await page.getByText('CRM Settings').click();
}

// Other settings
export async function OtherSettings(page: Page) {

await page.getByText('Other Settings', { exact: true }).click();

}

      // profile icon

  export async function ProfileIcon(page: Page) {
          await page.locator("#livewireOverly").waitFor({ state: "hidden", timeout: 15000 }).catch(() => {});
           await page.locator('.dropdown-toggle.nav-link.dropdown-user-link').click();
  }