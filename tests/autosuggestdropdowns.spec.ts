import { test, expect, Locator } from "@playwright/test";

test("auto suggest dropdropdowns", async ({ page }) => {
    await page.goto('https://www.myntra.com/');
    const searchbox: Locator = page.locator('input.desktop-searchBar');
    await searchbox.fill("smart");
    await page.waitForTimeout(5000);
    const searchtext: Locator = page.locator('//div[@class="desktop-autoSuggest desktop-showContent"]/ul/li');
    const count = await searchtext.count();

    console.log("number of suggested options", count);
    await page.waitForTimeout(5000);

    for(let i=0;i<count;i++){
        console.log(await searchtext.nth(i).allTextContents());
    }



})

