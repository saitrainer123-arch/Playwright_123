import { expect, test } from '@playwright/test';

const baseUrl = 'https://www.saucedemo.com/';
const username = 'standard_user';
const password = 'secret_sauce';

async function login(page: Parameters<typeof test>[0]['page']) {
	await page.goto(baseUrl);
	await page.getByPlaceholder('Username').fill(username);
	await page.getByPlaceholder('Password').fill(password);
	await page.getByRole('button', { name: 'Login' }).click();
	await expect(page).toHaveURL(/inventory\.html/);
}

test.describe('SauceDemo storefront', () => {
	test('displays the login form', async ({ page }) => {
		await page.goto(baseUrl);
		await expect(page).toHaveTitle('Swag Labs');
		await expect(page.getByPlaceholder('Username')).toBeVisible();
		await expect(page.getByPlaceholder('Password')).toBeVisible();
		await expect(page.getByRole('button', { name: 'Login' })).toBeEnabled();
	});

	test('rejects invalid credentials', async ({ page }) => {
		await page.goto(baseUrl);
		await page.getByPlaceholder('Username').fill('invalid_user');
		await page.getByPlaceholder('Password').fill('wrong_password');
		await page.getByRole('button', { name: 'Login' }).click();
		await expect(page).toHaveURL(baseUrl);
		await expect(page.getByText('Epic sadface: Username and password do not match any user in this service')).toBeVisible();
	});

	test('rejects a locked-out user', async ({ page }) => {
		await page.goto(baseUrl);
		await page.getByPlaceholder('Username').fill('locked_out_user');
		await page.getByPlaceholder('Password').fill(password);
		await page.getByRole('button', { name: 'Login' }).click();
		await expect(page.getByText('Epic sadface: Sorry, this user has been locked out.')).toBeVisible();
		await expect(page).toHaveURL(baseUrl);
	});

	test('adds and removes products from the cart', async ({ page }) => {
		await login(page);
		await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
		await page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
		await expect(page.locator('.shopping_cart_badge')).toHaveText('2');
		await page.locator('[data-test="shopping-cart-link"]').click();
		await expect(page).toHaveURL(/cart\.html/);
		await expect(page.getByText('Sauce Labs Backpack')).toBeVisible();
		await expect(page.getByText('Sauce Labs Bike Light')).toBeVisible();
		await page.getByRole('button', { name: 'Remove Sauce Labs Backpack' }).click();
		await expect(page.getByText('Sauce Labs Backpack')).toHaveCount(0);
		await expect(page.locator('.shopping_cart_badge')).toHaveText('1');
	});

	test('completes checkout successfully', async ({ page }) => {
		await login(page);
		await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
		await page.locator('[data-test="shopping-cart-link"]').click();
		await page.getByRole('button', { name: 'Checkout' }).click();
		await page.getByPlaceholder('First Name').fill('Test');
		await page.getByPlaceholder('Last Name').fill('User');
		await page.getByPlaceholder('Zip/Postal Code').fill('12345');
		await page.getByRole('button', { name: 'Continue' }).click();
		await expect(page).toHaveURL(/checkout-step-two\.html/);
		await expect(page.getByText('Sauce Labs Backpack')).toBeVisible();
		await page.getByRole('button', { name: 'Finish' }).click();
		await expect(page).toHaveURL(/checkout-complete\.html/);
		await expect(page.getByText('Thank you for your order!')).toBeVisible();
	});

	test('validates required checkout information and supports cancel', async ({ page }) => {
		await login(page);
		await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
		await page.locator('[data-test="shopping-cart-link"]').click();
		await page.getByRole('button', { name: 'Checkout' }).click();
		await page.getByRole('button', { name: 'Continue' }).click();
		await expect(page.getByText('Error: First Name is required')).toBeVisible();
		await page.getByRole('button', { name: 'Cancel' }).click();
		await expect(page).toHaveURL(/cart\.html/);
	});

	test('sorts products and opens product details', async ({ page }) => {
		await login(page);
		await page.locator('[data-test="product-sort-container"]').selectOption('lohi');
		await expect(page.locator('.inventory_item').first()).toContainText('Sauce Labs Onesie');
		await page.getByText('Sauce Labs Onesie').click();
		await expect(page).toHaveURL(/inventory-item\.html/);
		await expect(page.getByRole('button', { name: 'Back to products' })).toBeVisible();
		await expect(page.getByText('Sauce Labs Onesie')).toBeVisible();
		await page.getByRole('button', { name: 'Back to products' }).click();
		await expect(page).toHaveURL(/inventory\.html/);
	});

	test('logs out and blocks unauthenticated inventory access', async ({ page }) => {
		await login(page);
		await page.getByRole('button', { name: 'Open Menu' }).click();
		await page.getByRole('link', { name: 'Logout' }).click();
		await expect(page).toHaveURL(baseUrl);
		await page.goto(`${baseUrl}inventory.html`);
		await expect(page).toHaveURL(baseUrl);
		await expect(page.getByPlaceholder('Username')).toBeVisible();
	});
});
