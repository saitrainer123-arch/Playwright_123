import { test, expect } from '@playwright/test';

test('Double click example', async ({ page }) => {


    await page.goto("https://demoqa.com/automation-practice-form?utm_source=chatgpt.com")

    //By --getByplaceholder
    await page.getByPlaceholder("First Name").fill("Shankar")

    //By --ID 
    await page.locator("#lastName").fill("Prasad")

    //BY--getByrole
    await page.getByRole('textbox', { name: 'name@example.com' }).fill("shankar@gmail.com")

    // By--getBytext
    await page.locator("#gender-radio-1").click()
     
    //By-- Css--[AN='AV']
    await page.locator("[placeholder='Mobile Number']").fill("9889865566")





})