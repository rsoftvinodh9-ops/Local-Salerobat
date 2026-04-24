import { Page } from '@playwright/test';
import { Logger } from '../utils/Logger';

export class LeadsPage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async clickQuickReplyOnLead(leadId: string) {
    Logger.step(`Clicking quick reply on lead ${leadId}`);
    await Logger.retryAction(async () => {
      const row = this.page.locator(`#row-${leadId}`);
      await row.waitFor({ state: 'visible', timeout: 15000 });
      await row.locator('text=quick').click();
      await this.page.locator('#quick-action-modal').waitFor({ state: 'visible', timeout: 10000 });
    });
    Logger.success('Quick reply clicked and modal opened');
  }

}

export class LeadsPage1 {
  constructor(private page: Page) {}

  async openQuickReply(rowId: string) {
    await this.page.locator(`#row-${rowId}`).getByText('quickreply').click();
    await this.page.locator('#quick-action-modal').waitFor({ state: 'visible', timeout: 20000 });
  }
  async openQuickReplyDetail() {
  await this.page.locator('button.onetest', { hasText: 'quickreply' }).click();
  await this.page.locator('#quick-action-modal').waitFor({ state: 'visible', timeout: 20000 });
}

async openQuickReplySub() {
await this.page.getByText('quickreply', { exact: true }).nth(1).click();
}

async openQuickReplyglobal(crmId: string) {
//await this.page.getByText('quickreply', { exact: true }).click();
//await this.page.getByText('quickreply', { exact: true }).first().click();
//await this.page.getByText('quickreply').filter({ has: this.page.locator(':visible') }).click();
await this.page.locator(`[data-record-id="${crmId}"]`).nth(1).click();
}

async openrecordfromglobalsearch(crmId: string) {
  await this.page.locator(`a[href*="record=${crmId}"]`).click();
}

  async openLead(rowId: string) {
  const row = this.page.locator(`#row-${rowId}`);
  await row.waitFor({ state: 'visible' });
  await row.click();
}

  async clickEdit(rowId: string) {
    await this.page.locator(`#edit-${rowId}`).nth(1).click();

  }

  
}