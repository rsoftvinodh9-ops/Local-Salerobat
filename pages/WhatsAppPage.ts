import { Page } from '@playwright/test';

export class WhatsAppPage {
  constructor(private page: Page) {}

  async selectWhatsapp() {
    const modal = this.page.locator('#quick-action-modal');
    await modal.waitFor({ state: 'visible', timeout: 20000 });
    
     const whatsAppButton = modal.locator('span.label.whatappsmsemail:visible', { hasText: 'WhatsApp' }).first();
     await whatsAppButton.waitFor({ state: 'visible', timeout: 20000 });
     await whatsAppButton.click();
  }
async selectMobileField() {
    
    await this.page.locator('#select2-qa_myselects_phone-container').click();
    await this.page.locator('.select2-results').waitFor({ state: 'visible', timeout: 10000 });
    await this.page.locator('li:has-text("Alternat Phone (Leads)")').click();
}
 async slectTemplate(){
  await this.page.locator('#select2-qa_selectedtemp-container').click();
  await this.page.locator('.select2-results').waitFor({ state: 'visible', timeout: 10000 });
  await this.page.getByRole('treeitem', { name: 'payment_receipt -' }).click();
 }
async AddField(){
    await this.page.locator('#select2-qa_selectedfields-container').click();
    await this.page.locator('.select2-results').waitFor({ state: 'visible', timeout: 10000 });
    await this.page.getByRole('treeitem', { name: 'Modified By ID' }).click();
}
async URLField(){
    await this.page.locator('#select2-qa_WhatsappShortUrl-container').click();
    await this.page.locator('li:has-text("image jpg")').click();
}
    async EXpiryDate(){
        await this.page.locator('#whatsappExpiryDate').click();
        await this.page.locator('td.today.active.start-date.active.end-date.available').click();
    }

    async Sendbutton (){
     await this.page.getByRole('button', { name: 'send' }).click();

    }
    async closeModal() {
    await this.page.locator('#quick-action-modal').getByText('close', { exact: true }).click();
  }
} 


