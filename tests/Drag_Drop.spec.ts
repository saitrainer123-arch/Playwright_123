import { test, expect } from '@playwright/test'

test('Drag and Drop', async ({ page }) => {

    await page.goto('https://testautomationpractice.blogspot.com/')


    const source = page.locator("#draggable")
    const target = page.locator("#droppable")

    await source.dragTo(target)

    await page.waitForTimeout(3000)


    // const source = page.locator('#draggable')
    // const target = page.locator('#droppable')


    // await source.dragTo(target)

    // await page.waitForTimeout(3000)
    //point mouse &down
    // await source.hover()
    // await page.mouse.down()

    // //point mouse &up
    // await target.hover()
    // await page.mouse.up()

    //Simple one to drag and drop

})
