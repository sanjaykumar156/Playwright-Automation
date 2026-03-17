import { test, expect, Locator } from "@playwright/test";

test("single select dropdowns", async ({ page }) => {

    await page.goto("https://testautomationpractice.blogspot.com/");

    const dropdown: Locator = page.locator('#country');

    await dropdown.selectOption('India');
    await dropdown.selectOption({ value: 'uk' });
    await dropdown.selectOption({ label: 'France' });
    await dropdown.selectOption({index:14});
})