import { test, chromium } from '@playwright/test';

test('Navigate back and forward example', async ({page}) => {

    // 1️⃣ Open Facebook
    await page.goto('https://www.facebook.com');
    await page.waitForTimeout(3000);

    // 2️⃣ Navigate to Amazon
    await page.goto('https://www.amazon.in');
    await page.waitForTimeout(3000);

    // 3️⃣ Navigate BACK (Amazon → Facebook)-------goBack();
    await page.goBack()
    await page.waitForTimeout(3000);

    // 4️⃣ Navigate FORWARD (Facebook → Amazon)-----goforword
    await page.goForward();
    await page.waitForTimeout(3000);

   
});