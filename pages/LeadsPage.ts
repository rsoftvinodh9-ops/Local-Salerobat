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
      await this.page.locator(`#row-${leadId}`).getByText('quickreply').waitFor({ state: 'visible', timeout: 10000 });
      await this.page.locator(`#row-${leadId}`).getByText('quickreply').click();
      await this.page.locator('#quick-action-modal').waitFor({ state: 'visible', timeout: 10000 });
    });
    Logger.success('Quick reply clicked and modal opened');
  }
}