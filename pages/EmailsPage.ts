import { Page } from '@playwright/test';
import { Logger } from '../utils/Logger';

export class EmailsPage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async clickViewAll() {
    Logger.step('Clicking View All');
    await Logger.retryAction(async () => {
      await this.page.getByRole('link', { name: 'View All -' }).waitFor({ state: 'visible', timeout: 10000 });
      await this.page.getByRole('link', { name: 'View All -' }).click();
    });
    Logger.success('View All clicked');
  }

  async openEmailBySubject(subject: string) {
    Logger.step(`Opening email: ${subject}`);
    
    // Custom retry logic for email search with waits between attempts
    let lastError: Error | null = null;
    for (let attempt = 0; attempt < 5; attempt++) {
      try {
        // Wait for email list to load
        await this.page.locator('table, [class*="email"], [class*="list"]').first().waitFor({ state: 'visible', timeout: 10000 }).catch(() => {});
        
        // Try to find and click email with partial text matching
        const emailRow = this.page.locator(`text="${subject}"`).first();
        const isVisible = await emailRow.isVisible().catch(() => false);
        
        if (isVisible) {
          await emailRow.click();
          Logger.success(`Email ${subject} opened`);
          return;
        }
        
        // Scroll down to load more emails
        await this.page.evaluate(() => window.scrollBy(0, 500));
        await new Promise(resolve => setTimeout(resolve, 1000));
      } catch (e) {
        lastError = e as Error;
        if (attempt < 4) {
          await new Promise(resolve => setTimeout(resolve, 2000));
        }
      }
    }
    
    Logger.error(`Failed to find email with subject: ${subject}`);
    throw lastError || new Error(`Email with subject "${subject}" not found after 5 attempts`);
  }

  async clickMailBoxSection() {
    Logger.step('Clicking mail box section');
    await Logger.retryAction(async () => {
      await this.page.locator('.mail-box-section').waitFor({ state: 'visible', timeout: 10000 });
      await this.page.locator('.mail-box-section').click();
    });
    Logger.success('Mail box section clicked');
  }
}