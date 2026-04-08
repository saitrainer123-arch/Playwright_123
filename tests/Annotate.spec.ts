import { test, expect } from '@playwright/test';

test('Annotates 1', async () => {
    console.log('sai')
})
test.only('Annotates 2', async () => {
    console.log('sravan')
})
//it will skip
test.skip('Annotates 3', async () => {
    console.log('prabhas')
})
// this expected to fail 
test.fail('Annotates 4', async ({ page }) => {
    //pass contition but it fails because of test.fail
    // expect(1).toEqual(1)
    ////fail contition but it pass because of test.fail
    expect(1).toEqual(2)
    console.log('prabhas')

})
//same like test.fail = test.fixme
test.fixme('Annotates 5', async ({ page }) => {
    //pass contition but it fails because of test.fail
    // expect(1).toEqual(1)
    ////fail contition but it pass because of test.fail
    expect(1).toEqual(2)
    console.log('prabhas')
})
//But here we con't see , show me the mouse hover example
test('Annotates 6', async () => {
    test.slow
    console.log('AA')
})
