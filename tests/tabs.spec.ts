import { test, expect, Page, chromium,Locator } from "@playwright/test";

test("handling multiole tabs", async ({}) => {

    const browser = await chromium.launch();
    const context = await browser.newContext();
    const parentpage = await context.newPage();
    await parentpage.goto("https://testautomationpractice.blogspot.com/");


    const [childpage] =await Promise.all([context.waitForEvent('page'), await parentpage.getByText('New Tab').click()]);
    const pages=context.pages();

    console.log("title of first page",await pages[0].title());
    console.log("title of first page",await pages[1].title());

    await expect(childpage.locator('h1.title')).toBeVisible();


    
})