import { test, expect } from '@playwright/test';

test.describe('WhatsApp headless automation', () => {
  test('placeholder smoke test', async ({ page }) => {
    await page.goto('https://example.com');
    await expect(page).toHaveTitle(/Example/);
  });
});
