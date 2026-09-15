# Facebook Test Plan

## Application Under Test
- URL: https://www.facebook.com/
- Application: Facebook social networking platform
- Scope: Login flows, account access, navigation, basic feed interactions, and session management

## Assumptions
- Tests run against a stable Facebook landing page and login experience.
- A dedicated test account is available for valid login scenarios.
- Each test starts with a new browser session or cleared cookies.
- Facebook may present regional variations, cookie banners, or additional prompts.
- Tests should avoid writing or posting content on a production account unless permitted.

## Test Scenarios

### 1. Load Facebook landing page
1. Open https://www.facebook.com/
2. Verify the page loads successfully.
3. Confirm the login form is visible.
4. Confirm links for "Create new account", "Forgotten password?", and other support options are present.

Expected:
- Page title or heading indicates Facebook.
- Username/email and password fields are visible.
- Login button is visible and enabled.

### 2. Login with valid credentials
1. Open Facebook homepage.
2. Enter valid email or phone number for a test account.
3. Enter the correct password.
4. Click Login.

Expected:
- User is taken to the main feed or home page.
- The navigation bar shows profile, search, notifications, and menu icons.
- The account name or profile avatar is visible.

### 3. Login failure with invalid credentials
1. Open Facebook homepage.
2. Enter an invalid email or phone number.
3. Enter an incorrect password.
4. Click Login.

Expected:
- Login fails.
- An error message is displayed.
- The user remains on the login page.

### 4. Password recovery link
1. Open Facebook homepage.
2. Click "Forgotten password?" or equivalent recovery link.
3. Verify navigation to the recovery page.
4. Confirm the recovery form accepts email, phone number, or username.

Expected:
- Recovery instructions or search results are displayed.
- The page provides next steps to reset the password.

### 5. Create new account navigation
1. Open Facebook homepage.
2. Click "Create new account".
3. Verify the sign-up modal or page appears.
4. Confirm required fields are present: first name, surname, mobile number or email, password, birthdate, and gender.

Expected:
- Account creation UI loads.
- Required fields are shown and labeled.
- Cancel or close controls are available.

### 6. Search for people or pages
1. Log in with a valid test account.
2. Use the search input to enter a name or page.
3. Submit the search.

Expected:
- Search results appear.
- User can see people, pages, or groups matching the query.
- The results page loads successfully.

### 7. Navigate to profile and settings
1. Log in with a valid test account.
2. Click the profile/avatar menu.
3. Navigate to the profile page.
4. Open account settings or privacy shortcuts.

Expected:
- Profile page displays the user’s name and recent posts or profile details.
- Settings menu is accessible.
- Navigation is successful without errors.

### 8. Logout and session handling
1. Log in with a valid test account.
2. Open the account menu.
3. Click Log Out.
4. Attempt to navigate back to the feed page.

Expected:
- User is redirected to the login page.
- The feed is not accessible without re-authentication.
- The session ends cleanly.

## Additional Notes
- Facebook UI may change frequently; prefer stable selectors and accessible labels.
- Consider handling cookie consent and regional banners before interacting.
- Avoid actions that post or publish content unless the test account and environment are explicitly intended for test activity.
- Use negative validation for missing login credentials, invalid recovery inputs, and unauthorized page access.
