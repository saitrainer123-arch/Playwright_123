# Sauce Demo Login Page Test Plan

## Application Overview

Validate the Sauce Demo login experience at https://www.saucedemo.com/, including initial form presentation, required-field validation, invalid and locked-out credentials, successful authentication, and keyboard submission. Start every scenario in a fresh browser context at the login URL with no authenticated session.

## Test Scenarios

### 1. Login Page and Authentication

**Seed:** ``

#### 1.1. Displays the login form and published demo credentials

**File:** `tests/login-page/initial-login-page.spec.ts`

**Steps:**
  1. Open https://www.saucedemo.com/ in a fresh browser context with no existing session.
    - expect: The page title is Swag Labs and the browser remains on the login URL.
    - expect: The login form shows empty Username and Password fields and a Login button.
    - expect: The password field masks entered characters.
    - expect: The accepted demo usernames and shared password secret_sauce are displayed.

#### 1.2. Shows username-required validation when both fields are empty

**File:** `tests/login-page/login-required-fields.spec.ts`

**Steps:**
  1. Open the login page in a fresh browser context and click Login without entering either field.
    - expect: The page remains on the login URL.
    - expect: An accessible error alert says “Epic sadface: Username is required”.
    - expect: The login form remains available for correction.

#### 1.3. Shows password-required validation when only username is entered

**File:** `tests/login-page/password-required.spec.ts`

**Steps:**
  1. Open the login page in a fresh browser context, enter standard_user in Username, leave Password empty, and click Login.
    - expect: The page remains on the login URL.
    - expect: An accessible error alert says “Epic sadface: Password is required”.
    - expect: The entered username remains available in the form.

#### 1.4. Rejects an unknown username or incorrect password

**File:** `tests/login-page/invalid-credentials.spec.ts`

**Steps:**
  1. Open the login page in a fresh browser context, enter standard_user and an incorrect password, then click Login.
    - expect: The page remains on the login URL and does not establish an authenticated session.
    - expect: An accessible error alert says “Epic sadface: Username and password do not match any user in this service”.
  2. Click Dismiss error.
    - expect: The error alert is removed and the login form remains usable.

#### 1.5. Prevents login for the locked-out demo account

**File:** `tests/login-page/locked-out-user.spec.ts`

**Steps:**
  1. Open the login page in a fresh browser context, enter locked_out_user and secret_sauce, then click Login.
    - expect: The page remains on the login URL and does not establish an authenticated session.
    - expect: An accessible error alert says “Epic sadface: Sorry, this user has been locked out.”

#### 1.6. Logs in with the standard demo account

**File:** `tests/login-page/successful-login.spec.ts`

**Steps:**
  1. Open the login page in a fresh browser context, enter standard_user and secret_sauce, then click Login.
    - expect: Authentication succeeds and the browser navigates to https://www.saucedemo.com/inventory.html.
    - expect: The destination displays the Products heading and authenticated inventory controls.

#### 1.7. Submits valid credentials with the Enter key

**File:** `tests/login-page/keyboard-login.spec.ts`

**Steps:**
  1. Open the login page in a fresh browser context, enter standard_user in Username and secret_sauce in Password, then press Enter while focused in the Password field.
    - expect: The form submits without requiring a mouse click.
    - expect: Authentication succeeds and the browser navigates to /inventory.html.

#### 1.8. Authenticates each listed non-locked demo account

**File:** `tests/login-page/accepted-accounts.spec.ts`

**Steps:**
  1. For each listed account—standard_user, problem_user, performance_glitch_user, error_user, and visual_user—start from a fresh browser context, enter the account name and secret_sauce, and submit the form.
    - expect: Each listed non-locked account can authenticate and reaches /inventory.html.
    - expect: The locked_out_user is excluded and is covered by the dedicated locked-account scenario.
