import { Page } from '@playwright/test';

export class WhatsAppPage {
  constructor(private page: Page) {}

  async selectWhatsapp() {
    //await this.page.locator('.fa fa-whatsapp icon whatappsmsemail').click();
    // const modal = this.page.locator('#quick-action-modal');
    // await modal.waitFor({ state: 'visible', timeout: 20000 });
    await this.page.locator(".icon-container").nth(1).click();
    //  const whatsAppButton = modal.locator('span.label.whatappsmsemail:visible', { hasText: 'WhatsApp' }).first();
    //  await whatsAppButton.waitFor({ state: 'visible', timeout: 20000 });
    //  await whatsAppButton.click();
  //  await this.page.getByText('.fa.fa-whatsapp.icon WhatsApp', { exact: true }).click();
    //await this.page.locator('span.icon-container.whatsapptab').getByText('WhatsApp', { exact: true }).click();    
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
 async closeModaldetail() {
    
  await this.page.locator('button:has-text("close")').click();
}





}