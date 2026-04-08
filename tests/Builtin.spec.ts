import { test, expect } from '@playwright/test';

test('All Built-in Locators Example - Demo Automation Testing', async ({ page }) => {

  await page.goto('https://demo.automationtesting.in/Register.html');


  // 1️⃣ getByPlaceholder()
  await page.getByPlaceholder('First Name').fill('Sai');
  await page.getByPlaceholder('Last Name').fill('kumar');

  // 2️⃣ locator() with attribute  --Xpath
  await page.locator("//textarea[@ng-model='Adress']").fill('Hyderabad');
 

  // 3️⃣ getByRole() - Radio Button
  await page.locator('input[value="Male"]').click();
  

  // // 4️⃣ getByLabel()
  // await page.getByLabel('Cricket').check();

  // // 5️⃣ locator() - Checkbox
  // await page.locator('#checkbox2').check();  // Movies

  // // 6️⃣ getByRole() - Dropdown
  // await page.getByRole('combobox').selectOption('Skills');

  // // 7️⃣ getByText()
  // await page.getByText('SwitchTo').hover();

  // // 8️⃣ nth()
  // const inputs = page.locator('input');
  // await inputs.nth(2).fill('9999999999');

  // // 9️⃣ first() and last()
  // await inputs.first().highlight();   // First input
  // await inputs.last().highlight();    // Last input

  // 🔟 getByTitle()
  await page.getByTitle('Help').click();

});

