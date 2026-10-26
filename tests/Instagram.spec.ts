import { expect, test } from '@playwright/test';

test('Insatgtram login', async ({ page }) => {

    await page.goto("https://www.instagram.com/accounts/login/?hl=en")

    //Finding the locator by Id ------#idvalue
    //await page.locator('#_r_6_').fill("tarun@gmail.com")

    //Finding the locator by css selector ------[name='namevalue']-
    //await page.locator('[name="email"]').fill("tarun@gmail.com")

    //Finding the locator by xpath ------//tagname[@AttributeName='AttributeValue']
    //await page.locator('//input[@name="email"]').fill("tarun1@gmail.com")

    //Finding the locator by text ------//tagname[text()='text']
    //await page.locator('//label[text()="Mobile number, username or email"]').fill("tarun2@gmail.com")

    await page.fill('//label[text()="Mobile number, username or email"]', 'sai@gmail.com')

    await page.locator("//span[text()='Log in']").click()



    await page.waitForTimeout(2000)

})
