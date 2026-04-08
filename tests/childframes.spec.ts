import { test, expect, Locator } from "@playwright/test";

test("handling child frames", async ({ page }) => {

    await page.goto("https://ui.vision/demo/webtest/frames/");
    const parentframe = page.frame({ url: "https://ui.vision/demo/webtest/frames/frame_5.html" });

    if (parentframe) {
        const textbox = parentframe.locator("input[name='mytext5']");
        await textbox.fill("sanjay");
        await expect(textbox).toHaveValue("sanjay");
        await page.frameLocator('[src*="frame_5.html"]').getByRole('link').click();
        const logo = page.frameLocator('[src*="frame_5.html"]').getByRole('img', { name: 'Ui.Vision by a9t9 software - Image-Driven Automation' })
        await expect(logo).toBeVisible();

    }

await page.waitForTimeout(5000);

})
