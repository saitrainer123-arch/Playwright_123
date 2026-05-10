import { test, expect } from '@playwright/test'

test('Assertions', async ({ page }) => {

    // Step 1: Launch Facebook login page
    await page.goto('https://www.facebook.com/');

    // Locator for email / phone input field
    const emailField = page.locator('#email');
 
    // Assertion 1: Email field should be visible
    await expect(emailField).toBeVisible();


    // Assertion 2: Email field should be enabled
    await expect(emailField).toBeEnabled();

    await page.waitForTimeout(3000)

    // Assertion 3: Email field should have correct placeholder text
    // Soft Assertion (test will continue even if it fails)
    await expect.soft(emailField).toHaveAttribute(
        'placeholder',
        'Email address or phone'
    );

    // Step 2: Enter email value
    const testEmail = 'sravan@gmail.com';
    await emailField.fill(testEmail);
   
    //This is for pause
    await page.pause();

    // Assertion 4: Verify entered value in email field
    await expect(emailField).toHaveValue(testEmail);

    await page.waitForTimeout(3000)

});


