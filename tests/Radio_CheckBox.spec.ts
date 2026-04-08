import { test, expect } from '@playwright/test';

test('Radio button and Checkbox example', async ({ page }) => {

    // the test automation practice website
    await page.goto("https://testautomationpractice.blogspot.com/");

    //this is for click the male button
   //  await page.getByLabel('Male', { exact: true }).click()

    // // select the Days checkboxs (first checkbox)
    const mailCheckbox = page.locator("//input[@type='checkbox']").first(); //nth(1),nth(2)
    await mailCheckbox.check();
    await page.waitForTimeout(2000);

    // verify the checkbox is checked
    await expect(mailCheckbox).toBeChecked();
    await page.waitForTimeout(2000);

    // // uncheck the Mail checkbox
    await mailCheckbox.uncheck();
    await page.waitForTimeout(2000);

    //verify the checkbox is unchecked
   await expect(mailCheckbox).not.toBeChecked();
});