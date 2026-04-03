import { Page } from '@playwright/test';

// Click Day button
export async function clickDay(page: Page) {
  await page.getByRole('button', { name: /day/i }).click();
}

// Click Yes
export async function clickYes(page: Page) {
  await page.getByRole('button', { name: 'Yes' }).click();
}

// Click No
export async function clickNo(page: Page) {
  await page.getByRole('button', { name: 'No' }).click();
}

// Click Logo
export async function openMyProfile(page: Page) {
    await page.getByText("//span[contains(@class,'avatar')]//img").click();
}

// // Logout
// export async function logout(page: Page) {
//   await page.getByRole('link', { name: 'Logout' }).click();
// }
//Call Button
export async function clickCall(page: Page) {
  const headerActions = page
    .locator('ul')
    .filter({ has: page.getByRole('button', { name: /day/i }) })
    .first();

  await headerActions.locator('li').nth(1).click();
}
// Notification
export async function clickNotification(page: Page) {
  await page.getByRole('link', { name: 'Notification' }).click();
}
//settings
export async function clickSettings(page: Page) {
 await page.locator("i:has-text('settings')").click();
}
// Menu
export async function clickMenu(page: Page) {
 await page.getByText('list', { exact: true }).click();
}
// Open user dropdown
export async function openUserMenu(page: Page) {
  await page.locator('.dropdown-toggle.nav-link.dropdown-user-link').click();
}

// Go to CRM Settings
export async function goToCRMSettings(page: Page) {
  await openUserMenu(page);
  await page.getByRole('link', { name: /CRM Setting/i }).click();
}

// Navigate directly (dynamic URL)
export async function navigateToProfileSettings(page: Page) {
  await page.goto('https://rdot.in/public/admin/Settings?Module=Profile&parent=Setting&view=index');
}

// Open Admin Panel Settings
export async function openAdminPanelSettings(page: Page) {
  await page.locator('#profile_9 a')
    .filter({ hasText: 'admin_panel_settings' })
    .click();
}

// Select User in popup
export async function selectUserOption(page: Page) {
  await page.locator('#profileModelPop').getByText('User').click();
}

// Close popup
export async function closePopup(page: Page) {
  await page.getByRole('button', { name: /×|close/i }).click();
}

// // Logout
 export async function logout(page: Page) {
   await openUserMenu(page);
   await page.getByRole('link', { name: /Logout/i }).click();

   
 }