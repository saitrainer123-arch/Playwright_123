import { test, expect } from '@playwright/test'

test('Assertions', async ({ page }) => {

    // Step 1: Launch Facebook login page
    await page.goto('https://www.facebook.com/');

    const femail = page.getByRole('textbox', { name: "Email address or mobile number" })

    //await expect(loactor).assertion()

    await femail.fill("Praveen")

    await expect.soft(femail).toBeEmpty()

    await expect(femail).toBeEditable()

    await expect(femail).toBeVisible()

    // // await expect(femail).toHaveAttribute('placeholder','Email address or mobile number')



    // await expect(femail).toHaveValue("Praveen")

    // await expect(page).toHaveURL("https://www.facebook./")




    await page.waitForTimeout(3000)













    // // Locator for email / phone input field
    // const emailField = page.locator('#email');

    // // Assertion 1: Email field should be visible
    // await expect(emailField).toBeVisible();


    // // Assertion 2: Email field should be enabled
    // await expect(emailField).toBeEnabled();

    // await page.waitForTimeout(3000)

    // // Assertion 3: Email field should have correct placeholder text
    // // Soft Assertion (test will continue even if it fails)
    // await expect.soft(emailField).toHaveAttribute(
    //     'placeholder',
    //     'Email address or phone'
    // );

    // // Step 2: Enter email value
    // const testEmail = 'sravan@gmail.com';
    // await emailField.fill(testEmail);

    // //This is for pause
    // await page.pause();

    // // Assertion 4: Verify entered value in email field
    // await expect(emailField).toHaveValue(testEmail);



});


