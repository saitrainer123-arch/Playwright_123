import { test, expect } from '@playwright/test';

test('Select Subject English', async ({ page }) => {

  // Open DemoQA form
  await page.goto('https://demoqa.com/automation-practice-form');

  const sub = await page.locator('#subjectsInput');

  await sub.scrollIntoViewIfNeeded();

   await sub.fill('English');
   await page.waitForTimeout(3000)
   await page.keyboard.press("Enter")


  // await sub.fill("Chemistry")
  // await page.keyboard.press("Enter")

  // await sub.fill("Civics")
  // await page.keyboard.press("Enter")


  await page.waitForTimeout(5000)

})