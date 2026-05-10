import { test, expect } from '@playwright/test'

test('Assertions', async ({ page }) => {

    // Step 1: Launch page
    await page.goto('https://testautomationpractice.blogspot.com/');

    const namefield_ = page.locator("#name");

    await namefield_.fill("Vijay");

    await expect(namefield_).toBeEditable();

    await expect(namefield_).toHaveAttribute('placeholder', 'Enter Name')

    await expect(namefield_).toBeEmpty();

    await expect(namefield_).toHaveValue("Vijay");





    // await expect.soft(namefield_).toHaveAttribute('placeholder', 'Enter Name')

    // await expect(namefield_).toBeEditable()

    // await namefield_.fill("anji")

    // await expect(namefield_).toHaveValue("anji")

    // await expect.soft(namefield_).toBeEmpty()

    await page.waitForTimeout(3000)



})
