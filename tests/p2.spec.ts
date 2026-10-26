import {test,expect} from '@playwright/test'



test('UserName1', async ({ page }) => {
    await page.goto("https://www.saucedemo.com/")
    await page.getByPlaceholder('Username').fill('Govind')
    await page.waitForTimeout(3000)

})

test('UserName2', async ({ page }) => {
    await page.goto("https://www.saucedemo.com/")
    await page.getByPlaceholder('Username').fill('Gopinath')
    await page.waitForTimeout(3000)
})



test('UserName3', async ({ page }) => {
    await page.goto("https://www.saucedemo.com/")
    await page.getByPlaceholder('Username').fill('nagesh')
    await page.waitForTimeout(3000)
})

test('UserName4', async ({ page }) => {
    await page.goto("https://www.saucedemo.com/")
    await page.getByPlaceholder('Username').fill('Rajesh')

    await page.waitForTimeout(3000)
})
test('UserName5', async ({ page }) => {
    await page.goto("https://www.saucedemo.com/")
    await page.getByPlaceholder('Username').fill('Sai')

    await page.waitForTimeout(3000)
})
