import { test, expect } from '@playwright/test';

test('Multi dropdown select values', async ({ page }) => {

  // Step 1: Open application
  await page.goto('https://testautomationpractice.blogspot.com/');

  const clr = page.locator("#colors")

  await clr.scrollIntoViewIfNeeded()

  await clr.selectOption(['Red','Green','Blue'])

  await page.waitForTimeout(5000)










  // // //for scroll down
  //   const elmt = page.locator('#country');
  //   await elmt.scrollIntoViewIfNeeded();

  // // Step 2: Select multiple values
  // await page.locator('#colors').selectOption(['Red','Blue'])

  // Just for demo
  await page.waitForTimeout(2000);

});
