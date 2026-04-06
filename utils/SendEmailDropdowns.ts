import { Page, Locator } from '@playwright/test';

type DropdownOptions = {
  container?: Locator;          // optional (modal/form)
  dropdownName?: string;        // label or placeholder
  dropdownLocator?: Locator;    // direct locator (if known)
  values: string[];             // values to select
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
    multi = false,
  } = options;

  const scope = container ?? page;

  // 🔹 Step 1: Open dropdown
  if (dropdownLocator) {
    await dropdownLocator.click();
  } else if (dropdownName) {
    await scope.getByRole('textbox', { name: dropdownName }).click();
  } else {
    throw new Error('Provide dropdownName or dropdownLocator');
  }

  // 🔹 Step 2: Select values
  for (const value of values) {
    const option = page.getByRole('treeitem', { name: value });

    await option.waitFor({ state: 'visible' });
    await option.click();

    if (!multi) break; // stop if single select
  }
}
                                                                    //   use : await selectDropdown(page, {
                                                                    //     dropdownName: 'Select an Option',
                                                                    //   values: ['rsoftvinodh9@gmail.com'],
                                                                    //  });