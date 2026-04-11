import { Page } from '@playwright/test';

export class Logger {
  static step(message: string) {
    console.log(`[STEP] ${message}`);
  }

  static success(message: string) {
    console.log(`[SUCCESS] ${message}`);
  }

  static error(message: string) {
    console.error(`[ERROR] ${message}`);
  }

  static async screenshotOnFailure(page: Page, testName: string) {
    try {
      await page.screenshot({ path: `screenshots/${testName}-failure.png`, fullPage: true });
      Logger.step(`Screenshot captured for ${testName}`);
    } catch (e) {
      Logger.error(`Failed to capture screenshot: ${e.message}`);
    }
  }

  static async screenshot(page: Page, name: string) {
    try {
      await page.screenshot({ path: `screenshots/${name}.png`, fullPage: true });
      Logger.step(`Screenshot captured: ${name}`);
    } catch (e) {
      Logger.error(`Unable to capture screenshot ${name}: ${e.message}`);
    }
  }

  static async retryAction(action: () => Promise<void>, maxRetries: number = 3, delay: number = 1000) {
    for (let i = 0; i < maxRetries; i++) {
      try {
        await action();
        return;
      } catch (error) {
        if (i === maxRetries - 1) throw error;
        Logger.step(`Action failed, retrying (${i + 1}/${maxRetries})`);
        await new Promise(resolve => setTimeout(resolve, delay));
      }
    }
  }
}
