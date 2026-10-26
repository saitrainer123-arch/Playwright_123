
import { test, expect } from '@playwright/test'


test('Login', async ({ page }) => {

    await page.goto("https://www.saucedemo.com/")


    
    //By --getByrole
    //await page.getByRole('textbox', { name: 'Username' }).fill("Syyed")


    //BY-- getByplaceholder
    //await page.getByPlaceholder("Username").fill("isha")


    //By--getBytext  --- For Facebook
    //await page.getByText("Email address or mobile number").fill("Syyed@gmail.com")


    //By--Id --for locator() -----"#idValue"
    //await page.locator("#user-name").fill("Prabhas")



    //By-Css Seletor --- [AttributeName='AttributeValue'] or tagname[AttributeName='AttributeValue']
    // await page.locator("[placeholder='Username']").fill("Maheshbabu")
    // await page.locator("[data-test='username']").fill("JrNTR")



    await page.waitForTimeout(5000)



})
