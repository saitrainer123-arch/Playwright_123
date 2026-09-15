import { test, expect } from '@playwright/test';

test('Dropdown validation', async ({ page }) => {
  //For Maximize the window
  //  await page.setViewportSize({ width: 1920, height: 1080 });

  //await page.setViewportSize({width:1920,height:1080});


  // Step 1: Open application
  await page.goto('https://testautomationpractice.blogspot.com/');

  const cn_ = page.locator("#country");

  await cn_.scrollIntoViewIfNeeded()

  await page.waitForTimeout(4000)

  await cn_.selectOption("India")

  await page.waitForTimeout(4000)

  await cn_.selectOption({ index: 2 })  









  // const cn = page.locator("#country");

  // //For scrolling
  // await cn.scrollIntoViewIfNeeded();

  // //await cn.selectOption("India")

  // await cn.selectOption({ index: 5 })

  // await page.waitForTimeout(3000)













  // const contry = await page.locator("#country")

  // //for scroll
  // await contry.scrollIntoViewIfNeeded()

  // //for dropdown by name
  // // await contry.selectOption("China")

  // //By index
  // await contry.selectOption({ index: 2 })








  // const cn = page.locator("#country")


  // await cn.scrollIntoViewIfNeeded()

  // await cn.selectOption("India")

  // await page.waitForTimeout(3000)






  // const contry_elmt = page.locator('#country');

  // await contry_elmt.scrollIntoViewIfNeeded();

  // await page.waitForTimeout(3000)

  //await contry_elmt.selectOption("Japan")

  //await contry_elmt.selectOption({ index: 3 })




  // this is for scrolldown
  //await contry_elmt.scrollIntoViewIfNeeded();

  // await page.waitForTimeout(3000);

  // await contry_elmt.selectOption("Canada")
  // await contry_elmt.selectOption({ index: 3 })



  //await contry_elmt.selectOption({ index: 2 })
  //await contry_elmt.selectOption("India")


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










