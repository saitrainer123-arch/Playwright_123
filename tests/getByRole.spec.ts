import { test, expect } from '@playwright/test';

test('Login with valid credentials', async ({ page }) => {

  // Open login page
  await page.goto('https://www.facebook.com/');

  // await page.getByRole('textbox',{name:'Username'}).fill("Naveen");

  // await page.getByRole('textbox', { name: "Username" }).fill("sai")

  // await page.getByRole('textbox', { name: "Password" }).fill("565655")

  // await page.getByRole('button', { name: "Login" }).click()

  await page.getByRole('link',{name:"Forgotten Password?"}).click()


  //await page.getByPlaceholder("Password").fill("12322222")



  //await page.getByText("Forgotten password?").click()

  await page.waitForTimeout(3000)








  // await page.getByRole('textbox', { name: 'Username' }).fill('standard_user')

  // await page.getByRole('textbox', { name: 'Password' }).fill("secret_sauce")

  // await page.getByRole('button', { name: 'Login' }).click()


  // Enter username
  // await page.getByRole('textbox', { name: 'Username' }).fill('testuser');

  // // Enter password
  // await page.getByRole('textbox', { name: 'Password' }).fill('password123');

  // // Click login button
  // await page.getByRole('button', { name: 'Login' }).click();

  //   // Validate successful login
  //  // await expect(page.getByRole('heading', { name: 'Dashboard' })).toBeVisible();

});