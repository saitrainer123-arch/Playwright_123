import { test, expect } from '@playwright/test';



test('OpenBrowser', async ({ page }) => {

    await page.goto('https://www.saucedemo.com')

    //ID
    //  await page.locator("#user-name").fill("standard_user")

    //Xpath :- //tagname[@Attributename='Attributevalue']
    //  await page.locator("//input[@data-test='username']").fill("prabhas")

    //css selector  :- tagname[Attributename='Attributevalue']
    //  await page.locator("input[data-test='username']").fill("AA")

    //Playwright Built in loacters:-
  //  await page.getByPlaceholder("Username").fill("Ramcharn").

    


    // await page.locator("#password").fill("secret_sauce")

    // await page.locator("#login-button").click()


    await page.waitForTimeout(3000)


}); 