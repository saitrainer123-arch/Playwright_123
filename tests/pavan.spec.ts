import { test, expect } from '@playwright/test'

test('openbrowser', async ({ page }) => {

    await page.goto("https://www.facebook.com/")

    //Finding the loactor through Text = //tagname[text()='textvalue']
    await page.locator("//label[text()='Email address or mobile number']").fill("sai@gmail.com")
    
    await page.waitForTimeout(3000)

});

