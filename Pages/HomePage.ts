import { Page, Locator } from '@playwright/test'


export class HomePage {

    readonly page: Page;
    readonly SauceLabsBackpack: Locator; //declaire
    readonly Sauce_Labs_Bolt_: Locator;
    readonly Sauce_Labs_Onesi: Locator;

    constructor(page: Page) {
        this.page = page;
        this.SauceLabsBackpack = page.locator("#add-to-cart-sauce-labs-backpack")
        this.Sauce_Labs_Bolt_ = page.locator("#add-to-cart-sauce-labs-bolt-t-shirt")
        this.Sauce_Labs_Onesi = page.locator("#[data-test='add-to-cart-sauce-labs-onesie']")

    }

    async Veriefy_SauceLabsBackpack_Button() {

        await this.SauceLabsBackpack.click()

    }

    async Veriefy_Sauce_Labs_Bolt_Button() {

        await this.Sauce_Labs_Bolt.click()

    }


}







// export class HomePage {

//     //This line has 3 parts: //declaire
//     // readonly   page   :   Page
//     //    |        |         |
//     // modifier   variable   type
//     readonly page: Page;
//     readonly Backpack: Locator
//     constructor(page: Page) {
//         this.page = page;
//         this.Backpack = page.locator("#add-to-cart-sauce-labs-backpack")

//     }
//     async Verify_BackPack_Botton() {

//         await this.Backpack.click();

//     }

// }
