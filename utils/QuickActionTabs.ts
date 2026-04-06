import { Page, Locator } from '@playwright/test';

export class QuickAction {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  /**
   * Click quick action tab dynamically
   * @param tabName - 'Edit' | 'WhatsApp' | 'SMS' | 'Email'
   */
  async clickTab(tabName: string): Promise<void> {
    const tab: Locator = this.page.locator(`button:has-text("${tabName}")`);
    await tab.waitFor({ state: 'visible' });
    await tab.click();
  }
}