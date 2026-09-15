import { test, expect } from '@playwright/test';

test('Double click example', async ({ page }) => {

  await page.goto("https://testautomationpractice.blogspot.com/")


  await page.getByRole('button', { name: "Copy Text" }).dblclick();
  

  await page.waitForTimeout(4000)






  // const En = await page.getByRole('textbox', { name: 'Enter Name' })

  // await En.fill("Santhosh")

  // await page.waitForTimeout(2000)

  // await En.clear()

  // await En.fill("Venkanna")

  // await page.waitForTimeout(2000)

  // await En.clear()

  // await En.fill("Vishnu")




  // const cb1 = page.getByText("Copy Text")

  // await cb1.click()

  // //await cb1.dblclick()

  // await page.waitForTimeout(2000)




  // const cpybutton = page.getByText("Copy Text");

  // await cpybutton.click()

  // await cpybutton.dblclick();

  // await page.waitForTimeout(5000);




  // const en = await page.getByPlaceholder("Enter Name")

  //     en.fill("Jockson")
  //     await page.waitForTimeout(3000)
  //     en.clear()
  //     await page.waitForTimeout(3000)
  //     en.fill("Sai")
  //     await page.waitForTimeout(3000)
  //     en.clear()
  //     await page.waitForTimeout(3000)
  //     en.fill("Prabhas")








  // await page.getByText("Copy Text").dblclick()

  //await page.getByRole('button',{name:"Copy Text"}).dblclick()

  //await page.getByRole('button',{name:"Copy Text"}).dblclick();







  // // Open practice site
  // await page.goto('https://testautomationpractice.blogspot.com/');

  // // Wait to see the page
  // await page.waitForTimeout(3000);


  // const cpybut = page.getByText("Copy Text");
  // await cpybut.dblclick();




  // Locate double click button
  //const copybuttton = page.getByText('Copy Text')

  // Perform double click
  // await copybuttton.dblclick()


  // Wait so you can observe the action


});
