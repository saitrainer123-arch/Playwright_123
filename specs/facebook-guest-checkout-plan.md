# Facebook Guest Experience Test Plan

## Application Under Test
- URL: https://www.facebook.com/
- Application: Facebook social platform
- Scope: Anonymous or guest user experience, entry points for account access, sign-up navigation, and access control for protected actions

## Assumptions
- Each test starts from a fresh browser session or cleared cookies.
- The landing page is reachable at the provided URL.
- Facebook may show cookie banners, regional prompts, or UI variations based on locale.
- No content posting or account changes are performed during automated test execution.

## Test Scenarios

### 1. Guest user can open the landing page
1. Open https://www.facebook.com/.
2. Verify the page loads successfully.
3. Confirm the login form and account creation entry point are visible.

Expected:
- The Facebook homepage renders without major errors.
- The login form, create account option, and password recovery link are visible.
- The page shows the expected branding and basic navigation.

### 2. Guest user can view public landing content
1. Open the Facebook homepage as an anonymous user.
2. Verify the main page content is visible.
3. Check that public content sections or marketing areas appear correctly.

Expected:
- The homepage content loads properly.
- The guest experience is stable and readable.
- No broken layout or missing primary UI elements appear.

### 3. Guest attempts to access protected features
1. Open the Facebook homepage without logging in.
2. Try to access account-specific or private areas, such as profile, messaging, or settings links.

Expected:
- The user is redirected or prompted to sign in.
- Protected areas are not accessible without authentication.
- Clear guidance is provided for login or account creation.

### 4. Create account entry point works for a guest user
1. Open the Facebook homepage.
2. Click the Create new account option.
3. Verify the sign-up flow begins.

Expected:
- The registration form or modal opens successfully.
- Required fields and controls for account creation are displayed.
- The guest user can start the sign-up journey without errors.

### 5. Login validation for empty credentials
1. Open the Facebook homepage.
2. Leave the email/phone and password fields empty.
3. Click Login.

Expected:
- Validation errors or prompts are shown.
- The user remains on the page and cannot proceed without credentials.

### 6. Login failure with invalid credentials
1. Open the Facebook homepage.
2. Enter an invalid email/phone and password.
3. Click Login.

Expected:
- Login fails securely.
- An error message is displayed.
- The user remains on the login screen.

### 7. Password recovery entry works for a guest user
1. Open the Facebook homepage.
2. Click the Forgot password link.
3. Verify the recovery page opens.

Expected:
- The recovery flow starts successfully.
- The user can enter account details for password recovery.
- Navigation is smooth and error-free.

### 8. Guest session handling is consistent
1. Open the Facebook homepage in a fresh browser session.
2. Navigate between public pages and account entry points.
3. Close and reopen the browser session.

Expected:
- The site behaves correctly for a guest session.
- No unexpected authentication state appears.
- The user can continue as an anonymous visitor without session issues.

## Additional Notes
- Facebook UI can change frequently, so selectors should rely on stable and accessible elements where possible.
- Include checks for consent banners and local-language variations.
- Prioritize non-destructive guest scenarios and avoid interacting with real accounts during test execution.
