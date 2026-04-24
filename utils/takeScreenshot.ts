// pages/HomePage.ts

import { Page, TestInfo } from '@playwright/test';
import { takeScreenshot } from '../utils/screenshotUtil';

export class HomePage {
  constructor(
    private page: Page,
    private testInfo: TestInfo
  ) {}

  async openHomePage() {
    await this.page.goto('https://example.com');

    await takeScreenshot(this.page, this.testInfo, {
      fileName: 'home-page.png'
    });
  }
}