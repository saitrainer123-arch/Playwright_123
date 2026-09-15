import { test, expect } from '@playwright/test';

test('Select Subject English', async ({ page }) => {

  // Open DemoQA form
  await page.goto('https://demoqa.com/automation-practice-form');


  const subject_ = page.locator("#subjectsInput")

  await subject_.fill("Eng")

  await page.waitForTimeout(3000)

  await page.keyboard.press("Enter")

  await page.waitForTimeout(2000)

  await page.keyboard.press("Tab")

  await page.waitForTimeout(2000)

  await page.keyboard.press("Tab")











  // const slp = page.locator("#subjectsInput")

  // await slp.fill("eng")

  // await page.keyboard.press("Enter")

  // await page.waitForTimeout(4000)

  // await page.keyboard.press('Tab')

})





// const sub_ = await page.locator("#subjectsInput")

// await sub_.fill("eng")

// //keyboard
// await page.keyboard.press('Enter')

// await sub_.fill("p")
// await page.keyboard.press('Enter')



// const sub = page.locator('#subjectsInput');

// await sub.fill('p');

// await page.keyboard.press('Enter')




//  await sub.fill('English');

//  await page.waitForTimeout(3000)
//  await page.keyboard.press("Enter")


// await sub.fill("Chemistry")
// await page.keyboard.press("Enter")

// await sub.fill("Civics")
// await page.keyboard.press("Enter")


//   await page.waitForTimeout(5000)

// })