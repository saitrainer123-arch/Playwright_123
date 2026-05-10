import { test, expect } from '@playwright/test';

test('Nested Frames demo from demo.automationtesting.in', async ({ page }) => {

    // 1️⃣ Navigate to the application
    await page.goto('https://demo.automationtesting.in/Frames.html');


    // // Click on "Iframe with in an Iframe"
    await page.locator("//a[text()='Iframe with in an Iframe']").click();

    // // Outer iframe
    const outerFrame = page.frameLocator("iframe[src='MultipleFrames.html']");

    // // Inner iframe inside outer iframe
    const innerFrame = outerFrame.frameLocator("iframe[src='SingleFrame.html']");

    // // Type text inside inner iframe
    await innerFrame.locator("input[type='text']").fill("anji");

    await page.waitForTimeout(3000)

    
});