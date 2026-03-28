import { test, expect, Locator } from "@playwright/test";

test("hidden boostrap dropdowns", async ({ page }) => {
   await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
   await page.getByPlaceholder('Username').fill('Admin');
   await page.getByPlaceholder('Password').fill('admin123');
   await page.getByRole('button').click();

   await page.getByText('PIM').click();
   await page.locator('form i').nth(2).click();
   await page.waitForTimeout(3000);

   const options: Locator = page.locator("div[role='listbox'] span");
   const count: number = await options.count();

   console.log(count);
   for (let i = 0; i < count; i++) {
      const text = await options.nth(i).innerText();
      if (text === 'Automation Tester') {
         await options.nth(i).click();
         break;
      }
   }
   await page.waitForTimeout(3000);

})