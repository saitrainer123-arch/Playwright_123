import { test, expect } from '@playwright/test';

test('1username', async ({ page }) => {
  await page.goto('https://www.facebook.com/');
  
  await page.getByPlaceholder("Username").fill("Saikumar")

  await page.getByText("Email address or mobile number").fill("sai@gmail.com")


  await page.waitForTimeout(3000)
});



