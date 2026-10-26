import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {

  await page.goto('https://www.facebook.com/');

  await page.getByRole('textbox', { name: 'Email address or mobile number' }).fill('Rehmath@gmail.com');
  
  await page.getByRole('textbox', { name: 'Password' }).fill('4596566');

  await page.getByRole('button', { name: 'Log in' }).click();
});