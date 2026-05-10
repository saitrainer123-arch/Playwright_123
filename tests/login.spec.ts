import { test, expect } from '@playwright/test';
//      className             folder/file
import { LoginPage } from '../Pages/LoginPage';

test('Valid Login Test', async ({ page }) => {

  //object 
  const loginPage = new LoginPage(page);

  await loginPage.gotoLoginPage();
  await loginPage.Login_Functionality('standard_user', 'secret_sauce');
  await page.waitForTimeout(3000)

  //you can write like this but you should not write like this in real time --(getByAltText)
  //await page.locator("[alt='Sauce Labs Backpack']").click()


});

test('Invalid Login Test', async ({ page }) => {
  //object
  const loginPage = new LoginPage(page);

  //open url
  await loginPage.gotoLoginPage();
  //entering invaild data
  await loginPage.Login_Functionality('anji', '5516646');
  await page.waitForTimeout(3000)

  // Assertion ---no need to give like this errormessage() 
  // await expect(loginPage.errormessage).toBeVisible()
});
test('Valid username invalid password', async ({ page }) => {

  //object 
  const loginPage = new LoginPage(page);

  await loginPage.gotoLoginPage();
  await loginPage.Login_Functionality('standard_user', '132565666');
  await page.waitForTimeout(3000)

})
test('InnValid username valid password', async ({ page }) => {

  //object 
  const loginPage = new LoginPage(page);

  await loginPage.gotoLoginPage();
  await loginPage.Login_Functionality('s66666+', '132565666');
  await page.waitForTimeout(3000)

})
