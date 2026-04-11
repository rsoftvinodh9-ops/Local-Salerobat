// pages/SMSModalPage.ts
import { Page } from '@playwright/test';

export class SMSModalPage {
  constructor(private page: Page) {}

  async selectSMS() {
  await this.page.getByText('sms', { exact: true }).click();
  }

  async selectMobileField() {
     //await this.page.waitForSelector('[id^="select2-rece_number"]', { state: 'visible' });
    // await this.page.locator('[id^="select2-rece_number"]').first().click();
    // await this.page.locator('.select2-results__option', { hasText: 'Mobile Phone' }).click();
     await this.page.waitForSelector('[id^="select2-rece_number"]', { state: 'visible' });
     await this.page.locator('[id^="select2-rece_number"]').first().click();
     await this.page.locator('.select2-results__option', { hasText: 'Alternat Phone   (Leads)' }).click();
   
  }

  async selectTemplate(template: string) {
    await this.page.locator('#select2-QASmsTemplated-container').click();
    await this.page.locator('.select2-results__option', { hasText: template }).click();
  }

  // async selectMergeField(field: string) {
  //   await this.page.locator('#select2-qa_selectedfield-container').click();
  //   await this.page.getByRole('treeitem', { name: 'value', exact: true }).click();
    //}
    async selectMergeField(field: string) {
  // Open dropdown
  await this.page.locator('#select2-qa_selectedfield-container').click();

  // Select only visible dropdown option
  const option = this.page
    .locator('.select2-results__option')
    .filter({ hasText: field })
    .first();

   await option.waitFor({ state: 'visible' });
   await option.click();
}


  async sendSMS() {
    await this.page.getByRole('button', { name: 'send' }).click();
  }

  async closeModal() {
    await this.page.locator('#quick-action-modal').getByText('close', { exact: true }).click();
  }
}