import { Page } from '@playwright/test';

type FieldData = {
  fieldType: string;   // Email, Text, Number
  label?: string;       // Field label
  required?: boolean;  // optional checkbox control
};

export async function addField(page: Page, data: FieldData) {

  // 🔹 Click Add Field
  await page.getByRole('button', { name: /Add Field/i }).click();

  // 🔹 Select Field Type (Dropdown)
  await page.getByRole('textbox', { name: /Text/i }).click();

  console.log(`Selecting field type: ${data.fieldType}`);

  await page.getByRole('treeitem', { name: data.fieldType }).click();

  // 🔹 Enter Label
//   const labelInput = page.locator('input[name="label"]');
//   await labelInput.fill(data.fieldType);
//   console.log(`Filled label with: ${data.fieldType}`);
  const labelValue = data.label?.trim() || data.fieldType;

  const labelInput = page.locator('input[name="label"]');
  await labelInput.fill(labelValue);

  console.log(`Filled label with: ${labelValue}`);


  // 🔹 Handle Checkbox (example: Required field)
  if (data.required !== undefined) {
    const checkbox = page.getByRole('checkbox').nth(1);

    const isChecked = await checkbox.isChecked();

    if (data.required && !isChecked) {
      await checkbox.check();
    } else if (!data.required && isChecked) {
      await checkbox.uncheck();
    }
  }

  // 🔹 Save
  await page.getByRole('button', { name: 'Save' }).click();
  await page.waitForLoadState('networkidle');
  
}