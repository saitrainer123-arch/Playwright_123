import { test } from '@playwright/test'


test('OpenBrowser', async ({ page }) => {

    //this is for open the url
    await page.goto("https://www.facebook.com/")

    // this is for waiting time
    await page.waitForTimeout(3000)

    await page.waitForTimeout(3000)

})

