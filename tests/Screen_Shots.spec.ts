import { test } from '@playwright/test';

test('Screen Shots', async ({ page }) => {

    await page.goto("https://www.saucedemo.com/")


    await page.getByRole('button',{name:"Login"}).screenshot({path:'jockson.png'})

    // await page.getByPlaceholder("").fill("")
    // await page.locator("#").fill("")
    // await page.getByRole('button',{name:""});

    //await page.screenshot({path:'akhil.png'})


   // 1.Screenshot image and saves in playwright
  // await page.screenshot({path:'ranjith.png'})

  //await page.locator("[name='userName']").screenshot({path:'venky1.png'})

   //await page.locator("[name='submit']").screenshot({path:'submitbuttonpic.png'})







   // this will over ridden the file name again 
  // await page.screenshot({ path: 'Screenshot-' + Date.now() + 'myfile.png' })

//     //2.For Full Page Screen Shot
//    // await page.screenshot({ path: 'Screenshot-' + Date.now() + 'myfile.png', fullPage: true })

//     //3.Specific Element for password
//      await page.locator("//input[@name='password']").screenshot({ path: 'Screenshot-' + Date.now() + 'Specific_Element.png'})

    await page.waitForTimeout(2000)
}) 