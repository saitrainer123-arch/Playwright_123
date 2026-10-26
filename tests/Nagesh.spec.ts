import { test, expect } from '@playwright/test'


test('Open Broswer', async ({ page }) => {

  await page.goto("https://www.facebook.com/")

  await page.waitForTimeout(4000)

  await page.goto("https://www.myntra.com/")

  await page.waitForTimeout(4000)

  await page.goBack()

  await page.waitForTimeout(4000)

  await page.goForward()



})