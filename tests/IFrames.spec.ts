import { test, expect } from '@playwright/test';

test('Frames demo from demo.automationtesting.in', async ({ page }) => {

  // 1️⃣ Navigate to the application
  await page.goto('https://demo.automationtesting.in/Frames.html');

  // =================================================
  // ✅ SINGLE IFRAME
  // =================================================

  // Click on "Single Iframe" tab
  //await page.locator("//a[text()='Single Iframe ']").click();

   await page.getByText("Single Iframe ").click()


  // Locate the single iframe  -----find iframe tag in html tree
  /const singleFrame = page.frameLocator("#singleframe");

    

  // // Type text inside single iframe
   await page.locator("input[type='text']").click()
   await page.locator("input[type='text']").fill("sai")



})