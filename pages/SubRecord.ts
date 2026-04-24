
import { Page } from '@playwright/test';


export class SubRecord {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async AddSubRecord() {
    await this.page.locator('button.btn.btn-sm.modalresetbtn').click();
  }

  // fill the field values in sub record form

  async fillFieldByLabel(label: string, value: string) {

  const fieldGroup = this.page.locator('div.form-group, div.col')
    .filter({ has: this.page.getByText(label, { exact: true }) });

  const input = fieldGroup.locator('input:not([type="hidden"]), textarea');

  await input.first().waitFor({ state: 'visible' });
  await input.first().fill(value);
}

async saveSubRecord() {
  await this.page.locator('button.btn.btn-sm.savebtn').click(); 
}

}
