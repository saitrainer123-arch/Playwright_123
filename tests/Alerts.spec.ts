import { test, expect } from '@playwright/test';

test('Handle Alert, Confirm and Prompt dialogs in one script', async ({ page }) => {

  // STEP 1: Launch the application
  await page.goto('https://the-internet.herokuapp.com/javascript_alerts');
  await page.waitForTimeout(3000)

  // //alert---------------------------------------------------------------------------------

  // Validate alert text  ---on --dialog is event for alearts
  await page.getByText("Click for JS Alert").click()
  
  await page.on('dialog', async dialog => {

    expect(dialog.message()).toContain


    //this is for popup cantain text
    expect(dialog.message()).toContain('I am a JS Alert')
    //this is for ok or accept the alert
     await dialog.accept()
    // await dialog.dismiss()
    //await dialog.accept("Rahul")
  })

  // // For promt u should mention in the last
  // await page.getByText('Click for JS Prompt').click()

  //Confirmation alert----------------------------------------------------------------------

  // await page.locator("//button[normalize-space()='Click for JS Confirm']").click()

  // await page.on('dialog', async dialog => {
  //    //tocantians give me that relatated test even if 50% it will worrk
  //    expect(dialog.type()).toContain('confirm')
  //    expect(dialog.message()).toContain('I am a JS Confirm')
  //    //await dialog.accept();
  //    // for Dismiss ,for Calnce
  //   // await dialog.dismiss()

  // })


  // await page.waitForTimeout(3000)
  //Prompting-----------------------------------------------------------------



  // await page.on('dialog', async dialog => {
  //    expect(dialog.type()).toContain('prompt')
  //    expect(dialog.message()).toContain('I am a JS prompt')
  //    await dialog.accept("Tarun");

  // })

  // await page.locator("//button[text()='Click for JS Prompt']").click()

  await page.waitForTimeout(3000)
})
