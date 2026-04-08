import { test, expect } from '@playwright/test';

// It will run before every test
test.beforeEach(async ({ page }) => {
    await page.goto("https://www.saucedemo.com/")
    await page.waitForTimeout(5000)
})
// It will run after every test
test.afterEach(async ({ page }) => {
    await page.locator("#login-button").click()
    await page.waitForTimeout(5000)
})
// It will run only beforeall  tests
test.beforeAll(async () => {
    console.log("Program is Strated")

})
// It will run only Afterall  tests
test.afterAll(async () => {
    console.log("Program is Exicuted Sucessfully")

})

test('TestCase 1', async ({ page }) => {

    await page.getByPlaceholder('Username').fill('sai')

    await page.waitForTimeout(5000)

})
test('TestCase 2', async ({ page }) => {

    await page.getByPlaceholder('Username').fill('kumar')
    await page.waitForTimeout(5000)

})
test('TestCase 3', async ({ page }) => {
    await page.getByPlaceholder('Username').fill('Tarun')

    await page.waitForTimeout(5000)

})
