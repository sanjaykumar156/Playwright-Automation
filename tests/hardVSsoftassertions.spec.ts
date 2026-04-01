import{test,expect,Locator}from"@playwright/test";

test("hard vs soft assertion",async({page})=>{
await page.goto('https://testautomationpractice.blogspot.com/');
const text=await page.locator('h1.title').innerText();
await expect.soft(text).toContain("playwright");
await page.locator('#name').fill('sanjay');
page.waitForTimeout(4000);


})