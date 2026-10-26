import { test, expect } from '@playwright/test';

test('Hard vs Soft Assertions - First Name Field', async ({ page }) => {

  // Step 1: Launch application
  await page.goto('https://demo.automationtesting.in/Register.html');

  // Step 2: Hard Assertions (test will stop if any fails)
  await expect(page.getByPlaceholder('First Name')).toBeVisible();
  await expect(page.getByPlaceholder('First Name')).toBeEditable();
  await expect(page.getByPlaceholder('First Name')).toBeEnabled()
  await expect(page.getByPlaceholder('First Name')).toBeEmpty()


 

  //Step 3: Enter value using different Playwright approaches
  await page.getByPlaceholder('First Name').fill('sravan');

  // OR using locator
  //await page.locator('[placeholder="First Name"]').fill('kumar');

  // OR using page.fill
  //await page.fill('[placeholder="First Name"]', 'Lokesh');

  

  // Step 4: Soft Assertion (test will continue even if it fails)
  await expect.soft(page.getByPlaceholder('First Name')).toHaveValue('sai'); // ❌ intentional fail

  
  // Step 5: Wait (only for demo purpose)
  await page.waitForTimeout(2000);
});
