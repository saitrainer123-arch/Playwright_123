import { expect, test } from '@playwright/test';

test('Web table', async ({ page }) => {

    await page.goto("https://testautomationpractice.blogspot.com/")

    //Locater of ----Pagination Web Table
    const table = await page.locator('#productTable')

    //table headers count by using table variable^
    const table_header = await table.locator('thead tr th')
    console.log("Table Header Count ::: ", await table_header.count())


    //table Rows count by using table variable^
    const table_rows = await table.locator('tbody tr')
    console.log("Table Rows Count ::: ", await table_rows.count())

    //table cell countin body by using table variable^
    const table_body_cells = await table.locator('tbody tr td')
    console.log("Table Body Cells Count ::: ", await table_body_cells.count())

    //Assertions for confirmations
    await expect(await table_header.count()).toBe(4)
    await expect(await table_rows.count()).toBe(5)
    await expect(await table_body_cells.count()).toBe(20)

    await page.waitForTimeout(3000)

})