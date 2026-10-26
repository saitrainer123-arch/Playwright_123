import { test, expect } from '@playwright/test'


test('Open Browser', async ({ page }) => {

    await page.goto("https://www.saucedemo.com/")

    //Finding the locator through ID = #idvalue
    //  await page.locator("#user-name").fill("standard_user")

    //class formula = '.classname'

    //css selector = tagname[Attributename='Attributevalue'] or [Attributename='Attributevalue']
 // await page.locator("input[name='user-name']").fill("basava")

    //xpath = //tagname[@Attributename='Attributevalue']
  // await page.locator("//input[@data-test='username']").fill("Venky")

    //Playwright built in locators -getbyplaceholder
  //await page.getByPlaceholder("Username").fill("saikumar")
    
    //getbytext
    //await page.getByText("Email address or mobile number").fill("basava@gmail.com")




    await page.waitForTimeout(3000)


})