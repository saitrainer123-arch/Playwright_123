import { test, expect } from '@playwright/test';

test.describe('SauceDemo Login', () => {
  test('Valid User Can Log In', async ({ page }) => {
    // 1. Navigate to the SauceDemo login page.
    await page.goto('https://www.saucedemo.com/');

    // 2. Verify the username, password, and Login controls are visible.
    await expect(page.locator('[data-test="username"]')).toBeVisible();
    await expect(page.locator('[data-test="password"]')).toBeVisible();
    await expect(page.locator('[data-test="login-button"]')).toBeVisible();

    // 3. Enter the standard SauceDemo username.
    await page.locator('[data-test="username"]').fill('standard_user');

    // 4. Enter the standard SauceDemo password.
    await page.locator('[data-test="password"]').fill('secret_sauce');

    // 5. Click Login to authenticate with the standard user credentials.
    await page.locator('[data-test="login-button"]').click();

    // 6. Verify the Products heading is visible after successful login.
    await expect(page.locator('[data-test="title"]')).toBeVisible();
  });

  test('Locked Out User Cannot Log In', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');

  await expect(page.locator('[data-test="username"]')).toBeVisible();
  await expect(page.locator('[data-test="password"]')).toBeVisible();
  await expect(page.locator('[data-test="login-button"]')).toBeVisible();

  await page.locator('[data-test="username"]').fill('locked_out_user');
  await page.locator('[data-test="password"]').fill('secret_sauce');

  await page.locator('[data-test="login-button"]').click();

  await expect(page.locator('[data-test="error"]')).toContainText(
    'Epic sadface: Sorry, this user has been locked out.'
  );
});
test('Invalid Credentials Show Error', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');

  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').fill('wrong_password');

  await page.locator('[data-test="login-button"]').click();

  await expect(page.locator('[data-test="error"]')).toContainText(
    'Epic sadface: Username and password do not match any user in this service'
  );
});
test('Empty username shows required error', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');

  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();

  await expect(page.locator('[data-test="error"]')).toContainText(
    'Epic sadface: Username is required'
  );
});

test('Empty password shows required error', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');

  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="login-button"]').click();

  await expect(page.locator('[data-test="error"]')).toContainText(
    'Epic sadface: Password is required'
  );
});

test('Invalid credentials show error', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');

  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').fill('wrong_password');
  await page.locator('[data-test="login-button"]').click();

  await expect(page.locator('[data-test="error"]')).toContainText(
    'Epic sadface: Username and password do not match any user in this service'
  );
});

test('Locked out user cannot log in', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');

  await page.locator('[data-test="username"]').fill('locked_out_user');
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();

  await expect(page.locator('[data-test="error"]')).toContainText(
    'Epic sadface: Sorry, this user has been locked out.'
  );
});
});
