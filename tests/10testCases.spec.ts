import { test, expect } from '@playwright/test';


test('login with validdata', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');

    const un =  page.locator('[data-test="username"]')
    const ps =  page.locator('[data-test="password"]')
    const lg =  page.locator('[data-test="login-button"]')

    await un.fill('standard_user')
    await ps.fill('secret_sauce')
    await lg.click()

    await page.waitForTimeout(3000)

});
test('login with Invalidpassword', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="password"]').fill('366556665');
    await page.locator('[data-test="login-button"]').click();
    await page.waitForTimeout(3000)

});
test('login with BothInvalid', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    await page.locator('[data-test="username"]').fill('786865655');
    await page.locator('[data-test="password"]').fill('6565656565');
    await page.locator('[data-test="login-button"]').click();
    await page.waitForTimeout(3000)

});
test('login with emptydata', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    await page.locator('[data-test="username"]').fill('');
    await page.locator('[data-test="password"]').fill('');
    await page.locator('[data-test="login-button"]').click();
    await page.waitForTimeout(3000)

});