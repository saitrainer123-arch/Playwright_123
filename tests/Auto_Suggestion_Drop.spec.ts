import { test } from '@playwright/test';

test('RedBus auto suggest - with loop', async ({ page }) => {

  await page.goto('https://www.redbus.in/');

  await page.locator("//input[@id='srcinput']").click();
  await page.locator("//input[@id='srcinput']").fill('mumbai');

  await page.waitForTimeout(2000);

  const options = page.locator("li[role='option']");

  const count = await options.count();

  for (let i = 0; i < count; i++) {
    const text = await options.nth(i).textContent();

    if (text?.includes('Mumbai')) {
      await options.nth(i).click();
      break;
    }
  }
});