import { test, expect } from '@playwright/test';

test('Click every button on the inventory page', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');

  // Login
  await page.getByPlaceholder('Username').fill('standard_user');
  await page.getByPlaceholder('Password').fill('secret_sauce');
  await page.getByRole('button', { name: 'Login' }).click();


  await page.getByRole('button',{name:'Add to cart'}).first().click()

  await page.getByRole('button',{name:'Add to cart'}).first().click()

  await page.waitForTimeout(3000)

  await page.getByRole('button',{name:'Add to cart'}).nth(2).click()

})


// test('Click all Add to cart buttons', async ({ page }) => {
//     await page.goto('https://www.saucedemo.com/');

//     // Login
//     await page.getByPlaceholder('Username').fill('standard_user');
//     await page.getByPlaceholder('Password').fill('secret_sauce');
//     await page.getByRole('button', { name: 'Login' }).click();

//     // Locate all Add to cart buttons
//     const buttons = page.getByRole('button', { name: 'Add to cart' });

//     const count = await buttons.count();
//     console.log('Total Add to cart buttons:', count);

//     // Click every Add to cart button
//     for (let i = 0; i < count; i++) {
//         await buttons.nth(0).click();
//     }

//     // Verify all six products are added
//     await expect(page.locator('.shopping_cart_badge')).toHaveText('6');
// });