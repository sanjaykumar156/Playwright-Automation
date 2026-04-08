import { test, expect } from "@playwright/test";

test("screenshot demo", async ({ page }) => {

    await page.goto("https://demowebshop.tricentis.com/");
    // const timestamp = Date.now();
    //page screen shot
    //await page.screenshot({ path: 'screenshots/' + 'fullpage' + timestamp + '.png' });

    //full page screen shot
    //await page.screenshot({ path: 'screenshots/' + 'fullpage' + timestamp + '.png', fullPage: true });

    //particular locator screen shot
    //const products = page.locator('div.product-grid.home-page-product-grid')

    //await products.screenshot({ path: 'screenshots/' + 'products' + timestamp + '.png' });

    //screenshot on every test failure
    const text = await page.getByText('Register', { exact: true }).innerText();
    expect(text).toBe('Register');
})