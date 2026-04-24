import "../utils/Screenshot";
import { expect ,test } from "@playwright/test";
import { login } from "../utils/login";
import { AddtoDo, CreateWorkflowPage} from "../pages/CreateWorkflow";
import { clickMenu, OtherSettings } from "../utils/Dashboard";
import { Menulist } from "../utils/Menulist";
import { LeadsPage1 } from "../pages/LeadsPage";



test("Workflow CreateEntity Task",async ({page})=> {
    test.setTimeout(300000);

    const Updateentity = new CreateWorkflowPage(page);
    const detail= new LeadsPage1(page)

    await login(page,"NAVEEN","rsoft","RSoft!@345")
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
    await Updateentity.TaskSavebtn(page);
    await Updateentity.toggleRowSwitch("");
    await Updateentity.Submitbtn(page);
    await Updateentity.lastWorkFlowtoggle();


    //Create Record for Only on the first save

    await clickMenu(page);
    await Menulist(page,'Module B');
    await Updateentity.addrecord();
    await Updateentity.recorddata();
    await Updateentity.saveBtn();

// Update Captured

    await Updateentity.UpdateDateandTime();
    await Updateentity.UpdateCaptured('Update Captured');
    

// Open Target Module record 
    await clickMenu(page);
    await Menulist(page,'MODULE A');
    await Updateentity.openrecord();
    // Update 
    await Updateentity.UpdateDateandTime();
    await Updateentity.UpdateCaptured('Update Captured');
    



// Untill the first condition is ture

    await Updateentity.ProfileIcon1(page);
    await Updateentity.goToCRMSettings(page);
    await Updateentity.OtherSettings(page);
    await Updateentity.clickWorkflow(page);
    await Updateentity.clickEditIcon();
    await Updateentity.Untilthefirstcondition();
    await Updateentity.WorkflowNextbtn(page);
    await Updateentity.WorkflowNextbtn(page);
    await Updateentity.Submitbtn(page);

    // Create Record 

    await clickMenu(page);
    await Menulist(page,'Module B');
    await Updateentity.addrecord();
    await Updateentity.AssignDropDown();
    await Updateentity.recorddata();
    await Updateentity.saveBtn();

    //Update Captured
    await Updateentity.UpdateDateandTime();
    await Updateentity.UpdateCaptured('Update Captured');
    

   // Edit the Record 
    await Updateentity.Editrecord();
    await Updateentity.Assignto();
    await Updateentity.saveBtn();

    //Updates

    await Updateentity.UpdateDateandTime();
    await Updateentity.UpdateCaptured('Update Captured');
   

  // Change the condition filed 
    await Updateentity.Editrecord();
    await Updateentity.AssignDropDown();
    await Updateentity.saveBtn();

    await Updateentity.UpdateDateandTime();
    await Updateentity.UpdateCaptured('Update Captured :')



    // Every time the record is save

    await Updateentity.ProfileIcon1(page);
    await Updateentity.goToCRMSettings(page);
    await Updateentity.OtherSettings(page);
    await Updateentity.clickWorkflow(page);
    await Updateentity.clickEditIcon();
    await Updateentity.Everytimetherecordsave();
    await Updateentity.WorkflowNextbtn(page);
    await Updateentity.WorkflowNextbtn(page);
    await Updateentity.Submitbtn(page);

    // Create New Record
    await clickMenu(page);
    await Menulist(page,'Module B');
    await Updateentity.addrecord();
    await Updateentity.AssignDropDown();
    await Updateentity.recorddata();
    await Updateentity.saveBtn();

    //Update Captured
    await Updateentity.UpdateDateandTime();
    await Updateentity.UpdateCaptured('Update Captured');
   
    // Edit the Record 
    await Updateentity.Editrecord();
    await page.waitForLoadState('networkidle');
    await Updateentity.saveBtn();

    //Updates

    await Updateentity.UpdateDateandTime();
    await Updateentity.UpdateCaptured('Update Captured');
   

    // Every time the record is modified

     await Updateentity.ProfileIcon1(page);
    await Updateentity.goToCRMSettings(page);
    await Updateentity.OtherSettings(page);
    await Updateentity.clickWorkflow(page);
    await Updateentity.clickEditIcon();
    await Updateentity.Everytimerecordmodified();
    await Updateentity.WorkflowNextbtn(page);
    await Updateentity.WorkflowNextbtn(page);
    await Updateentity.Submitbtn(page);

    // Create New Record
    await clickMenu(page);
    await Menulist(page,'Module B');
    await Updateentity.addrecord();
    await Updateentity.AssignDropDown();
    await Updateentity.recorddata();
    await Updateentity.saveBtn();

    //Update Captured
    await Updateentity.UpdateDateandTime();
    await Updateentity.UpdateCaptured('Update Captured');
    

    // Edit the Record 
    await Updateentity.Editrecord();
    await page.waitForLoadState('networkidle');
    await Updateentity.saveBtn();

    //Updates

    await Updateentity.UpdateDateandTime();
    await Updateentity.UpdateCaptured('Update Captured');




    
 





    





    

    





    













});




