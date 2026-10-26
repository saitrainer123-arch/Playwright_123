import { test, expect } from '@playwright/test'

test('title', async ({ page }) => {

    await page.goto("https://www.saucedemo.com/")

    //this is the ID formul= '#idvalue'
    // await page.locator('#user-name').fill('standard_user')

    //Xpath= //tagname[@AttributeName='Attributevalue']
    // await page.locator("//input[@name='user-name']").fill('Saikumar')
    //await page.locator("//input[@data-test='username']").fill("Prabhas")

    //Css Selector :-  tagname[AttributeName='Attributevalue']
    // await page.locator("input[data-test='username']").fill("Ramcharan")


    //Locaters by xpath Text() =  //tagname[text()='availablity text']-------FACEBOOK email 
    // await  page.locator("//label[text()='Email address or mobile number']").fill("rahul@gmail.com")


    //Built_in Locaters by Playwright
    // await page.getByPlaceholder('Username').fill("Ramcharan")
    // await page.getByText("Email address or mobile number").fill("Prabhas")




    // await page.locator('#user-name').fill('standard_user')






    // await page.locator('#password').fill('secret_sauce')

    // await page.locator('#login-button').click()


    await page.waitForTimeout(3000)

});

