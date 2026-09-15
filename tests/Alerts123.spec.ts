import { test } from '@playwright/test';

test('JavaScript Alerts', async ({ page }) => {

    // // Open website
    await page.goto('https://the-internet.herokuapp.com/javascript_alerts');




    //For alrerts
    page.on('dialog', async dialog => {

        await dialog.accept("Venkanna")  //-----for ok
        

    })

    await page.getByRole('button', { name: 'Click for JS Prompt' }).click()



    await page.waitForTimeout(4000)




    // // 1. JavaScript Alert
    // page.on('dialog', async dialog => {
    //     await dialog.accept();
    // });

    // await page.getByRole('button', { name: 'Click for JS Alert' }).click();


    // //2. JavaScript Confirm
    // page.on('dialog', async dialog => {
    //    // await dialog.accept();
    //     await dialog.dismiss()
    // });

    // await page.getByRole('button', { name: 'Click for JS Confirm' }).click();


    // // // 3. JavaScript Prompt
    // page.on('dialog', async dialog => {
    //     await dialog.accept('Sai Trainer');
    // });

    //  await page.getByRole('button', { name: 'Click for JS Prompt' }).click();

    await page.waitForTimeout(4000)

});