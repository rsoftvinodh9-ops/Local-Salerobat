// pages/SMSModalPage.ts
import { Page } from '@playwright/test';

export class SMSModalPage {
  constructor(private page: Page) {}

  async selectSMS() {
    await this.page.getByText('sms', { exact: true }).click();
  }

  async selectMobileField() {
    await this.page.locator('#select2-rece_number-mf-container').click();
    await this.page.locator('.select2-results__option', { hasText: 'Mobile Phone' }).click();
  }

  async selectTemplate(template: string) {
    await this.page.locator('#select2-QASmsTemplated-container').click();
    await this.page.locator('.select2-results__option', { hasText: template }).click();
  }

  async selectMergeField(field: string) {
    await this.page.getByRole('textbox', { name: 'Select an option' }).click();
    await this.page.locator('.select2-results__option', { hasText: field }).click();
  }

  async sendSMS() {
    await this.page.getByRole('button', { name: 'send' }).click();
  }

  async closeModal() {
    await this.page.locator('#quick-action-modal').getByText('close', { exact: true }).click();
  }
}