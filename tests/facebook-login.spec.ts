import { test, expect } from '@playwright/test';

const FACEBOOK_URL = 'https://www.facebook.com/';
const FACEBOOK_EMAIL = process.env.FB_EMAIL ?? process.env.FB_TEST_EMAIL;
const FACEBOOK_PASSWORD = process.env.FB_PASSWORD ?? process.env.FB_TEST_PASSWORD;

test.describe('Facebook login flow', () => {
  test('Login with valid credentials', async ({ page }) => {
    if (!FACEBOOK_EMAIL || !FACEBOOK_PASSWORD) {
      throw new Error('Set FB_EMAIL/FB_PASSWORD or FB_TEST_EMAIL/FB_TEST_PASSWORD before running this test.');
    }

    await page.goto(FACEBOOK_URL, { waitUntil: 'networkidle' });

    const cookieButton = page.locator('button:has-text("Allow all cookies"), button:has-text("Accept All"), button:has-text("Accept Cookies")');
    if (await cookieButton.count()) {
      await cookieButton.first().click();
    }

    const emailField = page.locator('#email');
    const passwordField = page.locator('#pass');
    const loginButton = page.locator('button[name="login"]');

    await expect(emailField).toBeVisible({ timeout: 15000 });
    await expect(passwordField).toBeVisible({ timeout: 15000 });
    await expect(loginButton).toBeVisible({ timeout: 15000 });

    await emailField.fill(FACEBOOK_EMAIL);
    await passwordField.fill(FACEBOOK_PASSWORD);
    await loginButton.click();

    const feedReady = page.locator('text=Home, text=Create post, text=Search Facebook');
    await expect(feedReady.first()).toBeVisible({ timeout: 30000 });
  });
});
