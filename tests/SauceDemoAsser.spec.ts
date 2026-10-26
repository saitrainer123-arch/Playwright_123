
import { test, expect } from '@playwright/test';

test('Valid Login', async ({ page }) => {

    await page.goto('https://www.saucedemo.com/');

    await page.getByRole('textbox',{name:'Username'}).fill("standard_user")

    await page.getByRole('textbox',{name:'Password'}).fill("secret_sauce")

    await page.getByRole('button',{name:'Login'}).click()

    await page.waitForTimeout(3000)

    await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html")












    // // Valid login assertions
    // await expect(page).toHaveURL(
    //     'https://www.saucedemo.com/inventory.html'
    // );

    // await expect(page.locator('.title')).toHaveText('Products');

});
