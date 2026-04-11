import { Page, Locator } from '@playwright/test';

export class TableActions {
  constructor(private page: Page) {}

  // 🔹 Get row using record ID
  private getRowById(recordId: string): Locator {
    return this.page.locator(`#row-${recordId}`);
  }

  // 🔹 Perform action using record ID
  async performAction(recordId: string, action: 'Details' | 'Edit' | 'Delete') {
    const row = this.getRowById(recordId);

   await row.waitFor({ state: 'attached', timeout: 15000 });
   // 3. Scroll into view (very important)
   await row.scrollIntoViewIfNeeded();
   await row.waitFor({ state: 'visible', timeout: 10000 });

    // 1. Click kebab menu (3 dots)
    const kebab = row.locator('i:has-text("more_vert"), button:has-text("⋮")').first();

    await kebab.waitFor({ state: 'visible' });
    await kebab.click();

    // 2. Wait for dropdown
    const dropdown = this.page.locator('.dropdown-menu:visible');
    await dropdown.waitFor({ state: 'visible' });

    // 3. Click action
    const actionItem = dropdown.locator(`text=${action}`);
    await actionItem.waitFor({ state: 'visible' });
    await actionItem.click();
  }
}