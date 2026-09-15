import { test, chromium } from '@playwright/test';

test('Navigate back and forward example', async ({ page }) => {


    await page.goto("https://www.flipkart.com/")

    await page.waitForTimeout(3000)

    await page.goto("https://www.amazon.in/")

    //Amezon to Flifcart
    await page.goBack()

    await page.waitForTimeout(3000)

    //Flifcart to amezon
    await page.goForward()

    await page.waitForTimeout(3000)











    // await page.goto("https://www.flipkart.com/")

    // await page.waitForTimeout(5000)

    // await page.goto("https://www.amazon.in/")

    // await page.waitForTimeout(3000)

    // //amezon to flicart
    // await page.goBack()

    // await page.waitForTimeout(3000)

    // //flicart to amezon
    // await page.goForward()

    // await page.waitForTimeout(5000)

});