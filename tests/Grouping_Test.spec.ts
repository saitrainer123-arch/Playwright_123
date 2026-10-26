import { test, expect } from '@playwright/test';


test.describe('Group 1', () => {

test('UserName1', async ({ page }) => {

    await page.goto("https://www.saucedemo.com/")
    
    const u1 = page.getByPlaceholder('Username')

    await u1.fill("Praveen")

    await expect(u1).toHaveValue("Praveen")

})

test('UserName2', async ({ page }) => {

    await page.goto("https://www.saucedemo.com/")
    
    const u1 = page.getByPlaceholder('Username')

    await u1.fill("Nagaraj")

    await expect(u1).toHaveValue("Nagaraj")

})
})

test.skip('Group 2', () => {
test('UserName3', async ({ page }) => {

    await page.goto("https://www.saucedemo.com/")
    
    const u1 = page.getByPlaceholder('Username')

    await u1.fill("venkanna")

    await expect(u1).toHaveValue("venkanna")

})
test('UserName4', async ({ page }) => {

    await page.goto("https://www.saucedemo.com/")
    
    const u1 = page.getByPlaceholder('Username')

    await u1.fill("Sai")

    await expect(u1).toHaveValue("Praveen")

})
test('UserName5', async ({ page }) => {

    await page.goto("https://www.saucedemo.com/")
    
    const u1 = page.getByPlaceholder('Username')

    await u1.fill("Anil")

    await expect(u1).toHaveValue("Praveen")

})


})

