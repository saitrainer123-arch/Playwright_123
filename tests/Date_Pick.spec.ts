import { test } from '@playwright/test'

test('Date picker', async ({ page }) => {

    // I want to open the test automation practice website
    await page.goto("https://testautomationpractice.blogspot.com/");


    const dt = page.locator("#datepicker")

    await dt.scrollIntoViewIfNeeded()

    await dt.fill("01/01/2026")

    await page.keyboard.press("Tab")

    await page.waitForTimeout(2000)

    await page.locator("#txtDate").fill("25/02/2026")

    await page.waitForTimeout(4000)



    // const dp = page.locator("#datepicker");

    // await dp.scrollIntoViewIfNeeded()

    // await dp.fill("02-02-2005")

    // await page.keyboard.press("Tab")

    // await page.waitForTimeout(2000)

    // await page.keyboard.press("Tab")

    // await page.waitForTimeout(2000)

    // await page.keyboard.press("Tab")





    // //is scroll to that date element
    // await page.locator("#datepicker").scrollIntoViewIfNeeded();


    // await page.locator("#datepicker").fill("01-01-2000")



    // // locate the calendar (date picker) input field
    // const calender = page.locator('#datepicker');

    // await calender.scrollIntoViewIfNeeded()

    // await calender.fill("05-05-2023")

    // // //  enter the date into the calendar input field
    // // await calender.fill("07-07-2022");

    await page.waitForTimeout(5000);


})