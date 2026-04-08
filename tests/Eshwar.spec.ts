import { test , expect } from '@playwright/test';

test('Login ', async ({ page }) => {

    await page.goto("https://www.saucedemo.com/")

    
    await page.waitForTimeout(3000)


});


