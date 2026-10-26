import { test, expect } from '@playwright/test';

test('Verify less than 10 numbers', async ({ page }) => {

    await page.goto("https://www.facebook.com/");

    await page.getByRole('link', { name: 'Create new account' }).click();

    await page
        .getByRole('textbox', { name: 'Mobile number or email address' })
        .fill("99455145");

    await page.getByRole('button', { name: 'Submit' }).click();

    // Verify error message text
    await expect(
        page.getByText("Please enter a valid mobile number or email address.")
    ).toHaveText("Please enter a valid mobile number or email ad");

});