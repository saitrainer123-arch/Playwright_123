import { test, expect } from '@playwright/test';

//one Test case
test('Facebook Login using XPath', async ({ page }) => {

    // Open Facebook
    await page.goto('https://www.facebook.com/');

    //await page.locator('//input[@name="email"]').fill("narsimha@gmail.com")
    await page.fill('//input[@name="email"]', 'narsimha@gmail.com');
    await page.waitForTimeout(2000)
})
//Test Case 2
test('google', async ({ page }) => {

    // Open Facebook
    await page.goto('https://www.google.com/');
    await page.waitForTimeout(2000)
})
//Test Case 3
test('amezon', async ({ page }) => {

    // Open Facebook
    await page.goto('https://www.amazon.in/');
    await page.waitForTimeout(2000)

})