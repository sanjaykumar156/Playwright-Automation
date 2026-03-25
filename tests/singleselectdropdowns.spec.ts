import { test, expect, Locator } from "@playwright/test";

test("single select dropdowns", async ({ page }) => {

    await page.goto("https://testautomationpractice.blogspot.com/");

    const dropdown: Locator = page.locator('#country');

    await dropdown.selectOption('India');
    // await dropdown.selectOption({ value: 'uk' });
    // await dropdown.selectOption({ label: 'France' });
    // await dropdown.selectOption({index:14});

    //count number of elements in dropdown
    const countries:Locator=page.locator('#country>option');
    await expect(countries).toHaveCount(10);

    //check presence of element
    const dropdowntest:string[]=(await countries.allTextContents()).map(text=>text.trim());
    console.log(dropdowntest);
    expect(dropdowntest).toContain('India');

    
    //multi select  dropdowns
    const colours:Locator=page.locator('#colors');
    await colours.selectOption(['Red','Blue','Green']);  //select by text
    await colours.selectOption(['red','green','blue']);  //select by value
    await colours.selectOption([{label:'Red'},{label:'Green'},{label:'Blue'}]); //select by lable
    await colours.selectOption([{index:2},{index:4},{index:3}]); //select by index

    await page.waitForTimeout(3000);


})