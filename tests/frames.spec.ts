import { test, expect, Locator } from "@playwright/test";

test("Handling frames", async ({ page }) => {
    await page.goto("https://ui.vision/demo/webtest/frames/");

    /*const frame = page.frame({ url: "https://ui.vision/demo/webtest/frames/frame_1.html" });

    if (frame) {
        await frame.locator("input[name='mytext1']").fill("sanjay");
    } else {
        console.log("Frame is not available");
    }
        
    await page.waitForTimeout(4000);
*/

    //using frame.locator
    const frame1 = page.frameLocator("[src*='frame_1.html']").locator("input[name='mytext1']");
    frame1.fill('sanjay')
    await page.waitForTimeout(4000);
})
test.only("handling child frames",async({page})=>{
await page.goto("https://ui.vision/demo/webtest/frames/");
const frame2=page.frame({url:"https://ui.vision/demo/webtest/frames/frame_3.html"});

if(frame2){
    await frame2.locator("input[name='mytext3']").fill("sanjay");
    const childFrames=frame2.childFrames();
   console.log("child frame lenght:" ,childFrames.length);
   const radio=childFrames[0].getByLabel("I am a human");
   await radio.check();
   await expect(radio).toBeChecked();
}else{
    console.log("no child frames avaialble");
}
await page.waitForTimeout(4000);


})