import{test,expect,chromium}from"@playwright/test";

test("authenticated popup",async({browser})=>{
    const context=await browser.newContext({httpCredentials:{username:'admin',password:'admin'}});
    const page=await context.newPage();
    
    page.goto('https://testautomationpractice.blogspot.com/');


})