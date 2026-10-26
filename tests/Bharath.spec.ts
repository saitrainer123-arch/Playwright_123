import { test } from '@playwright/test'

test('title', async ({ page }) => {

await page.goto("https://www.saucedemo.com/")

// Finding the locator through ---Id
//await page.locator("#user-name").fill("Anji")

//Finding the locator through ---xpath ----> //tagname[@AttributeName='AttributeValue']
//await page.locator("//input[@data-test='username']").fill("Bharath")

//await page.locator("//input[@placeholder='Username']").fill("Prabhas")

//await page.locator("//input[@name='user-name']").fill('Ramcharan')

//Finding the locator through --- Css selector ---->[AttributName='Attributevalue']
//await page.locator("[placeholder='Username']").fill("AlluArjun")
//await page.locator("[data-test='username']").fill("Mb")

await page.locator("[name='user-name']").fill("standard_user")

await page.locator("#password").fill("secret_sauce")

await page.locator("#login-button").click()



// This for waiting time
await page.waitForTimeout(3000)



})