# Sauce Demo Login Page Test Plan

## Application Overview

Functional and negative test coverage for the Sauce Demo login page at https://www.saucedemo.com/. Each test starts from a fresh unauthenticated browser state and verifies form controls, credential validation, account-specific responses, keyboard submission, and successful navigation to the inventory page.

## Test Scenarios

### 1. Login Page Smoke and Accessibility

**Seed:** `default`

#### 1.1. Render login form and reference credentials

**File:** `tests/login-page/login-render.spec.ts`

**Steps:**
  1. Open https://www.saucedemo.com/ in a fresh browser context.
    - expect: The page loads successfully with title "Swag Labs".
    - expect: A Username textbox, Password textbox, and Login button are visible and enabled.
    - expect: The page displays the accepted username list and the shared password guidance.
  2. Inspect the Username and Password controls without entering data.
    - expect: The controls have discernible labels or accessible names "Username" and "Password".
    - expect: The password value is not displayed as plain text.

#### 1.2. Submit login with the Enter key

**File:** `tests/login-page/login-keyboard.spec.ts`

**Steps:**
  1. Open the login page in a fresh browser context and enter standard_user in Username.
    - expect: The Username field contains exactly standard_user.
  2. Enter secret_sauce in Password and press Enter while focus is in the Password field.
    - expect: The form submits without requiring a mouse click.
    - expect: The browser navigates to https://www.saucedemo.com/inventory.html.
    - expect: The Products view is visible.

### 2. Credential Validation

**Seed:** `default`

#### 2.1. Reject completely empty submission

**File:** `tests/login-page/login-required-fields.spec.ts`

**Steps:**
  1. Open the login page in a fresh browser context and click Login without entering values.
    - expect: The browser remains on https://www.saucedemo.com/.
    - expect: An inline error states "Epic sadface: Username is required".
    - expect: No inventory content is displayed.

#### 2.2. Reject missing password

**File:** `tests/login-page/login-password-required.spec.ts`

**Steps:**
  1. Open the login page in a fresh browser context and enter standard_user in Username.
    - expect: The Username field contains exactly standard_user.
  2. Leave Password empty and click Login.
    - expect: The browser remains on the login page.
    - expect: An inline error states "Epic sadface: Password is required".
    - expect: The entered username remains available for correction.

#### 2.3. Reject unknown username and password

**File:** `tests/login-page/login-invalid-credentials.spec.ts`

**Steps:**
  1. Open the login page in a fresh browser context, enter invalid_user in Username, and enter wrong_password in Password.
    - expect: Each field contains exactly the value entered.
  2. Click Login.
    - expect: The browser remains on the login page.
    - expect: An inline error states "Epic sadface: Username and password do not match any user in this service".
    - expect: No authenticated inventory page is reachable from this submission.

#### 2.4. Reject locked-out user

**File:** `tests/login-page/login-locked-user.spec.ts`

**Steps:**
  1. Open the login page in a fresh browser context and enter locked_out_user with password secret_sauce.
    - expect: The Username and Password values are accepted into their respective fields.
  2. Click Login.
    - expect: The browser remains on the login page.
    - expect: An inline error states "Epic sadface: Sorry, this user has been locked out.".
    - expect: No inventory content is displayed.

#### 2.5. Clear a login error and retry with valid credentials

**File:** `tests/login-page/login-retry.spec.ts`

**Steps:**
  1. Open the login page in a fresh browser context, submit empty fields, and observe the required-field error.
    - expect: The required-field error is visible.
  2. Dismiss the visible error using its close control, enter standard_user and secret_sauce, then click Login.
    - expect: The error is removed or no longer blocks the form.
    - expect: The browser navigates to /inventory.html.
    - expect: The Products view is visible.

### 3. Successful Authentication

**Seed:** `default`

#### 3.1. Log in with the standard user

**File:** `tests/login-page/login-standard-user.spec.ts`

**Steps:**
  1. Open the login page in a fresh browser context and enter standard_user and secret_sauce sequentially into the matching fields.
    - expect: The Username and Password fields contain the intended values.
    - expect: The password remains masked while being entered.
  2. Click Login.
    - expect: The URL becomes https://www.saucedemo.com/inventory.html.
    - expect: The page shows the Products heading and product catalog.
    - expect: The login form is no longer visible.

#### 3.2. Log in with every listed non-locked account

**File:** `tests/login-page/login-accepted-users.spec.ts`

**Steps:**
  1. For each account standard_user, problem_user, performance_glitch_user, error_user, and visual_user, start a fresh browser context, enter the account username and secret_sauce, and click Login.
    - expect: Each account with the shared password authenticates successfully.
    - expect: Each successful attempt reaches /inventory.html and shows the Products view.
    - expect: The locked_out_user account is excluded from this success set and is covered by the locked-user negative test.
