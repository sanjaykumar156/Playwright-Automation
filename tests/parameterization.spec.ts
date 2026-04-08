import { test, expect } from "@playwright/test";

const loginData: string[][] = [
    ["sanjaykum", "admin", "valid"],
    ["sanjay", "admin", "invalid"],
    ["", "", "invalid"],
];

for (const [email, password, validity] of loginData) {
    test.describe('login datadriven test', async () => {

        test(`login test for ${email} and ${password}`, async ({ page }) => {
            await page.goto('https://www.demoblaze.com/index.html');
            await page.locator('#login2').click();
            await page.locator('#loginusername').fill(email);
            await page.locator('#loginpassword:visible').fill(password);
            await page.locator('button:has-text("Log in")').click();

            if(validity==='valid'){
                const uservalidation=page.locator('#nameofuser');
                await expect(uservalidation).toBeVisible({timeout:4000});
            }else{
                page.once('dialog',(dialog)=>{
                        expect(dialog.message()).toContain('Wrong password');
                        dialog.accept();
                    })
            }
        })
    })
}