import { test, expect } from "@playwright/test";
import { login } from "../utils/login";
import { clickMenu } from "../utils/Dashboard";
import { Menulist } from "../utils/Menulist";
import {CreateWorkflowPage} from "page/CreateWorkflowPage";


test("Playwright Practice", async ({page})=>{

    const flow = new CreateWorkflowPage(page);

//await login{Page, 'Vinodh', 'rsoft','Vinodh@5292' };
 await login(page, 'NAVEEN', 'rsoft', 'RSoft!@345');

await clickMenu(page);
await Menulist(page, "Leads");



});