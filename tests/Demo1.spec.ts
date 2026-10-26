import { test, expect } from '@playwright/test';

test('Open Website', async ({ page }) => {

    await page.goto("https://www.facebook.com/")

    await page.waitForTimeout(4000)

    
})