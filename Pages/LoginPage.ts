import { Page, Locator } from '@playwright/test';

export class LoginPage {

//This line has 3 parts:
// readonly   page   :   Page
//    |        |         |
// modifier   variable   type
  readonly page: Page;
  readonly username: Locator;
  readonly password: Locator;
  readonly loginButton: Locator;
  readonly errorMessage: Locator;

  constructor(page: Page) {
    this.page = page;
    this.username = page.locator('#user-name');
    this.password = page.locator('#password');
    this.loginButton = page.locator('#login-button');
    this.errorMessage = page.locator('[data-test="error"]');
  }

  // Navigate to application
  async gotoLoginPage() {
    await this.page.goto('https://www.saucedemo.com/');
  }

  // Login action
  async Login_ValidData(user: string, pass: string) {
    await this.username.fill(user);
    await this.password.fill(pass);
    await this.loginButton.click();
  }

  async Login_InnValidData(user: string, pass: string) {
    await this.username.fill(user);
    await this.password.fill(pass);
    await this.loginButton.click();
  }



}