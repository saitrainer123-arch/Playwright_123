import { test, expect } from '@playwright/test'

test('Drag and Drop', async ({ page }) => {

    await page.goto('https://testautomationpractice.blogspot.com/')



    const source__ = page.locator("#draggable")

    const target__ = page.locator("#droppable")

    await source__.dragTo(target__)

    await page.waitForTimeout(5000)










    // const s = page.locator("#draggable")

    // const t = page.locator("#droppable")

    // await s.dragTo(t)

    // await page.waitForTimeout(3000)

    // const source1 = page.locator("#draggable")

    // const target1 = page.locator("#droppable")

    // await source1.dragTo(target1)














    // const source_ = await page.locator("#draggable")

    // const target_ = await page.locator("#droppable")

    // await source_.dragTo(target_)

    // await page.waitForTimeout(5000)





    // const source = page.locator("#draggable")

    // const target = page.locator("#droppable")

    // await source.dragTo(target);

    // await page.waitForTimeout(3000)


    // const source = page.getByText("Drag me to my target")

    // const target = page.getByText("Drop here")

    // await source.dragTo(target)

    // await page.waitForTimeout(3000)


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
