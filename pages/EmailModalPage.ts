import { Page } from '@playwright/test';
import { Logger } from '../utils/Logger';

export class EmailModalPage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  private get modal() {
    return this.page.locator('#quick-action-modal');
  }

  private getFieldContainer(label: string) {
    return this.modal.locator(`xpath=.//*[normalize-space(text())="${label}"]/following-sibling::*[1]`).first();
  }

  private toExactCaseInsensitiveRegex(value: string) {
    const escaped = value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    return new RegExp(`^${escaped}$`, 'i');
  }

  private async openLabeledCombobox(label: string) {
    const container = this.getFieldContainer(label);
    await container.waitFor({ state: 'visible', timeout: 15000 });

    const trigger = container.getByRole('combobox').last();
    await trigger.waitFor({ state: 'visible', timeout: 15000 });
    await trigger.click();

    return container;
  }

  async selectEmailType(_emailType?: string) {
    Logger.step('Selecting Email type');
    await Logger.retryAction(async () => {
      const toEmailContainer = this.getFieldContainer('To Email');
      if (await toEmailContainer.isVisible().catch(() => false)) {
        return;
      }

      const emailTrigger = this.modal.getByText('mail', { exact: true }).first();
      await emailTrigger.waitFor({ state: 'visible', timeout: 10000 });
      await emailTrigger.click();
      await this.modal.getByText('To Email', { exact: true }).waitFor({ state: 'visible', timeout: 15000 });
    });
    Logger.success('Email type selected');
  }

  async openEmailFieldsDropdown() {
    Logger.step('Opening email fields dropdown');
    await Logger.retryAction(async () => {
      await this.openLabeledCombobox('To Email');
      await this.page.waitForTimeout(300);
    });
    Logger.success('Email fields dropdown opened');
  }

  async selectEmailField(fieldName: string) {
    Logger.step(`Selecting email field: ${fieldName}`);
    await Logger.retryAction(async () => {
      const fieldOption = this.page
        .getByRole('treeitem', { name: fieldName, exact: true })
        .or(this.page.getByRole('option', { name: fieldName, exact: true }))
        .last();
      await fieldOption.scrollIntoViewIfNeeded();
      await fieldOption.waitFor({ state: 'visible', timeout: 15000 });
      await fieldOption.click();
    }, 5, 2000);
    Logger.success(`Selected ${fieldName}`);
  }

  async selectTemplate(templateName: string) {
    Logger.step(`Selecting template: ${templateName}`);
    await Logger.retryAction(async () => {
      await this.openLabeledCombobox('Choose Template');
      const templateMatcher = this.toExactCaseInsensitiveRegex(templateName);
      const option = this.page
        .getByRole('treeitem', { name: templateMatcher })
        .or(this.page.getByRole('option', { name: templateMatcher }))
        .last();
      await option.waitFor({ state: 'visible', timeout: 10000 });
      await option.click();
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
      await this.openLabeledCombobox('Add Fields');
      const option = this.page
        .getByRole('treeitem', { name: fieldName, exact: true })
        .or(this.page.getByRole('option', { name: fieldName, exact: true }))
        .last();
      await option.waitFor({ state: 'visible', timeout: 10000 });
      await option.click();
    });
    Logger.success(`Additional field ${fieldName} selected`);
  }
}
