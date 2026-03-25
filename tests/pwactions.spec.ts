import { test, expect, Locator } from "@playwright/test";

test("text input actions", async ({ page }) => {

    await page.goto("https://testautomationpractice.blogspot.com/");

    const textbox: Locator = page.locator('#name');
    await expect(textbox).toBeEnabled();
    await textbox.fill("sanjay");

    const maxlength: any = await textbox.getAttribute("maxlength");
    expect(maxlength).toBe("15");
    console.log("entered text was: ", await textbox.inputValue());

})

test("Radio button Actions", async ({ page }) => {
    await page.goto("https://testautomationpractice.blogspot.com/");
    const maleradiobutton: Locator = page.locator('#male');
    await maleradiobutton.check();
    await expect(maleradiobutton).toBeChecked();
})

test.only("check box actions", async ({ page }) => {
    await page.goto("https://testautomationpractice.blogspot.com/");
    //const sundatcheckbox:Locator=page.getByLabel('Sunday');
    //await sundatcheckbox.check();
    //await expect(sundatcheckbox).toBeChecked();     //single check box checked 

    // select all check boxes and asser each is checked 
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const checkboxes: Locator[] = days.map(index => page.getByLabel(index));
    expect(checkboxes.length).toBe(7);

    for (const checkbox of checkboxes) {
        await checkbox.check();
        await expect(checkbox).toBeChecked();
    }
    await page.waitForTimeout(3000);

    // select last 3 checkboxes
    for(const checkbox of checkboxes.slice(-3)){
    checkbox.check();
    await expect(checkbox).toBeChecked();
    }
    await page.waitForTimeout(3000);

    //uncheck last 3 checkboxes
    for (const checkbox of checkboxes.slice(-3)) {
      await checkbox.uncheck();
     await expect(checkbox).not.toBeChecked();
    }
    await page.waitForTimeout(3000);

    //Toggle if checked uncheck if uncheked check 

    for (const checkbox of checkboxes) {
        if (await checkbox.isChecked()) {
            await checkbox.uncheck();
            await expect(checkbox).not.toBeChecked();
        } else {
            await checkbox.check();
            await expect(checkbox).toBeChecked();
        }
    }
    await page.waitForTimeout(3000);

    //select random checkboxes bases on index
    const indexs:number[]=[1,3,5];
    for(const i of indexs){
       await checkboxes[i].check();
       await expect(checkboxes[i]).toBeChecked();
    }


})

