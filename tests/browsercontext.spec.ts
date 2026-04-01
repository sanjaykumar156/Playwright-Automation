import{test,expect,Page,chromium} from "@playwright/test";

test("browser context",async()=>{

   const browser=await chromium.launch();
   const context=await browser.newContext();
   const page=await context.newPage();
   const page1=await context.newPage();

   await page.goto('https://testautomationpractice.blogspot.com/');
   await page1.goto("https://demowebshop.tricentis.com/");

})
