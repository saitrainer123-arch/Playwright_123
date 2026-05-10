import { test , expect } from '@playwright/test'

test('open Brower', async ({ page }) => {

await page.goto("https://www.myntra/")

await page.waitForTimeout(3000)

});