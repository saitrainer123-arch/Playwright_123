import { Page, Locator } from '@playwright/test';

export class HomePage {

    //This line has 3 parts: //declaire
    // readonly   page   :   Page
    //    |        |         |
    // modifier   variable   type
    readonly page: Page;
    readonly Backpack: Locator
    constructor(page: Page) {
        this.page = page;
        this.Backpack = page.locator("#add-to-cart-sauce-labs-backpack")

    }
    async Verify_BackPack_Botton() {

        await this.Backpack.click();

    }

}
