import { test, expect } from '@playwright/test';
// This is inside the Group One
test.describe("Group One", async () => {

test('Open Amezon', async ({ page }) => {

  await page.goto("https://www.amazon.in/")
  await page.waitForTimeout(3000)

})

test('Open Fb', async ({ page }) => {

  await page.goto("https://www.facebook.com/")
  await page.waitForTimeout(3000)
})

})

test.skip("Group One", async () => {


test('Open Fliffcart', async ({ page }) => {

  await page.goto("https://www.flipkart.com/")
  await page.waitForTimeout(3000)
})

test('Open Myntra', async ({ page }) => {

  await page.goto("https://www.myntra.com/")
  await page.waitForTimeout(3000)
})


})


