import { test, expect, Locator } from "@playwright/test";

test("handling dialouge", async ({ page }) => {

    await page.goto('https://testautomationpractice.blogspot.com/');
    page.on('dialog',(dialog)=>{
        console.log("dialog type:",dialog.type());
        console.log("dialog message:",dialog.message());
        dialog.accept();
    })
    await page.locator("#confirmBtn").click();
    const alerttext:string=await page.locator('#demo').innerText();
    await expect(page.locator("#demo")).toHaveText("You pressed OK!");
    await page.waitForTimeout(4000);


    //prompt type alert
    page.on('dialog', (dialog) => {
        console.log("dialog type:", dialog.type());
        console.log("dialog message:", dialog.message());
        expect(dialog.message()).toContain("Please enter your name:");
        dialog.accept('sanjay');
    })
    await page.getByText('Prompt Alert').click();
    const text: string = await page.locator('#demo').innerText();
    console.log("dialouge text is:",text);
    await expect(page.locator("#demo")).toHaveText("Hello sanjay! How are you today?");
    await page.waitForTimeout(4000);
})