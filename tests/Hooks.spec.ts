import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
    await page.goto("https://www.saucedemo.com/")
    await page.waitForTimeout(5000)
})

// // // // It will run after every test
// test.afterEach(async ({ page }) => {

//     await page.locator("#login-button").click()
//     await page.waitForTimeout(5000)

// })

// //Before all 
// test.beforeAll(async () => {

//     console.log("The testing is strated")

// })
// test.afterAll(async () => {

//     console.log("The testing is Ended")

// })


test('UserName1', async ({ page }) => {

 

    await page.getByPlaceholder('Username').fill('Govind')
   

})

test('UserName2', async ({ page }) => {

    await page.getByPlaceholder('Username').fill('Gopinath')


})

test('UserName3', async ({ page }) => {

    await page.getByPlaceholder('Username').fill('nagesh')

})

test('UserName4', async ({ page }) => {

    await page.getByPlaceholder('Username').fill('Rajesh')


})
