import { test, expect } from '@playwright/test';
//      className             folder/file
import { LoginPage } from '../Pages/LoginPage';
import { HomePage } from '../Pages/HomePage'

test('Verify Backpack_Button', async ({ page }) => {

    //object 
    const loginPage = new LoginPage(page);
    const homepage = new HomePage(page);
    await loginPage.gotoLoginPage();
    await loginPage.Login_Functionality('standard_user', 'secret_sauce')
    await page.waitForTimeout(3000)
    await homepage.Verify_BackPack_Botton()
    await page.waitForTimeout(3000)

})