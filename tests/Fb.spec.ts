import { test, expect } from '@playwright/test';



test('test', async ({ page }) => {

  await page.goto('https://www.saucedemo.com/');
  

  await page.getByRole('textbox',{name:"Username"}).fill("Shiva")



  await page.waitForTimeout(5000)

});




