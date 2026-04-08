import{test,expect}from"@playwright/test";

import fs from 'fs';
import {parse} from 'csv-parse/sync';

const csvpath='testdata/data.csv';
const filecontent=fs.readFileSync(csvpath,'utf-8');
const records=parse(filecontent,{columns:true,skip_empty_lines:true});

test.describe('login datadriven test', async () => {
        for (const data of records) {

        test(`login test for "${data.email}" and password:"${data.password}"`, async ({ page }) => {
            await page.goto('https://www.demoblaze.com/index.html');
            await page.locator('#login2').click();
            await page.locator('#loginusername').fill(data.email);
            await page.locator('#loginpassword:visible').fill(data.password);
            await page.locator('button:has-text("Log in")').click();

            if(data.validity==='valid'){
                const uservalidation=page.locator('#nameofuser');
                await expect(uservalidation).toBeVisible({timeout:4000});
            }else{
                page.once('dialog',(dialog)=>{
                        expect(dialog.message()).toContain('Wrong password');
                        dialog.accept();
                    })
            }
        })
    }
    })