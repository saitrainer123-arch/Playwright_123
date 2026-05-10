import { Page, Locator } from '@playwright/test';

export class LoginPage {

  //This line has 3 parts: //declaire
  // readonly   page   :   Page
  //    |        |         |
  // modifier   variable   type
  readonly page: Page;
  readonly username: Locator;
  readonly password: Locator;
  readonly loginButton: Locator;
  // readonly errormessage: Locator;

  //intialize
  constructor(page: Page) {
    this.page = page;
    this.username = page.locator('#user-name');
    this.password = page.locator('#password');
    this.loginButton = page.locator('#login-button');
    //this.errormessage=page.locator("[data-test='error-button']")

  }


  // Navigate to application
  async gotoLoginPage() {
    await this.page.goto('https://www.saucedemo.com/');
  }


  // Login action
  //we will always use string becuase fill accepts only (" ")
  async Login_Functionality(user: string, pass: string) {
    await this.username.fill(user);
    await this.password.fill(pass);
    await this.loginButton.click();
  }

 


}