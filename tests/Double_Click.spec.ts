import { test, expect } from '@playwright/test';

test('Double click example', async ({ page }) => {

  // Open practice site
  await page.goto('https://testautomationpractice.blogspot.com/');

  // Wait to see the page
  await page.waitForTimeout(3000);


  // Locate double click button
  const copybuttton = page.getByText('Copy Text')

  // Perform double click
  await copybuttton.dblclick()

  // Wait so you can observe the action
  await page.waitForTimeout(5000);

});
