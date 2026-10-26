import {test,expect} from '@playwright/test'


test('Verify Login', async ({ page }) => {


    await page.goto("https://www.facebook.com/")

    // formula getByrole('role',{name:'Name'})
    await page.getByRole('textbox',{name:'Email address or mobile number'}).fill("Anil@gmail.com")

    await page.getByRole('textbox',{name:'Password'}).fill("123456789")

    await page.getByRole('button',{name:'Log in'}).click()

    await page.getByRole('link',{name:'Forggoten password?'}).click()

    await page.waitForTimeout(5000)


})