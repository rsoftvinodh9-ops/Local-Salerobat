import { Page, Locator } from '@playwright/test';

export async function selectFromDropdown(
  page: Page,
  container: Locator,
  dropdownText: string,
  value: string
) {
  const dropdown = container.getByRole('combobox', { name: dropdownText });

  await dropdown.scrollIntoViewIfNeeded();
  await dropdown.evaluate((element) => {
    (element as HTMLElement).click();
  });

  const searchBox = page.locator('input[type="search"], .select2-search__field');

  if (await searchBox.isVisible().catch(() => false)) {
    await searchBox.fill(value);
  }

  const option = page.locator('text=' + value).first();
  if (await option.isVisible().catch(() => false)) {
    await option.click();
  }
}

export async function RphoneProvider(
  page: Page,
  container: Locator,
  dropdownText: string,
  value: string
) {
  await selectFromDropdown(page, container, dropdownText, value);
}

export async function clickHeaderAction(
  page: Page,
  actionName: string
) {
  const headerActions = page
    .locator('ul')
    .filter({ has: page.getByRole('button', { name: /day/i }) })
    .first();

  await headerActions
    .getByText(actionName, { exact: false })
    .first()
    .click();
}
