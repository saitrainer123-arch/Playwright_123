import { test, expect } from '@playwright/test';

test('Login Validation', async ({ page }) => {
  await page.goto('https://testautomationpractice.blogspot.com/');

  // await page.getByRole('textbox',{name:'Username'}).fill('Prabhas');

  // await page.getByRole('textbox',{name:'Password'}).fill('13234545')

  // await page.getByRole('button',{name:'Login'}).click()

  //await page.getByRole('link',{name:'Forgotten password?'}).click().

  await page.getByLabel('Name:').fill('Saikumar');

  
   //await page.getByRole('textbox', { name: 'Username' }).fill('standard_user')

   await page.waitForTimeout(3000)

});