import { test, expect } from '@playwright/test';

test('Facebook login using env vars', async ({ page }) => {
  const email = process.env.FB_EMAIL;
  const password = process.env.FB_PASSWORD;
  if (!email || !password) throw new Error('Set FB_EMAIL and FB_PASSWORD environment variables before running the test.');

  await page.goto('https://www.facebook.com/');
  await page.fill('#email', email);
  await page.fill('#pass', password);
  await Promise.all([
    page.waitForNavigation({ waitUntil: 'networkidle' }),
    page.click('button[name="login"]'),
  ]);

  await expect(page).toHaveURL(/facebook\.com/);
});
