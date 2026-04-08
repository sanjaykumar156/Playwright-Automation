import{test,expect,Page}from "@playwright/test";

let page: Page;
test.beforeAll("opening the appication",async({browser})=>{
  page= await browser.newPage();
  page.goto('https://www.demoblaze.com/index.html');
})

test.afterAll("closing the app",async()=>{
    await page.close();
})

test.beforeEach("login to application",async()=>{
    await page.locator('#login2').click();
    await page.locator('#loginusername').fill('sanjaykum');
    await page.locator('#loginpassword:visible').fill('admin');
    await page.locator('button:has-text("Log in")').click();
})

test.afterEach("Logout the app",async()=>{
   await page.locator('#logout2').click();
})

test("product validation",async()=>{
    const title=page.locator('a:has-text("PRODUCT STORE")');
    await expect(title).toBeVisible();
    await page.getByRole('heading', { name: 'Samsung galaxy s6' }).click();
    await page.locator('h2:has-text("Samsung galaxy s6")').isVisible();

    page.once('dialog',(dialog)=>{
        expect(dialog.message()).toContain('Product added');
        dialog.accept();
    })
    await page.getByRole('link', { name: 'Add to cart' }).click();
    

})