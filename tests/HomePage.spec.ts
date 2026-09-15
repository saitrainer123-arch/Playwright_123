import { test, expect } from '@playwright/test';
//      className             folder/file
import { LoginPage } from '../Pages/LoginPageFile'
import { HomePage } from '../Pages/HomePage';

test('Verify Backpack_Button', async ({ page }) => {

    const lg = new LoginPage();
    const hg = new HomePage();

    await lg.VerifyUsername("standard_user", "secret_sauce")
    await page.waitForTimeout(3000)
    await hg.Veriefy_SauceLabsBackpack_Button()
    await page.waitForTimeout(3000)


})

test('Verify Sauce_Labs_Bolt', async ({ page }) => {

    const lg = new LoginPage();
    const hg = new HomePage();

    await lg.VerifyUsername("standard_user", "secret_sauce")
    await page.waitForTimeout(3000)
    await hg.Veriefy_Sauce_Labs_Bolt_Button()



})