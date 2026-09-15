import { test, expect } from '@playwright/test';

test('mouse hover action', async ({ page }) => {

  // Launch the application
  await page.goto('https://demo.automationtesting.in/Register.html');


  await page.getByText("Interactions ").hover()

   await page.waitForTimeout(2000)

  await page.getByText("Drag and Drop ").hover()

  await page.waitForTimeout(2000)

  await page.getByText("Static ").hover()

  await page.waitForTimeout(5000)






  // const inr = page.getByText("Interactions ");

  // await inr.hover()

  // await page.waitForTimeout(3000)

  // await page.getByText("Drag and Drop ").hover()

  // await page.waitForTimeout(3000)

  // await page.locator('[href="Dynamic.html"]').hover()

  // await page.waitForTimeout(3000)







  // const Interaction_Emlnt = page.getByRole('link',{name:"Interactions "})

  // await Interaction_Emlnt.hover();

  // await page.waitForTimeout(2000);

  // const dragdrop_elmnt = page.getByText("Drag and Drop ");

  // await dragdrop_elmnt.hover();

  //  await page.waitForTimeout(2000);

  // const static_elemt = page.getByText("Static ");

  // await static_elemt.hover();


  //const int = page.locator('//a[@href="Interactions.html"]');
  //await int.hover()


  //  const drg =page.getByText('Drag and Drop ');
  //  await drg.hover()


  //await page.waitForTimeout(2000);


  // // // Hover on "Interactions"
  // const interaction_Addres = page.locator("//a[@href='Interactions.html']");
  // await interaction_Addres.hover();


  //await page.waitForTimeout(2000);
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
  //await page.waitForTimeout(2000);

});
