import{ Page } from '@playwright/test';

export class GlobalSearch {
    private page: Page; 
    constructor(page: Page) {
        this.page = page;
    }   


    async Searchicon() {
        await this.page.getByRole('button', { name: 'search' }).click();
    }   

   async selectModule(moduleName: string) {
  await this.page.locator('#select2-Q_serach_module-container').click();

  const moduleSearchBox = this.page.locator('span.select2-container--open .select2-search__field');
  await moduleSearchBox.waitFor({ state: 'visible' });
  await moduleSearchBox.fill(moduleName);

  await this.page.locator('.select2-results__option', { hasText: moduleName }).click();
  await this.page.waitForLoadState('networkidle');
}

async Globalsearchicon() {
    await this.page.locator('i.ficon.ft-search').click();

}

 async globalsearchbar(searchTerm: string) {
    const searchBox = this.page.getByPlaceholder(/search/i).first();

    await searchBox.click();
    await searchBox.fill(searchTerm);
    await this.page.keyboard.press('Enter');
}
async selectmodulefromsearch(moduleName: string) {
  await this.page.locator(`//span[text()="${moduleName}"]`).click();

}



    
}
