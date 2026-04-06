import { Page } from '@playwright/test';
import { Logger } from '../utils/Logger';

export class EmailModalPage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async selectEmailType() {
    Logger.step('Selecting Email type');
    await Logger.retryAction(async () => {
      await this.page.locator('span').filter({ hasText: /^Email$/ }).waitFor({ state: 'visible', timeout: 10000 });
      await this.page.locator('span').filter({ hasText: /^Email$/ }).click();
    });
    Logger.success('Email type selected');
  }

  async openEmailFieldsDropdown() {
    Logger.step('Opening email fields dropdown');
    await Logger.retryAction(async () => {
      const dropdownTrigger = this.page.getByRole('list').filter({ hasText: /^$/ }).first();
      await dropdownTrigger.waitFor({ state: 'visible', timeout: 10000 });
      await dropdownTrigger.click();
      await this.page.locator('[role="treeitem"], [role="option"], [role="listitem"], .select2-results__option').first().waitFor({ state: 'visible', timeout: 10000 }).catch(() => {});
    });
    Logger.success('Email fields dropdown opened');
  }

  async selectEmailField(fieldName: string) {
    Logger.step(`Selecting email field: ${fieldName}`);
    await Logger.retryAction(async () => {
      const fieldOption = this.page.locator('[role="treeitem"]', { hasText: fieldName }).first();
      const fallbackOption = this.page.locator(`text=${fieldName}`).first();

      await this.page.waitForTimeout(500);

      if ((await fieldOption.count()) > 0) {
        await fieldOption.scrollIntoViewIfNeeded();
        await fieldOption.waitFor({ state: 'visible', timeout: 15000 });
        await fieldOption.click();
        return;
      }

      if ((await fallbackOption.count()) > 0) {
        await fallbackOption.scrollIntoViewIfNeeded();
        await fallbackOption.waitFor({ state: 'visible', timeout: 15000 });
        await fallbackOption.click();
        return;
      }

      throw new Error(`Field option not found: ${fieldName}`);
    }, 5, 2000);
    Logger.success(`Selected ${fieldName}`);
  }

  async selectTemplate(templateName: string) {
    Logger.step(`Selecting template: ${templateName}`);
    await Logger.retryAction(async () => {
      await this.page.locator('[id^="select2-choose_template"]').first().waitFor({ state: 'visible', timeout: 10000 });
      await this.page.locator('[id^="select2-choose_template"]').first().click();
      await this.page.getByRole('treeitem', { name: templateName }).waitFor({ state: 'visible', timeout: 10000 });
      await this.page.getByRole('treeitem', { name: templateName }).click();
    });
    Logger.success(`Template ${templateName} selected`);
  }

  async editEmailContent(content: string) {
    Logger.step('Editing email content');
    await Logger.retryAction(async () => {
      const iframe = this.page.locator('iframe[title="Editor, qaBlockArea"]');
      await iframe.waitFor({ state: 'attached', timeout: 10000 });
      const frame = iframe.contentFrame();
      await frame.getByText('aaaaaa.').waitFor({ state: 'visible', timeout: 10000 });
      await frame.getByText('aaaaaa.').click();
      await frame.getByRole('textbox', { name: 'Editor, qaBlockArea' }).fill(content);
    });
    Logger.success('Email content edited');
  }

  async sendEmail() {
    Logger.step('Sending email');
    await Logger.retryAction(async () => {
      await this.page.getByRole('button', { name: 'send' }).waitFor({ state: 'visible', timeout: 10000 });
      await this.page.getByRole('button', { name: 'send' }).click();
    });
    Logger.success('Email sent');
  }

  async closeModal() {
    Logger.step('Closing email modal');
    await Logger.retryAction(async () => {
      await this.page.locator('#quick-action-modal').getByText('close', { exact: true }).waitFor({ state: 'visible', timeout: 10000 });
      await this.page.locator('#quick-action-modal').getByText('close', { exact: true }).click();
    });
    Logger.success('Modal closed');
  }

  async selectAdditionalField(fieldName: string) {
    Logger.step(`Selecting additional field: ${fieldName}`);
    await Logger.retryAction(async () => {
      await this.page.locator('[id^="select2-qa_Emailvarfields"]').first().waitFor({ state: 'visible', timeout: 10000 });
      await this.page.locator('[id^="select2-qa_Emailvarfields"]').first().click();
      await this.page.getByRole('treeitem', { name: fieldName }).waitFor({ state: 'visible', timeout: 10000 });
      await this.page.getByRole('treeitem', { name: fieldName }).click();
    });
    Logger.success(`Additional field ${fieldName} selected`);
  }
}