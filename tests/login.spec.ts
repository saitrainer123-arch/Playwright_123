import { test, expect } from '@playwright/test';
import { LoginPage } from '../Pages/LoginPage';

test('SauceDemo Login Test', async ({ page }) => {

  const loginPage = new LoginPage(page);

  await loginPage.gotoLoginPage();
  await loginPage.Login_ValidData('standard_user', 'secret_sauce');
  await loginPage.Login_InnValidData('sai'," 566655")

  await expect(page).toHaveURL(/inventory/);

});