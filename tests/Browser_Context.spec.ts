import { test, expect, Browser, BrowserContext, Page, chromium, firefox } from '@playwright/test';

test('Browser Context', async ({ }) => {

  // STEP 1: Launch the browser (Chromium with Chrome channel)
  // headless: false → browser UI will be visible
  // channel: 'chrome' → opens Google Chrome instead of default Chromium
  const browser: Browser = await chromium.launch({
    headless: false,
    channel: 'chrome'
  });

  // STEP 2: Create a new browser context
  // BrowserContext is like a fresh incognito window
  // No cookies, cache, or session shared
  const browserContext: BrowserContext = await browser.newContext();

  // STEP 3: Open a new page (tab) inside the browser context
  const page: Page = await browserContext.newPage();

  // STEP 4: Navigate to Google homepage
  await page.goto('https://www.google.com/');

  // STEP 5: Validate the page title
  // This is an assertion – test will fail if title is not 'Google'
  await expect(page).toHaveTitle('Google');

  // STEP 6: Wait for 3 seconds (only for demo/learning purpose)
  // NOT recommended in real projects
  await page.waitForTimeout(3000);

  // ------------------------------------------------------------
  // SECOND BROWSER INSTANCE
  // Useful for multi-user, multi-login, or parallel session testing
  // ------------------------------------------------------------

  // STEP 7: Launch another browser instance
  // If you want Firefox, use: firefox.launch()
  const browser1: Browser = await firefox.launch({
    headless: false,
    channel: 'firefox'
  });

  // STEP 8: Create a new independent browser context
  const browserContext1: BrowserContext = await browser1.newContext();

  // STEP 9: Open a new page in second browser
  const page1: Page = await browserContext1.newPage();

  // STEP 10: Navigate to Google again
  await page1.goto('https://www.google.com/');

  // STEP 11: Validate title in second browser
  await expect(page1).toHaveTitle('Google');

  // STEP 12: Pause for observation
  await page1.waitForTimeout(3000);



});
