
import { test, expect,Locator} from "@playwright/test"

test ("verify playwright locators",async({page})=>{

    await page.goto("https://demowebshop.tricentis.com/");

    const logo:Locator=page.getByAltText("Tricentis Demo Web Shop");
    await expect(logo).toBeVisible();
    
    const text:Locator=page.getByText("Welcome to our store");
    await expect(text).toBeVisible();

    await page.getByRole("link",{name:'Register'}).click(); 
    await expect(page.getByRole("heading",{name:"Register"})).toBeVisible();

    await page.getByRole('textbox',{name:'First name:'}).fill('sanjay');
    await page.getByLabel('Last name:').fill('kumar');
})
