import { test, expect } from '@playwright/test';

test('Frames demo from demo.automationtesting.in', async ({ page }) => {

  // 1️⃣ Navigate to the application
  await page.goto('https://demo.automationtesting.in/Frames.html');


  //await page.frameLocator("#singleframe").locator('[type="text"]').fill("Govind")

  const if1 = page.frameLocator("#singleframe")
  await if1.locator('[type="text"]').fill("Nagesh")



  await page.waitForTimeout(4000)












  // await page.getByText("Single Iframe ").click()

  // //for Iframe we have to use frameLocator() 
  // //await page.frameLocator("#singleframe").locator("[type='text']").fill("Rajesh")


  // const if_ = page.frameLocator("#singleframe")

  // await if_.locator("[type='text']").fill("Govind")


  // await page.waitForTimeout(7000)













  //  await page.getByText("Single Iframe ").click()


  //  await page.frameLocator("#singleframe").locator('[type="text"]').fill("Ram")


  //  //await page.frameLocator("#singleframe").locator("input[type='text']").fill("Madhavrao")





  //   // // Click on "Single Iframe" tab
  //   // await page.getByText('Single Iframe').click();

  //   // await page.frameLocator("#singleframe").locator("input[type='text']").fill("sai")


  //   await page.waitForTimeout(3000)

  //   // // Locate the single iframe  -----find iframe tag in html tree
  //   // const singleFrame = page.frameLocator("#singleframe");


  //   // // // Type text inside single iframe
  //   // await page.locator("input[type='text']").click()
  //   // await page.locator("input[type='text']").fill("sai")



})