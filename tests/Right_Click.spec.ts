import { test, expect } from '@playwright/test';


test('Right click action', async ({ page }) => {

    await page.goto('https://demo.guru99.com/test/simple_context_menu.html');



    await page.getByText("right click me").click({ button: 'right' })

    await page.waitForTimeout(4000)

    await page.getByText("Paste").click()

    await page.waitForTimeout(4000)








    // await page.getByText("right click me").click({ button: 'right' })

    // await page.waitForTimeout(3000)

    // await page.getByText('Paste').click()


    // await page.waitForTimeout(2000)

    // await page.getByText("Paste").click()


    // await page.getByText("right click me").click({button:'right'})



    // await page.getByText("Paste").click()








    // await page.getByText("right click me").click({ button: 'right' })

    // await page.getByText("Paste").click()







    // const rck = page.getByText("right click me")

    // await rck.click({ button: 'right' })

    // await page.getByText("Paste").click()





    // const rc = page.getByText("right click me");

    // await rc.click({ button: 'right' })

    // const ps = page.getByText("Paste")
    // ps.click()
    //await page.waitForTimeout(5000);










    // // Locate the "right click me" button using XPath
    // const rightclickme = page.getByText("right click me")

    // await rightclickme.click({ button: 'right' })

    // const paste_ = page.getByText('Paste');
    // await paste_.click()

    // await page.waitForTimeout(3000);





    // Wait for 2 seconds (only for demo/visual purpose)


    // Handle the alert dialog that appears after clicking Paste
    // page.on('dialog', async dialog => {

    //     // Verify the alert message text
    //     expect(dialog.message()).toContain('clicked: paste');

    //     // Accept (OK) the alert popup
    //     await dialog.accept();
    // });

    // // Click on the "Paste" option from the right-click menu
    // await page.locator("//span[text()='Paste']").click();

    //await page.waitForTimeout(2000);
});