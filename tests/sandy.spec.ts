import { test, expect } from '@playwright/test'


test('amezon open', async ({ page }) => {

    await page.goto('https://www.amazon.in/')


    await page.waitForTimeout(3000)

})

