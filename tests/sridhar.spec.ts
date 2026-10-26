import { test,expect } from '@playwright/test'


test('OpenBrowser', async ({ page }) => {


await page.goto("https://www.facebook.com/")

await page.waitForTimeout(3000)

// await page.getByRole('textbox',{name:'Email address or mobile number'}).fill("sridhar@gmail.com")


// await page.getByRole('textbox',{name:'Password'}).fill("123456789")

// await page.getByRole('button',{name:"Log in"}).click()

await page.getByRole('link',{name:"Forgotten password?"}).click()

await page.waitForTimeout(3000)




})
