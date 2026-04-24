import { expect, Page } from '@playwright/test';

function escapeRegex(value: string) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function whitespaceTolerantRegex(value: string) {
  return new RegExp(value.trim().split(/\s+/).map(escapeRegex).join('\\s+'), 'i');
}

function searchableLabel(value: string) {
  return value.replace(/\([^)]*\)/g, ' ').replace(/\s+/g, ' ').trim();
}

export async function clickWorkflow1(page: Page) {
  const workflowLink = page.getByRole('link', { name: /^Workflow$/i });
  await workflowLink.click();
}

export async function CreateWorkflowbtn(page: Page) {
  const createWorkflowButton = page.locator('.workflowaddbutton').first();
  await createWorkflowButton.waitFor({ state: 'visible' });
  await createWorkflowButton.click();

}
export async function SelectModule(page: Page, moduleName: string) {
  await expect(page.getByRole('heading', { name: /Creating workflow/i })).toBeVisible();
  await expect(page.getByText('Step 1: Enter Basic Details Of the workflow')).toBeVisible();

  const modulePicker = page.locator('#select2-workflowselectmod-container');
  await expect(modulePicker).toBeVisible();
  await modulePicker.click();

  const modulePattern = new RegExp(`^${escapeRegex(moduleName)}s?$`, 'i');
  const moduleOption = page.getByRole('treeitem').filter({ hasText: modulePattern }).first();
  await expect(moduleOption).toBeVisible({ timeout: 15000 });
  await moduleOption.click();

  await expect(modulePicker).toHaveText(modulePattern);
}

export async function WorkflowName(page: Page) {
  const timestamp = Date.now().toString().slice(-6);   // e.g. 1713242342342
  const text = `RSOFT ${timestamp}`;

  await page.locator('input[name="summary"]').nth(0).fill(text);
}

export async function WorkflowNextbtn(page: Page) {
await page.getByText('Next', { exact: true }).click();
}

export async function AllConditionsbtn (page: Page) {

  await page.locator('[class="btn btn-primary filter_addconditionbutton"]').nth(0).click();  
}


export async function selectDropdownValue(page: Page, value: string) {
  const conditionFieldDropdown = page.locator('#select2-fieldcol0and-container');
  await expect(conditionFieldDropdown).toBeVisible({ timeout: 15000 });
  await conditionFieldDropdown.click();

  const searchBox = page.locator('.select2-search__field').last();
  await expect(searchBox).toBeVisible({ timeout: 15000 });
  await searchBox.fill(value);

  const option = page.locator('.select2-results__option').filter({ hasText: new RegExp(`^${escapeRegex(value)}$`, 'i') }).first();
  await expect(option).toBeVisible({ timeout: 15000 });
  await option.click();

  await expect(conditionFieldDropdown).toHaveText(new RegExp(escapeRegex(value), 'i'));
}

export async function selectOperator(page: Page, value: string) {
  const operatorDropdown = page.getByRole('combobox', { name: /Select an option/i }).first();
  const operatorPattern = new RegExp(`^${escapeRegex(value)}$`, 'i');

  await expect(operatorDropdown).toBeVisible({ timeout: 15000 });

  for (let attempt = 0; attempt < 3; attempt++) {
    await operatorDropdown.click();

    const openDropdown = page.locator('.select2-container--open').last();
    const operatorOption = openDropdown
      .locator('.select2-results__option')
      .filter({ hasText: operatorPattern })
      .first();

    if (await operatorOption.isVisible({ timeout: 5000 }).catch(() => false)) {
      await operatorOption.click();
      return;
    }

    await page.keyboard.press('Escape').catch(() => {});
    await page.waitForTimeout(1000);
  }

  throw new Error(`Operator option "${value}" did not appear in the dropdown.`);
}

export async function AddtoDo(page: Page) {
  const addToDoButton = page.getByRole('button', { name: /\+?\s*Add To Do/i });

  if (!(await addToDoButton.isVisible().catch(() => false))) {
    const nextButton = page.getByRole('button', { name: /^Next$/i });
    if (await nextButton.isVisible().catch(() => false)) {
      await nextButton.click();
    }
  }

  await expect(addToDoButton).toBeVisible({ timeout: 15000 });
  await addToDoButton.click();
}

export async function selectTask(page: Page, value: string) {
  const dropdown = page.locator('.dropdown-menu.show');

  await dropdown.locator('.dropdown-item.task-item', { hasText: value }).click();
  await expect(page.getByRole('heading', { name: /^Notification$/i })).toBeVisible({ timeout: 15000 });
}

export async function TaskTitile(page: Page, title: string) {
  const taskTitleInput = page.locator('input[name="notification_tasktitle"]');
  await expect(taskTitleInput).toBeVisible({ timeout: 15000 });
  await taskTitleInput.fill(title);
}

export async function Recipients(page: Page, value: string) {

  await page.locator("[title='Select an Option']").last().click();

  const option = page.locator(`.select2-results__option >> text="${value}"`);

  await option.click();

}

export async function AddFiled(page: Page, filedName:String){
  const addFieldDropdown = page.locator('xpath=//*[normalize-space()="Add Fields"]/following::*[@role="combobox"][1]');
  const fieldQuery = searchableLabel(String(filedName));
  const fieldPattern = whitespaceTolerantRegex(fieldQuery);
  await expect(addFieldDropdown).toBeVisible({ timeout: 15000 });
  await addFieldDropdown.click();

  const searchBox = page.locator('.select2-search__field').last();
  await expect(searchBox).toBeVisible({ timeout: 15000 });
  await searchBox.fill(fieldQuery);

  const option = page.locator('.select2-results__option').filter({ hasText: fieldPattern }).first();
  if (await option.isVisible({ timeout: 5000 }).catch(() => false)) {
    await option.click();
  } else {
    await searchBox.press('ArrowDown');
    await searchBox.press('Enter');
  }

  await expect(addFieldDropdown).not.toHaveText(/Select an option/i, { timeout: 15000 });
}

// export async function TaskSavebtn(page: Page) {
//   const notificationMessage = page.locator('xpath=//*[normalize-space()="Notification Message*"]/following::textarea[1] | //*[normalize-space()="Notification Message*"]/following::input[1]');
//   if (await notificationMessage.isVisible({ timeout: 5000 }).catch(() => false)) {
//     await notificationMessage.fill('Automated workflow notification');
//   }

//   const saveButton = page.getByRole('button', { name: /^Save$/i });
//   await expect(saveButton).toBeVisible({ timeout: 15000 });
//   await saveButton.click();

//   const notificationHeading = page.getByRole('heading', { name: /^Notification$/i });
//   if (await notificationHeading.isVisible({ timeout: 5000 }).catch(() => false)) {
//     const closeButton = page.getByRole('button', { name: /×|Ã—/i }).first();
//     if (await closeButton.isVisible().catch(() => false)) {
//       await closeButton.click();
//       await expect(notificationHeading).not.toBeVisible({ timeout: 15000 });
//     }
//   }

//   const submitButton = page.getByRole('button', { name: /^Submit$/i });
//   await expect(submitButton).toBeVisible({ timeout: 15000 });
//   await submitButton.click();
// }

// export async function TaskSavebtn(page:Page){

 
//   await page.locator('button').filter({ hasText: 'Save' }).first().click();
  
// }

export async function TaskSavebtn(page:Page){
  await page.locator('button').filter({ hasText: 'Save' }).first().click();
}

// export async function Workflowtaskstatus(page:Page){
//   const toggleInput = page.locator('xpath=(//span[contains(@class,"switchery")])[1]/preceding-sibling::input[@type="checkbox"][1]');
//   const toggleVisual = page.locator('.switchery.switchery-default').first();

//   if (await toggleInput.count()) {
//     const isChecked = await toggleInput.evaluate((element) => (element as HTMLInputElement).checked).catch(() => false);
//     if (!isChecked) {
//       await toggleInput.evaluate((element) => {
//         const input = element as HTMLInputElement;
//         input.click();
//         input.dispatchEvent(new Event('input', { bubbles: true }));
//         input.dispatchEvent(new Event('change', { bubbles: true }));
//       });
//     }
//     return;
//   }

//   await toggleVisual.evaluate((element) => {
//     (element as HTMLElement).click();
//   });
// }

export async function Submitbtn(page:Page){

  await page.locator('[class="btn btn-primary mr-1"]').click();
  
 }



  export class CreateWorkflowPage {
  constructor(private page: Page) {}

   

// async taskStatus() {
  
//   const toggle =  this.page.locator("span.switchery");
//   toggle.click();

//   //await this.page.locator('span.switchery.switchery-default').nth(0).click();


//}

async toggleRowSwitch(rowName: string) 
{
    const row = this.page.getByRole('row', { name: new RegExp(this.escapeRegex(rowName), 'i') });
    //await expect(row).toBeVisible();

    const checkbox = row.locator('input[type="checkbox"]').first();
    const toggle = row.locator('span.switchery').first();

    if ((await checkbox.count()) > 0) {
      const checked = await checkbox.isChecked().catch(() => false);
      if (!checked) {
        await toggle.click();
      }
      await expect(checkbox).toBeChecked();
      return;
    }

    await toggle.waitFor({ state: 'visible' });
    await toggle.click();
  }

  // async waitForOverlayToDisappear() {
  //   await this.loadingOverlay.waitFor({ state: 'hidden' }).catch(() => undefined);
  // }

  private escapeRegex(value: string) {
    return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  }


async lastWorkFlowtoggle() {
          const lastRow = this.page.locator('[class*="Removerow_"]').last();
          const toggle = lastRow.locator('span.switchery.switchery-default');
 
          await toggle.scrollIntoViewIfNeeded();
          await toggle.click();
          console.log('Last workflow toggle clicked');
}
         


async addLead() {
    await this.page.getByRole("button", { name: "Add Leads" }).click();
  }
 
  async dataForInputFields() {
    await this.page.locator('input[name="leads_companyname"]').fill("Rsoft tech");
    await this.page.locator("[name='leads_currency']").fill("1000");
    await this.page.locator('input[name="leads_alternatphone"]').fill("9182726352");
  }


  async Editrecord(){
    const edit = this.page.locator("[class='material-symbols-outlined onetest']").nth(1);
   await edit.click();

  }
 async AssignDropDown( ){
          await this.page.getByRole('combobox', { name: 'Rsoft IT' }).click();
          await this.page.getByRole('treeitem', { name: 'Admin Admin' }).click();
    }
 


  async saveBtn() {
    await this.page.getByRole("button", { name: "Save", exact: true }).click();
  }

//                   Edit Workflow 

   async clickEditIcon() {
      const lastRow = this.page.locator('[class*="Removerow_"]').last();
    const editIcon = lastRow.locator('span').filter({ hasText: 'edit_square' }).last();
 
      await expect(editIcon).toBeVisible();
      await editIcon.click();
}
//    Specify When to execute this workflow

async Onlyonthefirstsave (){
  const checkbox = this.page.locator("[name='wrkflowexe']").nth(0);
  await checkbox.click();
}

  async Untilthefirstcondition (){
  const checkbox = this.page.locator("[name='wrkflowexe']").nth(1);
  await checkbox.click();

  }

async Everytimetherecordsave (){
  const checkbox = this.page.locator("[name='wrkflowexe']").nth(2);
  await checkbox.click();
}
 async Everytimerecordmodified (){
  const checkbox = this.page.locator("[name='wrkflowexe']").nth(3);
  await checkbox.click();
}
  async schedule (){
  const checkbox = this.page.locator("[name='wrkflowexe']").nth(4);
  await checkbox.click();
}

  async OpenRecord(){
  const record =this.page.locator("[class='next-td-col add-border-right']").nth(1);
  await record.click();

  }

//    Updates 

  async UpdateDateandTime(){

 
const update = await this.page.locator('.updatesappend div.act-time').first().innerText();
  console.log("Update Captured date & Time: " + update);

}

  async UpdateCaptured(value:string){

 const update = await this.page.locator('li.appendli .base-timeline-info').first().innerText();
  console.log (value + update);
}


  async ProfileIcon(page: Page) {
    await  this.page.getByRole('listitem').filter({ hasText: 'rsoft My Profile line_style' }).getByRole('link').click();
  }

  async  ProfileIcon1(page: Page) {
          await page.locator("#livewireOverly").waitFor({ state: "hidden", timeout: 15000 }).catch(() => {});
           await page.locator('.dropdown-toggle.nav-link.dropdown-user-link').click();
  }

  async goToCRMSettings(page: Page) {
    await page.getByRole('link', { name: /CRM Setting/i }).click();
  }

  async OtherSettings(page: Page) {

await page.getByText('Other Settings', { exact: true }).click();

}

 async  clickWorkflow(page: Page) {
  const workflowLink = page.getByRole('link', { name: /^Workflow$/i });
  await workflowLink.click();
}

//  async SelectModule(page: Page, moduleName: string) {
//   await expect(page.getByRole('heading', { name: /Creating workflow/i })).toBeVisible();
//   await expect(page.getByText('Step 1: Enter Basic Details Of the workflow')).toBeVisible();

//   }

async SelectModule(page: Page, moduleName: string) {
  await expect(page.getByRole('heading', { name: /Creating workflow/i })).toBeVisible();
  await expect(page.getByText('Step 1: Enter Basic Details Of the workflow')).toBeVisible();

  const modulePicker = page.locator('#select2-workflowselectmod-container');
  await expect(modulePicker).toBeVisible();
  await modulePicker.click();

  const modulePattern = new RegExp(`^${escapeRegex(moduleName)}s?$`, 'i');
  const moduleOption = page.getByRole('treeitem').filter({ hasText: modulePattern }).first();
  await expect(moduleOption).toBeVisible({ timeout: 15000 });
  await moduleOption.click();

  await expect(modulePicker).toHaveText(modulePattern);
}




  async CreateWorkflowbtn(page: Page) {
  const createWorkflowButton = page.locator('.workflowaddbutton').first();
  await createWorkflowButton.waitFor({ state: 'visible' });
  await createWorkflowButton.click();

  }
 async  WorkflowName(page: Page) {
  const timestamp = Date.now().toString().slice(-6);   // e.g. 1713242342342
  const text = `RSOFT ${timestamp}`;

  await page.locator('input[name="summary"]').nth(0).fill(text);
}

 async WorkflowNextbtn(page: Page) {
await page.getByText('Next', { exact: true }).click();
}


//         Condtion Section 

async AllConditionsbtn (page: Page) {

  await page.locator('[class="btn btn-primary filter_addconditionbutton"]').nth(0).click();  
}

  //  Select Value

async selectDropdownValue(page: Page, value: string) {
  const conditionFieldDropdown = page.locator('#select2-fieldcol0and-container');
  await expect(conditionFieldDropdown).toBeVisible({ timeout: 15000 });
  await conditionFieldDropdown.click();

  const searchBox = page.locator('.select2-search__field').last();
  await expect(searchBox).toBeVisible({ timeout: 15000 });
  await searchBox.fill(value);

  const option = page.locator('.select2-results__option').filter({ hasText: new RegExp(`^${escapeRegex(value)}$`, 'i') }).first();
  await expect(option).toBeVisible({ timeout: 15000 });
  await option.click();

  await expect(conditionFieldDropdown).toHaveText(new RegExp(escapeRegex(value), 'i'));
}

 //     Select Operator

async  selectOperator(page: Page, value: string) {
  const operatorDropdown = page.getByRole('combobox', { name: /Select an option/i }).first();
  const operatorPattern = new RegExp(`^${escapeRegex(value)}$`, 'i');

  await expect(operatorDropdown).toBeVisible({ timeout: 15000 });

  for (let attempt = 0; attempt < 3; attempt++) {
    await operatorDropdown.click();

    const openDropdown = page.locator('.select2-container--open').last();
    const operatorOption = openDropdown
      .locator('.select2-results__option')
      .filter({ hasText: operatorPattern })
      .first();

    if (await operatorOption.isVisible({ timeout: 5000 }).catch(() => false)) {
      await operatorOption.click();
      return;
    }

    await page.keyboard.press('Escape').catch(() => {});
    await page.waitForTimeout(1000);
  }

  throw new Error(`Operator option "${value}" did not appear in the dropdown.`);
}


   //                 Update Entity Task
   
   
async AddtoDo(page: Page) {
  const addToDoButton = page.getByRole('button', { name: /\+?\s*Add To Do/i });

  if (!(await addToDoButton.isVisible().catch(() => false))) {
    const nextButton = page.getByRole('button', { name: /^Next$/i });
    if (await nextButton.isVisible().catch(() => false)) {
      await nextButton.click();
    }
  }

  await expect(addToDoButton).toBeVisible({ timeout: 15000 });
  await addToDoButton.click();
}

async selectTask(page: Page, value: string) {
  const dropdown = page.locator('.dropdown-menu.show');

  await dropdown.locator('.dropdown-item.task-item', { hasText: value }).click();
  //await expect(page.getByRole('heading', { name: /^Notification$/i })).toBeVisible({ timeout: 15000 });
}

async TaskTitle(page:Page,title:string){
 await page.locator('input[name="notification_tasktitle"]').click();
 await page.locator('input[name="notification_tasktitle"]').fill(title);
}

// async Selectmod(){

//   const select= await this.page.locator('#select2-Sourcevalue-vg-container').getByRole('combobox',{name:"Select an Option"}).first().click();
//   const target=await this.page.getByRole('treeitem',{name:"Target"}).click();
//   // const target= this.page.locator('li').filter({ hasText: 'Target' }).last()
//   // await target.click();
// }
async Selectmod(page: Page) {
  const sourceDropdown = page.locator('span.select2-selection__rendered', { hasText: 'Select an Option' }).nth(0)
  await expect(sourceDropdown).toBeVisible({ timeout: 15000 });
  await sourceDropdown.click();

  const target = page.getByRole('treeitem', { name: 'Target' });
  await expect(target).toBeVisible({ timeout: 15000 });
  await target.click();
}


//      Target Module

async SelectTargetmod(page:Page,value:string){
const target= this.page.locator("#select2-updateEntityTargetModule-container");
await target.click();
const targetmodule= this.page.getByRole('treeitem', { name: value })
await targetmodule.click();

}

   //    Action Modified By

async ActionModifiedBy(page:Page, value:string){
  const modified= this.page.locator('#select2-actionperformedby-container')
  await modified.click();
  const selectmodified= this.page.getByRole('treeitem', { name: value })
  await expect(selectmodified).toBeVisible({timeout:15000});
  await selectmodified.click();
    
}
//         Field Mapping


async Targetdropdown(page:Page,value:string){
  const targetdrop= this.page.locator("[id='select2-SelectedValue1-container']")
  await targetdrop.click();
  const selectvalue=this.page.getByLabel('MODULE A').getByRole('treeitem', {name:value});
  await expect(selectvalue).toBeVisible({timeout:15000});
  await selectvalue.click();

}

async Targetdropdownlast(page:Page,value:string){
  const targetdrop= this.page.locator("[id='select2-SelectedValue1-container']").last();
  await targetdrop.click();
  const selectvalue=this.page.getByLabel('MODULE A').getByRole('treeitem', {name:value});
  await expect(selectvalue).toBeVisible({timeout:15000});
  await selectvalue.click();

}






async Sourcedropdown(page:Page,value:string){
const sourcedrop=this.page.locator("[id='select2-Currentvalue1-container']");
await sourcedrop.click();
const selectvalue=this.page.getByLabel('Module B').getByRole('treeitem',{name:value});
await selectvalue.click();

}

async Sourcedropdownlast(page:Page,value:string){
const sourcedrop=this.page.locator("[id='select2-Currentvalue1-container']").last();
await sourcedrop.click();
const selectvalue=this.page.getByRole('treeitem',{name:value});
await selectvalue.click();

}


async Defaultdropdown(page:Page,value:string){
const defaultvalue=this.page.locator("[id='fieldempty1']");
await defaultvalue.click();
const selectvalue=this.page.getByRole('treeitem',{name:value});
await selectvalue.click();


}

async Addfield(){
const addfield= this.page.locator('button').filter({ hasText: 'Add Field' }).first();
expect(addfield).toBeVisible({timeout:15000});
await addfield.click();

}


async TaskSavebtn(page:Page){
  await page.locator('button').filter({ hasText: 'Save' }).first().click();
}

async Submitbtn(page:Page){

  await page.locator('[class="btn btn-primary mr-1"]').click();
  
 }

async addrecord() {
    await this.page.getByRole("button", { name: "Add Module B" }).click();
  }
 
  async recorddata() {
    //await this.page.locator('input[name="leads_companyname"]').fill("Rsoft tech");
    // await this.page.locator("[name='leads_currency']").fill("1000");
    // await this.page.locator('input[name="leads_alternatphone"]').fill("9182726352");
    await this.page.locator('input[name="module_b_name"]').fill('Test Record');
    await this.page.locator('span.input-group-text[class*="searchmultirelated"]').click();
    const record= this.page.locator('table tbody tr').first();
    await record.click();
  }

  async openrecord(){

  const record =this.page.locator('table tbody tr').first();
  await record.click();
}

async Assignto( ){
  await this.page.getByRole('combobox', { name: 'Admin Admin' }).click();
  await this.page.getByRole('treeitem', { name: 'Rsoft IT' }).click();

  }

  async Targetfield (page:Page,value:string){
const sourcedrop=this.page.locator("[id='select2-SelectedValue2-container']");
await sourcedrop.click();
const selectvalue=this.page.getByLabel('MODULE A').getByRole('treeitem',{name:value, exact:true});
await selectvalue.click();
}


async Sourcefiled (page:Page,value:string){
const sourcedrop=this.page.locator("[id='select2-Currentvalue2-container']");
await sourcedrop.click();
const selectvalue=this.page.getByLabel('Module B').getByRole('treeitem',{name:value,exact:true});
await selectvalue.click();

}

//                Update Entity Schedule Task


async Scheduletab(){
 const tab= this.page.locator('b:has-text("Schedule Task")');
 await tab.click();
 const check=this.page.locator('input[name="execute_notification_taskbox"]');
  await check.click();

}

async SchedulTimefiled(page:Page,value:string){

  const schediletimefield=this.page.locator("[id='select2-entity_time-7p-container']");
  await schediletimefield.click();
  const timefield= this.page.getByRole('treeitem',{name:value});
  await timefield.click();
}
async condition(page:Page,value:string){

  const condition=this.page.locator("[id='select2-entity_days-fp-container]");
  await condition.click();
  const selectvalue=this.page.getByRole('treeitem',{name:value});
  await selectvalue.click();
}

async Selectdays(page:Page,value:string){

  const days=this.page.locator('select2-schday-container');
  await days.click();
  const selectdays=this.page.getByRole('treeitem',{name:value,exact:true})
}
async schedulecheckbox(){
  const check=this.page.locator('input[name="execute_notification_taskbox"]');
  await check.click();

}
async Selecthours(page:Page,value:string){

  const hours=this.page.locator('#select2-schhours-container');
  await hours.click();
  const selecthours=this.page.getByRole('treeitem',{name:value,exact:true});
  await selecthours.click();
}

async Selectminutes(page:Page,value:string){

  const minutes=this.page.locator('#select2-schminutes-container');
  await minutes.click();
  const Selectminutes=this.page.getByRole('treeitem',{name:value, exact:true});
  await Selectminutes.click();
  }

  async failminutes(value:string){
    const failminutes=this.page.locator('#select2-fail_minutes-container');
    await failminutes.click();
    const selectfailminu=this.page.getByRole('treeitem',{name:value, exact:true})
  }
 
async ExecuteConditiontab(){

  const conditiontab=this.page.getByText('Execute Condition', { exact: true });
  await conditiontab.click();
  const checkbox=this. page.locator('[name="execute_condition_taskbox"]');
  await checkbox.click();
}

async Failcase(){
  const fail=this.page.getByText('Fail Case',{exact:true});
  await fail.click();
  const checkbox= this.page.locator("[name='reschedulefailedtask']");
  await checkbox.click();
}


}