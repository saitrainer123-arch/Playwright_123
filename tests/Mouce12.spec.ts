import { test, expect } from '@playwright/test';

test('mouse hover action', async ({ page }) => {
    await page.goto('https://www.facebook.com/');

    await page.getByRole('button', { name: 'Create new account' })

    await page.waitForTimeout(3000)

    await page.getByText('Mobile number or email address').fill("98896899898")

    await page.waitForTimeout(3000)

    await page.getByRole('button', { name: 'Submit' }).click()

    await page.waitForTimeout(3000)

    // const inn = await page.getByRole('link', { name: 'Interactions' })

    // const inn1 = await page

    // await inn.hover()

    // await page.waitForTimeout(3000)

    // const dd = page.getByText("Drag and Drop ")

    // await dd.hover()

    // await page.waitForTimeout(3000)

})

