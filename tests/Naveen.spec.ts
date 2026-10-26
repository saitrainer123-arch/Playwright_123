import { test,expect } from '@playwright/test';

test('Open Browser', async ({ page }) => {

await page.goto("https://www.saucedemo.com/")

//By--id
//await page.locator('#user-name').fill("prabhas")

//By-- Class
//await page.locator(".input_error form_input").fill("RamCharan")

//By --Css
//await page.locator("[placeholder='Username']").fill("AA")

//await page.locator("input[name='user-name']").fill("Pavan")

//By --Xpath
//await page.locator("//input[@placeholder='Username']").fill("Mahesh")

//By --text()
//await page.getByText("Email address or mobile number").fill("SAi@gmail.com")

//Built-In 
await page.getByPlaceholder("Username").fill("standard_user")

await page.locator("#password").fill("secret_sauce")

await page.locator("#login-button").click()


await page.waitForTimeout(3000)

});

