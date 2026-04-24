import '../utils/Screenshot';
import { test } from '@playwright/test';
import { login } from '../utils/login';
import {
  AddFiled, AddtoDo, AllConditionsbtn, CreateWorkflowbtn,
  CreateWorkflowPage, Recipients, selectDropdownValue,
  SelectModule, selectOperator, selectTask, Submitbtn,
  TaskSavebtn, TaskTitile, WorkflowName, WorkflowNextbtn
} from '../pages/CreateWorkflow';
import { clickMenu } from '../utils/Dashboard';
import { Menulist } from '../utils/Menulist';

test('Workflow Notification', async ({ page }) => {

  test.setTimeout(300000);

  const flow = new CreateWorkflowPage(page);

  //  Login
  await login(page, 'NAVEEN', 'rsoft', 'RSoft!@345');

  //  Navigate to Workflow
  await page.goto('https://rdot.in/public/admin/Settings/?Module=Workflow&parent=Setting&view=index&fieldid=8');

  //  Create Workflow
  await CreateWorkflowbtn(page);
  await SelectModule(page, 'Lead');
  await WorkflowName(page);
  await WorkflowNextbtn(page);

  //  Condition Section
  await AllConditionsbtn(page);
  await selectDropdownValue(page, 'Assigned To');
  await selectOperator(page, 'is');
  await WorkflowNextbtn(page);

  //  Add Task
  await AddtoDo(page);
  await selectTask(page, 'Notification');

  //  Notification Task
  await TaskTitile(page, 'Test Notification');
  await Recipients(page, '(Leads) Assigned To');
  await AddFiled(page, '(Leads) Assigned To ID');
  await TaskSavebtn(page);

  await flow.toggleRowSwitch('');
  await Submitbtn(page);
  await flow.lastWorkFlow();

  //  Create Record
  await clickMenu(page);
  await Menulist(page, 'Leads');
  await flow.addLead();
  await flow.dataForInputFields();
  await flow.saveBtn();

  await page.reload();

  await flow.UpdateDateandTime();
  await flow.UpdateCaptured('Update Captured :');

  //  Edit Workflow → Until First Condition
  await page.goto('https://rdot.in/public/admin/Settings/?Module=Workflow&parent=Setting&view=index&fieldid=8');
  await flow.clickEditIcon();
  await flow.Untilthefirstcondition();
  await WorkflowNextbtn(page);
  await WorkflowNextbtn(page);
  await Submitbtn(page);

  //  Create New Record
  await clickMenu(page);
  await Menulist(page, 'Leads');
  await flow.addLead();
  await flow.dataForInputFields();
  await flow.saveBtn();

  await page.reload();

  const update3 = await page.locator('.updatesappend div.act-time').first().innerText();
  console.log('Update Captured date & Time:', update3);

  const update4 = await page.locator('li.appendli .base-timeline-info').first().innerText();
  console.log('Notification Triggered Update from Detail View:', update4);

  //  Edit Record (Unmatched Condition)
  await flow.Editrecord();
  await flow.AssignDropDown();
  await flow.saveBtn();

  await flow.UpdateDateandTime();
  await flow.UpdateCaptured('Update Captured:');

  //  Edit & Save Again
  await flow.Editrecord();
  await page.waitForLoadState('networkidle');
  await flow.saveBtn();

  //  Every Time Record Save
  await page.goto('https://rdot.in/public/admin/Settings/?Module=Workflow&parent=Setting&view=index&fieldid=8');
  await flow.clickEditIcon();
  await flow.Everytimetherecordsave();
  await WorkflowNextbtn(page);
  await WorkflowNextbtn(page);
  await Submitbtn(page);

  //  Create Record
  await clickMenu(page);
  await Menulist(page, 'Leads');
  await flow.addLead();
  await flow.dataForInputFields();
  await flow.saveBtn();

  await page.reload();

  await flow.UpdateDateandTime();
  await flow.UpdateCaptured('Update Captured:');

  //  Edit Same Record
  await flow.Editrecord();
  await page.waitForLoadState('networkidle');
  await flow.saveBtn();

  await flow.UpdateDateandTime();
  await flow.UpdateCaptured('Update Captured');

  //  Every Time Record Modified
  await page.goto('https://rdot.in/public/admin/Settings/?Module=Workflow&parent=Setting&view=index&fieldid=8');
  await flow.clickEditIcon();
  await flow.Everytimerecordmodified();
  await WorkflowNextbtn(page);
  await WorkflowNextbtn(page);
  await Submitbtn(page);

  //  Create Record
  await clickMenu(page);
  await Menulist(page, 'Leads');
  await flow.addLead();
  await flow.dataForInputFields();
  await flow.saveBtn();

  await flow.UpdateDateandTime();
  await flow.UpdateCaptured('Update Captured');

  //  Edit & Save
  await flow.Editrecord();
  await page.waitForLoadState('networkidle');
  await flow.saveBtn();

  await flow.UpdateDateandTime();
  await flow.UpdateCaptured('Update Captured');





 


});