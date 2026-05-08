import { test, expect } from '@playwright/test';

test('SauceDemo Login Test', async ({ page }) => {

  // Open SauceDemo website
  await page.goto('https://www.saucedemo.com/');

  // Enter Username
  await page.locator('//input[@id="user-name"]').fill('standard_user');
  await page.waitForTimeout(3000);
  // Enter Password
  await page.locator('//input[@id="password"]').fill('secret_sauce');
  await page.waitForTimeout(3000);

 // await page.pause()

  // Click Login button
  await page.locator('//input[@id="login-button"]').click();
  await page.waitForTimeout(3000);
  
  // Wait to see result
  await page.waitForTimeout(3000);

});