import { test, expect } from '@playwright/test';

test('Dropdown validation', async ({ page }) => {


  //For Maximize the window
  //  await page.setViewportSize({ width: 1920, height: 1080 });

  //await page.setViewportSize({width:1920,height:1080});



  // Step 1: Open application
  await page.goto('https://testautomationpractice.blogspot.com/');

  // // //for scroll down
  const elmt = page.locator('#country');


  // this is for scrolldown
  await elmt.scrollIntoViewIfNeeded();

  await page.waitForTimeout(5000);
  //await elmt.selectOption({ index: 2 })
  await elmt.selectOption("India")


  // await elmt.selectOption({ index: 3 })
  // await page.waitForTimeout(3000);
  // await elmt.selectOption('France')


  //--------------Demo form selecting subject ---------------------------------------------------

  // await page.goto('https://demoqa.com/automation-practice-form');

  // // Scroll to subjects field (important sometimes)
  // await page.locator('#subjectsInput').scrollIntoViewIfNeeded();

  // // Type subject
  // await page.locator('#subjectsInput').fill('English');

  // // Click suggestion from dropdown
  // await page.locator('.subjects-auto-complete__option')
  //           .filter({ hasText: 'English' })
  //           .click();

  await page.waitForTimeout(5000);

});










