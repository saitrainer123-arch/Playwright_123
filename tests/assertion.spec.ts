import { test, expect } from '@playwright/test'

test('Assertions', async ({ page }) => {

    // Step 1: Launch page
    await page.goto('https://testautomationpractice.blogspot.com/');

    const nf = await page.getByPlaceholder("Enter Name")

    //  await nf.fill("Nagaraju")

    // expect(value).assertion()

    await expect(nf).toBeEmpty()

    await expect(nf).toBeEditable()

    await expect(nf).toBeVisible()

    await page.waitForTimeout(2000)













    // const nmf = page.getByPlaceholder("Enter Name")

    // await nmf.fill("Naveen k")

    // await expect.soft(nmf).toBeEmpty()

    // await expect(nmf).toBeEditable()

    // await expect(nmf).toBeVisible()

    // await page.waitForTimeout(3000)

    // await expect(nmf).toHaveValue("Naveen k")

    // await expect(nmf).toHaveAttribute('placeholder', 'Enter Name')

     await expect(page).toHaveURL("https://testautomationpractice.blogspot.com/")





    // const name_flied = await page.getByPlaceholder("Enter Name");

    // await name_flied.fill("Madhav")



    // await expect.soft(name_flied).toBeEmpty()

    // await expect(name_flied).toBeEditable()

    // await expect(name_flied).toBeVisible()

    // await expect(name_flied).toHaveValue("Madhav")

    // await expect(name_flied).toHaveAttribute('placeholder', 'Enter Name')







    // await name_fld.fill("Shiva")

    // //Soft Assertion
    // await expect.soft(name_fld).toBeEmpty()

    // await expect(name_fld).toBeEditable()

    // await expect(name_fld).toBeVisible()


    // await expect(name_fld).toHaveValue("Shiva")


    // await expect(name_fld).toHaveAttribute('placeholder', 'Enter your Name')







    // const namefield__ = page.getByPlaceholder("Enter Name");

    // await expect(namefield__).toBeEditable();

    // await namefield__.fill("naveen")

    // await expect.soft(namefield__).toBeEmpty();

    // await expect(namefield__).toHaveValue("naveen")






    // const namefield_ = page.locator("#name");

    // await namefield_.fill("Vijay");

    // await expect(namefield_).toBeEditable();

    // await expect(namefield_).toHaveAttribute('placeholder', 'Enter Name')

    // await expect(namefield_).toBeEmpty();

    // await expect(namefield_).toHaveValue("Vijay");





    // await expect.soft(namefield_).toHaveAttribute('placeholder', 'Enter Name')

    // await expect(namefield_).toBeEditable()

    // await namefield_.fill("anji")

    // await expect(namefield_).toHaveValue("anji")

    // await expect.soft(namefield_).toBeEmpty()

    await page.waitForTimeout(3000)



})
