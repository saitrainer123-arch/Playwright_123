import { test, expect } from '@playwright/test';

test('mouse hover action', async ({ page }) => {

  //for slow this is annotate, alternative for timeout
  //  test.slow
  // Launch the application
  await page.goto('https://demo.automationtesting.in/Register.html');

  const Interaction_Emlnt = page.getByText("Interactions ");
  await Interaction_Emlnt.hover();

  const dragdrop_elmnt = page.getByText("Drag and Drop ");
  await dragdrop_elmnt.hover();

  await page.waitForTimeout(2000);




  //const int = page.locator('//a[@href="Interactions.html"]');
  //await int.hover()


  //  const drg =page.getByText('Drag and Drop ');
  //  await drg.hover()


  await page.waitForTimeout(2000);


  // // // Hover on "Interactions"
  // const interaction_Addres = page.locator("//a[@href='Interactions.html']");
  // await interaction_Addres.hover();


  await page.waitForTimeout(2000);
  // // Hover on "Drag and Drop"
  // const dragAndDrop = page.locator("//a[text()='Drag and Drop ']");
  // await dragAndDrop.hover();


  //  const interactions = page.locator("//a[@href='Interactions.html']");
  //  await interactions.hover();

  // // Small wait to see hover effect
  // await page.waitForTimeout(1000);

  // // Hover on "Drag and Drop"
  // const dragAndDrop = page.locator("//a[normalize-space()='Drag and Drop']");
  // await dragAndDrop.hover();

  // Just to observe the action
  await page.waitForTimeout(2000);

});
