import { test, expect, Browser, BrowserContext, Page, chromium, firefox } from '@playwright/test';

test('Browser Context', async ({ }) => {

  // STEP 1: Launch the browser (Chromium with Chrome channel)
  // headless: false → browser UI will be visible
  // channel: 'chrome' → opens Google Chrome instead of default Chromium
  const browser1: Browser = await chromium.launch({
    headless: false,
    channel: 'chrome'
  });


  // STEP 2: Create a new browser context
  // BrowserContext is like a fresh incognito window
  // No cookies, cache, or session shared
  const browserContext1: BrowserContext = await browser1.newContext();

  // STEP 3: Open a new page (tab) inside the browser context
  const page1: Page = await browserContext1.newPage();

  // STEP 4: Navigate to Google homepage
  await page1.goto('https://www.saucedemo.com/');

  await page1.getByRole('textbox', { name: 'Username' }).fill("standard_user")

  await page1.getByRole('textbox', { name: 'Password' }).fill("secret_sauce")

  await page1.getByRole('button', { name: 'Login' }).click()



  // STEP 6: Wait for 3 seconds (only for demo/learning purpose)
  // NOT recommended in real projects
  await page1.waitForTimeout(3000);

  // ------------------------------------------------------------------------------------------------------------
  // SECOND BROWSER INSTANCE
  // Useful for multi-user, multi-login, or parallel session testing
  // ------------------------------------------------------------

  // STEP 7: Launch another browser instance
  // If you want Firefox, use: firefox.launch()
  const browser2: Browser = await firefox.launch({
    headless: false,
    channel: 'firefox'
  });

  // STEP 8: Create a new independent browser context
  const browserContext2: BrowserContext = await browser2.newContext();

  // STEP 9: Open a new page in second browser
  const page2: Page = await browserContext2.newPage();

  // STEP 10: Navigate to Google again
  await page2.goto('https://www.saucedemo.com/');

  // STEP 11: Validate title in second browser
  //await expect(page1).toHaveTitle('Google');

  // STEP 12: Pause for observation
  await page2.waitForTimeout(5000);


  




});
