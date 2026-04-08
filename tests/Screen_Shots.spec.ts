import { test } from '@playwright/test';

test('Screen Shots', async ({ page }) => {

    await page.goto("https://demo.guru99.com/test/newtours/")


   // 1.Screenshot image and saves in playwright
   await page.screenshot({path:'ranjith.png'})

   await page.locator("//input[@name='submit']").screenshot({path:'submitpic.png'})







   // this will over ridden the file name again 
  // await page.screenshot({ path: 'Screenshot-' + Date.now() + 'myfile.png' })

//     //2.For Full Page Screen Shot
//    // await page.screenshot({ path: 'Screenshot-' + Date.now() + 'myfile.png', fullPage: true })

//     //3.Specific Element for password
//      await page.locator("//input[@name='password']").screenshot({ path: 'Screenshot-' + Date.now() + 'Specific_Element.png'})

    await page.waitForTimeout(2000)
}) 