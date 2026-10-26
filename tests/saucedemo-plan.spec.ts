import { test, expect } from '@playwright/test';

const login = async (page: any, username: string, password: string) => {
  // 1. Open https://www.saucedemo.com/
  await page.goto('https://www.saucedemo.com/');

  // 2. Enter username and password
  await page.getByPlaceholder('Username').fill(username);
  await page.getByPlaceholder('Password').fill(password);

  // 3. Click Login
  await page.getByRole('button', { name: 'Login' }).click();
};

test.describe('Sauce Demo Test Plan', () => {
  test('Login with valid credentials', async ({ page }) => {
    // 1. Open https://www.saucedemo.com/
    await page.goto('https://www.saucedemo.com/');

    // 2. Verify the login page displays username and password fields and the Login button.
    await expect(page.getByPlaceholder('Username')).toBeVisible();
    await expect(page.getByPlaceholder('Password')).toBeVisible();
    await expect(page.getByRole('button', { name: 'Login' })).toBeVisible();

    // 3. Enter standard_user into Username.
    // 4. Enter secret_sauce into Password.
    await page.getByPlaceholder('Username').fill('standard_user');
    await page.getByPlaceholder('Password').fill('secret_sauce');

    // 5. Click Login.
    await page.getByRole('button', { name: 'Login' }).click();

    // Expected: User is redirected to the inventory page.
    await expect(page).toHaveURL(/\/inventory\.html$/);
    await expect(page.getByRole('heading', { name: 'Products' })).toBeVisible();

    // Expected: Each item shows a name, description, price, and Add to cart button.
    const items = page.locator('.inventory_item');
    await expect(items).toHaveCount(6);
    await expect(items.first().locator('.inventory_item_name')).toBeVisible();
    await expect(items.first().locator('.inventory_item_desc')).toBeVisible();
    await expect(items.first().locator('.inventory_item_price')).toBeVisible();
    await expect(items.first().getByRole('button', { name: /add to cart/i })).toBeVisible();
  });

  test('Login failure with invalid credentials', async ({ page }) => {
    // 1. Open https://www.saucedemo.com/
    await page.goto('https://www.saucedemo.com/');

    // 2. Enter an invalid username or password pair.
    await page.getByPlaceholder('Username').fill('standard_user');
    await page.getByPlaceholder('Password').fill('wrong_password');

    // 3. Click Login.
    await page.getByRole('button', { name: 'Login' }).click();

    // Expected: Login fails and an error message is displayed.
    await expect(page.locator('[data-test="error"]')).toContainText(/username and password do not match|error/i);
    await expect(page).toHaveURL(/https:\/\/www\.saucedemo\.com\/?$/);
  });

  test('Locked-out user login behavior', async ({ page }) => {
    // 1. Open https://www.saucedemo.com/
    await page.goto('https://www.saucedemo.com/');

    // 2. Enter locked_out_user into Username.
    // 3. Enter secret_sauce into Password.
    await page.getByPlaceholder('Username').fill('locked_out_user');
    await page.getByPlaceholder('Password').fill('secret_sauce');

    // 4. Click Login.
    await page.getByRole('button', { name: 'Login' }).click();

    // Expected: Login fails and a locked-out user message is shown.
    await expect(page.locator('[data-test="error"]')).toContainText(/locked out/i);
    await expect(page).toHaveURL(/https:\/\/www\.saucedemo\.com\/?$/);
  });

  test('Add and remove products from cart', async ({ page }) => {
    // 1. Log in with standard_user / secret_sauce.
    await login(page, 'standard_user', 'secret_sauce');

    // 2. Add at least two products to the cart.
    const addButtons = page.getByRole('button', { name: /add to cart/i });
    await addButtons.nth(0).click();
    await addButtons.nth(1).click();

    // 3. Verify the cart badge count updates correctly.
    await expect(page.locator('.shopping_cart_badge')).toHaveText('2');

    // 4. Open the cart page.
    await page.locator('.shopping_cart_link').click();
    await expect(page).toHaveURL(/\/cart\.html$/);

    // 5. Confirm the selected products appear in the cart with name, description, price, and quantity.
    const cartItems = page.locator('.cart_item');
    await expect(cartItems).toHaveCount(2);
    await expect(cartItems.first().locator('.inventory_item_name')).toBeVisible();
    await expect(cartItems.first().locator('.inventory_item_desc')).toBeVisible();
    await expect(cartItems.first().locator('.inventory_item_price')).toBeVisible();
    await expect(cartItems.first().locator('.cart_quantity')).toBeVisible();

    // 6. Remove one product from the cart.
    await cartItems.first().getByRole('button', { name: 'Remove' }).click();

    // Expected: Cart contents update immediately and the badge decrements.
    await expect(page.locator('.shopping_cart_badge')).toHaveText('1');
    await expect(page.locator('.cart_item')).toHaveCount(1);
  });

  test('Complete checkout successfully', async ({ page }) => {
    // 1. Log in with standard_user / secret_sauce.
    await login(page, 'standard_user', 'secret_sauce');

    // 2. Add one or more products to the cart.
    await page.getByRole('button', { name: /add to cart/i }).first().click();

    // 3. Open the cart and click Checkout.
    await page.locator('.shopping_cart_link').click();
    await page.getByRole('button', { name: 'Checkout' }).click();

    // 4. Enter FirstName, LastName, and 12345 as Postal Code.
    await page.getByPlaceholder('First Name').fill('FirstName');
    await page.getByPlaceholder('Last Name').fill('LastName');
    await page.getByPlaceholder('Zip/Postal Code').fill('12345');

    // 5. Click Continue.
    await page.getByRole('button', { name: 'Continue' }).click();

    // 6. Review the order overview and click Finish.
    await expect(page).toHaveURL(/\/checkout-step-two\.html$/);
    await page.getByRole('button', { name: 'Finish' }).click();

    // Expected: Checkout completes and a confirmation page is displayed.
    await expect(page).toHaveURL(/\/checkout-complete\.html$/);
    await expect(page.getByText('Thank you for your order!')).toBeVisible();
  });

  test('Checkout validation and cancel behavior', async ({ page }) => {
    // 1. Log in with standard_user / secret_sauce.
    await login(page, 'standard_user', 'secret_sauce');

    // 2. Add a product to the cart.
    await page.getByRole('button', { name: /add to cart/i }).first().click();

    // 3. Open the cart and click Checkout.
    await page.locator('.shopping_cart_link').click();
    await page.getByRole('button', { name: 'Checkout' }).click();

    // 4. Leave one or more required fields blank.
    // 5. Click Continue.
    await page.getByRole('button', { name: 'Continue' }).click();

    // Expected: A validation error appears.
    await expect(page.locator('[data-test="error"]')).toContainText(/first name|last name|postal code|required/i);

    // 6. Click Cancel on the checkout information page.
    await page.getByRole('button', { name: 'Cancel' }).click();

    // Expected: The user is returned to the cart page.
    await expect(page).toHaveURL(/\/cart\.html$/);
  });

  test('Product sorting and item details navigation', async ({ page }) => {
    // 1. Log in with standard_user / secret_sauce.
    await login(page, 'standard_user', 'secret_sauce');

    // 2. Change the product sort order.
    const sortDropdown = page.locator('[data-test="product-sort-container"]');
    await sortDropdown.selectOption('lohi');

    // 3. Verify products reorder correctly.
    const prices = await page.locator('.inventory_item_price').allTextContents();
    const values = prices.map((value: string) => Number.parseFloat(value.replace('$', '')));
    expect(values).toEqual([...values].sort((a, b) => a - b));

    // 4. Click on a product name to open its details page.
    await page.locator('.inventory_item_name').first().click();

    // 5. Verify the product details page shows name, description, price, and Add to cart/Back buttons.
    await expect(page).toHaveURL(/\/inventory-item\.html/);
    await expect(page.locator('.inventory_details_name')).toBeVisible();
    await expect(page.locator('.inventory_details_desc')).toBeVisible();
    await expect(page.locator('.inventory_details_price')).toBeVisible();
    await expect(page.getByRole('button', { name: /add to cart/i })).toBeVisible();

    // 6. Click Back to return to the inventory.
    await page.getByRole('button', { name: 'Back to products' }).click();
    await expect(page).toHaveURL(/\/inventory\.html$/);
  });

  test('Logout clears session and returns to login', async ({ page }) => {
    // 1. Log in with standard_user / secret_sauce.
    await login(page, 'standard_user', 'secret_sauce');

    // 2. Open the menu and click Logout.
    await page.getByRole('button', { name: /open menu/i }).click();
    await page.getByRole('link', { name: 'Logout' }).click();

    // Expected: User is redirected to the login page.
    await expect(page).toHaveURL(/https:\/\/www\.saucedemo\.com\/?$/);

    // 3. Attempt to navigate back to the inventory page.
    await page.goto('https://www.saucedemo.com/inventory.html');

    // Expected: The application blocks access without re-authentication.
    await expect(page).toHaveURL(/https:\/\/www\.saucedemo\.com\/?$/);
  });
});
