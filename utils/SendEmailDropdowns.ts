import { Page, Locator } from '@playwright/test';

type DropdownOptions = {
  container?: Locator;          // optional (modal/form)
  dropdownName?: string;        // label or placeholder
  dropdownLocator?: Locator;    // direct locator (if known)
  values: string[];             // values to select
  exact?: boolean;              // exact option match or not
  multi?: boolean;              // multi-select or not
};

export async function selectDropdown(
  page: Page,
  options: DropdownOptions
) {
  const {
    container,
    dropdownName,
    dropdownLocator,
    values,
    exact = false,
    multi = false,
  } = options;

  const scope = container ?? page;

  if (dropdownLocator) {
    await dropdownLocator.click();
  } else if (dropdownName) {
    await scope.getByRole('textbox', { name: dropdownName }).click();
  } else {
    throw new Error('Provide dropdownName or dropdownLocator');
  }

  for (const value of values) {
    const option = page.getByRole('treeitem', { name: value, exact });

    await option.waitFor({ state: 'visible' });
    await option.click();

    if (!multi) break;
  }
}