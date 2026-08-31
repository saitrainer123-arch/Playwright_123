import { test, expect } from '@playwright/test';

test(' Id Formula', async ({ page }) => {

  await page.goto('https://www.saucedemo.com/');

  await page.locator("#user-name").fill("Basava");

  await page.locator("#password").fill("123456789")

  await page.locator("#login-button").click();

  await page.waitForTimeout(5000);


})
