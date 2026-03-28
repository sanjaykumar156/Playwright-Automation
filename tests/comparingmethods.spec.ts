import{test,expect,Locator} from "@playwright/test";

test("comparing methods",async ({page})=>{
    await page.goto("https://demowebshop.tricentis.com/");
    const productitems:Locator=page.locator('.product-title');
    const count:number=await productitems.count();

    // console.log(count);
    
    // for(let i=0;i<count;i++){
    //     const text:String=await productitems.nth(i).innerText();
    //     console.log(text);
    // }

    const productnames=productitems.allInnerTexts();
    console.log(productnames);
    
    
})