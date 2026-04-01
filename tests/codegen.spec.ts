import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://testautomationpractice.blogspot.com/');
  await page.getByRole('textbox', { name: 'Enter Name' }).click();
  await page.getByRole('textbox', { name: 'Enter Name' }).fill('sanjaykumar');
  await page.getByRole('textbox', { name: 'Enter EMail' }).click();
  await page.getByRole('textbox', { name: 'Enter EMail' }).fill('abc@gmail.com');
  await page.getByRole('textbox', { name: 'Enter Phone' }).click();
  await page.getByRole('textbox', { name: 'Enter Phone' }).fill('3765657667');
  await page.getByRole('textbox', { name: 'Address:' }).click();
  await page.getByRole('textbox', { name: 'Address:' }).fill('hsghagf');
  await page.getByRole('radio', { name: 'Male', exact: true }).check();
  await page.getByText('Monday').click();
  await page.getByRole('checkbox', { name: 'Wednesday' }).check();
  await page.getByRole('checkbox', { name: 'Friday' }).check();
  await page.getByLabel('Country:').selectOption('japan');
  await page.getByLabel('Colors:').selectOption('green');
  await page.getByLabel('Colors:').selectOption('blue');
  await page.locator('#datepicker').click();
  await page.getByRole('link', { name: '5', exact: true }).click();
});