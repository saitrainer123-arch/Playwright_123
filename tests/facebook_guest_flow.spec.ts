import { test, expect } from '@playwright/test';

test('Facebook guest user can view landing page and access sign-up', async ({ page }) => {
  await page.goto('https://www.facebook.com/', { waitUntil: 'domcontentloaded' });

  await expect(page).toHaveTitle(/Facebook/);

  const emailInput = page.locator('input[name="email"], input#email').first();
  const passwordInput = page.locator('input[name="pass"], input#pass').first();
  const loginButton = page.locator('button[name="login"], input[name="login"]').first();
  const createAccountLink = page.getByRole('link', { name: /create new account/i }).first();

  await expect(emailInput).toBeVisible();
  await expect(passwordInput).toBeVisible();
  await expect(loginButton).toBeVisible();
  await expect(createAccountLink).toBeVisible();

  await createAccountLink.click();

  await expect(page.locator('text=Sign Up').first()).toBeVisible({ timeout: 10000 });
});
