import{test,expect}from "@playwright/test";

test.describe('smoke',async()=>{
    test("smoke test",async({page})=>{
        console.log("this is a smoke test case")
    });
})

test.describe('sanity',async()=>{
    test("sanity test",async({page})=>{
        console.log("this is a sanity test case")
    });
})