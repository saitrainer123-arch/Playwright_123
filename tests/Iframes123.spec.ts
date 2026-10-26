import { test } from '@playwright/test';

test('Nested Frames', async ({ page }) => {

    await page.goto('https://demo.automationtesting.in/Frames.html');

    // Clicking the Iframe with in an Iframe
    await page.getByText("Iframe with in an Iframe").click()

    // Css Selector [AN='AV']
    const FirstFrame = page.frameLocator('[src="MultipleFrames.html"]')

    const secondFrame = FirstFrame.frameLocator('[src="SingleFrame.html"]')

    await secondFrame.locator('[type="text"]').fill("Nagesh")

    await page.waitForTimeout(3000)


    // //Outer Frame
    // const outerFrame = page.frameLocator('[src="MultipleFrames.html"]');

    // // Inner Frame
    // const innerFrame = outerFrame.frameLocator('iframe');

    // // Enter text inside inner frame
    // await innerFrame.locator('[type="text"]').fill('Hello Playwright');

});