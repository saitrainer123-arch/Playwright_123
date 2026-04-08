import { test } from '@playwright/test'

test('Date picker', async ({ page }) => {

    // I want to open the test automation practice website
    await page.goto("https://testautomationpractice.blogspot.com/");


    // locate the calendar (date picker) input field
    const calender = page.locator('#datepicker');


    await calender.scrollIntoViewIfNeeded()

    //  enter the date into the calendar input field
    await calender.fill("07-07-2022");

    await page.waitForTimeout(3000);


})