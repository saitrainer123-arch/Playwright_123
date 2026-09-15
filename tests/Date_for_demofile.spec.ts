import { test, expect } from '@playwright/test';

test('Select Date', async ({ page }) => {

  await page.goto('https://demoqa.com/automation-practice-form');

  await page.locator("#dateOfBirthInput").fill("01 Feb 2026")

  await page.waitForTimeout(3000)

  await page.keyboard.press("Tab")






  // await page.locator("#dateOfBirthInput").fill("05 feb 2025")

  // //await page.locator("#dateOfBirthInput").fill("01 Jan 2026")

  // // await page.keyboard.press('Enter')

  // await page.keyboard.press('Tab')


  // await page.waitForTimeout(5000)
  


  // Fill date directly
  // await page.locator('#dateOfBirthInput').fill('08 Apr 1998');

});