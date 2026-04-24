import { Expect,test } from "@playwright/test";
import { AddtoDo, CreateWorkflowPage} from "../pages/CreateWorkflow";
import { login } from "../utils/login";


test("Update Entity Schedule Task",async({page})=>{
test.setTimeout(300000);
  const Updateentity = new CreateWorkflowPage(page);

  login(page,"NAVEEN","rsoft","RSoft!@345");
  await Updateentity.ProfileIcon1(page);
    await Updateentity.goToCRMSettings(page);
    await Updateentity.OtherSettings(page);
    await Updateentity.clickWorkflow(page);
    await Updateentity.CreateWorkflowbtn(page);
    await Updateentity.SelectModule(page, "Module B");
    await Updateentity.WorkflowName(page);
    await Updateentity.WorkflowNextbtn(page);
    
    //Condition Section
    await Updateentity.AllConditionsbtn(page);
    await Updateentity.selectDropdownValue(page, 'Assigned To')
    await Updateentity.selectOperator(page,'is');
    await Updateentity.WorkflowNextbtn(page);

    //Add Task
    await Updateentity.AddtoDo(page);
    await Updateentity.selectTask(page,'Update Entity');

    //const record = page.locator('li.appendli').first();


    // Create Entity Task
    await Updateentity.TaskTitle(page,'Update Entity Task');
    await Updateentity.Selectmod(page)
    await Updateentity.SelectTargetmod(page,'MODULE A');
    await Updateentity.ActionModifiedBy(page,'(Source)Assigned To');
    await Updateentity.Targetdropdown(page,'Assigned To');
    await Updateentity.Sourcedropdown(page,'Assigned To');
    await Updateentity.Addfield();
    await Updateentity.Targetfield(page,'Name');
    await Updateentity.Sourcefiled(page,'Name');

    // Schedule Tasl

    await Updateentity.Scheduletab();
   // await Updateentity.condition(page,'after');
    await Updateentity.Selectminutes(page,'5');
    await Updateentity.ExecuteConditiontab();

    //schedule condition
    await Updateentity.AllConditionsbtn(page);
    await Updateentity.selectDropdownValue(page, 'Assigned To')
    await Updateentity.selectOperator(page,'is');

   // Fail Case
   await Updateentity.Failcase();
   await Updateentity.failminutes('5');
   await Updateentity.TaskSavebtn(page);
   await Updateentity.toggleRowSwitch('')
   await Updateentity.Submitbtn(page);
   await Updateentity.lastWorkFlowtoggle();



    



    // await Updateentity.TaskSavebtn(page);
    // await Updateentity.toggleRowSwitch("");
    // await Updateentity.Submitbtn(page);
    // await Updateentity.lastWorkFlow();







} 
   )