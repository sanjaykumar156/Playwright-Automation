import { test, expect, chromium } from "@playwright/test";

test("popup window handle", async ({ browser }) => {

    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto("https://testautomationpractice.blogspot.com/");
    await Promise.all([page.waitForEvent('popup'), page.getByRole('button', { name: 'Popup Windows' }).click()]);
    const noofwindows = context.pages();
    console.log("no of popup windows are opened :", noofwindows);

    console.log(noofwindows[0].url());
    console.log(noofwindows[1].url());

    for (const popwin of noofwindows) {
        const title = popwin.title();
        if (((await title).includes('Playwright'))) {
            await popwin.locator(".getStarted_Sjon").click();
            await popwin.close();
        }
    }
    await page.waitForTimeout(3000);




})