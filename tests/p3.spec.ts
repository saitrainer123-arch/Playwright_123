import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.facebook.com/');
  await page.getByRole('textbox', { name: 'Email address or mobile number' }).click();
  await page.getByRole('textbox', { name: 'Email address or mobile number' }).fill('nikhil@gmail.com');
  await page.getByRole('textbox', { name: 'Email address or mobile number' }).press('Tab');
  await page.getByRole('textbox', { name: 'Password' }).fill('123456789');
  await page.getByRole('button', { name: 'Log in' }).click();
});