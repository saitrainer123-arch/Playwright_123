import { test, expect } from '@playwright/test';

// This is inside the Group One
test.describe("Group One", async () =>{
  test('Open Amezon', async ({ page }) => {

    await page.goto("https://www.amazon.in/")
    await page.waitForTimeout(3000)

  })

  test('fb', async ({ page }) => {

    await page.goto("https://www.facebook.com/")
    await page.waitForTimeout(3000)

  })


  test('Flifcart', async ({ page }) => {

    await page.goto("https://www.flipkart.com/")
    await page.waitForTimeout(3000)


  })

})

test.describe("Group Two", async () => {
  test('redbus', async ({ page }) => {

    await page.goto("https://www.redbus.in/")
    await page.waitForTimeout(3000)


  })
   test('redbus1', async ({ page }) => {

    await page.goto("https://www.redbus.in/")
    await page.waitForTimeout(3000)


  })
   test('redbus2', async ({ page }) => {

    await page.goto("https://www.redbus.in/")
    await page.waitForTimeout(3000)


  })




})
