import { test, expect } from '@playwright/test';

test('Verify all product names', async ({ page }) => {

    await page.goto('https://www.saucedemo.com/');

    await page.getByPlaceholder('Username')
        .fill('standard_user');

    await page.getByPlaceholder('Password')
        .fill('secret_sauce');

    await page.getByRole('button', { name: 'Login' })
        .click();

        await page.getByRole('img',{name:"Sauce Labs Bolt T-Shirt"}).click()


    const products = page.locator('.inventory_item_name');

    const count = await products.count();

    for (let i = 0; i < count; i++) {

        const productName = await products.nth(i).textContent();

        console.log(productName);

        await expect(products.nth(i)).toBeVisible();
    }
});