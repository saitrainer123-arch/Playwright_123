import { test } from '@playwright/test';

test('Nested Frames', async ({ page }) => {

    await page.goto('https://demo.automationtesting.in/Frames.html');

    // Outer Frame
    const outerFrame = page.frameLocator('iframe[src="MultipleFrames.html"]');

    // Inner Frame
    const innerFrame = outerFrame.frameLocator('iframe');

    // Enter text inside inner frame
    await innerFrame.locator('input[type="text"]').fill('Hello Playwright');

});