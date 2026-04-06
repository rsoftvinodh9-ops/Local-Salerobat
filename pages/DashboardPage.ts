import { Page } from '@playwright/test';
import { Logger } from '../utils/Logger';

export class DashboardPage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async openVerticalMenu() {
    Logger.step('Opening vertical menu');
    await Logger.retryAction(async () => {
      await this.page.locator('#vertical_header_name').waitFor({ state: 'visible', timeout: 10000 });
      await this.page.locator('#vertical_header_name').click();
    });
    Logger.success('Vertical menu opened');
  }

  async navigateToModule(moduleName: string) {
    Logger.step(`Navigating to module: ${moduleName}`);
    await Logger.retryAction(async () => {
      await this.page.getByRole('link', { name: moduleName }).waitFor({ state: 'visible', timeout: 10000 });
      await this.page.getByRole('link', { name: moduleName }).click();
    });
    Logger.success(`Navigated to ${moduleName}`);
  }
}