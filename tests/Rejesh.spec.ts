import { test, expect } from '@playwright/test'


test('Open Browser', async ({ page }) => {

await page.goto("https://www.facebook.com/")

await page.waitForTimeout(5000)


}); 


test('Open Browser2', async ({ page }) => {

await page.goto("https://www.myntra.com/")

await page.waitForTimeout(5000)


}); 
