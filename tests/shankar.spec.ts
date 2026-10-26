import { test, expect } from '@playwright/test';


test('Login Funtionality', async ({ page }) => {

  await page.goto("https://www.saucedemo.com/")

  //By --Id  ----("# id Value")
  // await page.locator("#user-name").fill("standard_user")


  //By -- Css  --[AN='Av'] --or-- tagname[AN='Av']
  //await page.locator("[placeholder='Username']").fill("Prabhas")
  await page.locator("[data-test='username']").fill("AA")
  






  //By -- Css  --[AN='Av'] ---- tagname[AN='Av']
  //await page.locator("[placeholder='Username']").fill("Saikumar")
  // await page.locator("input[id='user-name']").fill("Naveen")

  //By ---Xpath --//tagname[@AN='Av']
  //await page.locator("//input[@id='user-name']").fill("Shankar")

  // By text---- //tagname[text()='textvalue']
  //await page.locator("//label[text()='Email address or mobile number']").fill("naveen@gmail.com")

  //Builtin-
  await page.getByText("Email address or mobile number").fill("shankar@gmail.com")




  await page.waitForTimeout(5000)

})


