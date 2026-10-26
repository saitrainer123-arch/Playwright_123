import {test,expect} from '@playwright/test'

test('Face book ', async ({ page }) => {

    await page.goto("https://www.facebook.com/")

    await page.waitForTimeout(3000)


})