import { test } from '@playwright/test';

test('mouse hover action', async ({ page }) => {

await page.goto("https://www.figma.com/login")

await page.locator("//input[@type='email']").fill("prabhas@gmail.com")

//.......//input[@type='email']  -----//tagname[@AN='Av']---xpath


})

