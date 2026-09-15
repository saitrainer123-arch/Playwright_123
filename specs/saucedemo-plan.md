# Sauce Demo Test Plan

## Application Under Test
- URL: https://www.saucedemo.com/
- Application: Sauce Demo web storefront
- Scope: Authentication, product browsing, cart management, checkout, validation, and logout flows

## Assumptions
- Each test starts from a fresh browser session or cleared cache.
- The application is reachable at the given URL.
- Standard test users exist with the following credentials:
  - `standard_user` / `secret_sauce`
  - `locked_out_user` / `secret_sauce`
  - `problem_user` / `secret_sauce`
  - `performance_glitch_user` / `secret_sauce`
- Tests may run independently in any order.

## Test Scenarios

### 1. Login with valid credentials
1. Open https://www.saucedemo.com/
2. Verify the login page displays username and password fields and the Login button.
3. Enter `standard_user` into Username.
4. Enter `secret_sauce` into Password.
5. Click Login.

Expected:
- User is redirected to the inventory page.
- The product list is visible.
- Each item shows a name, description, price, and Add to cart button.

### 2. Login failure with invalid credentials
1. Open https://www.saucedemo.com/
2. Enter an invalid username or password pair.
3. Click Login.

Expected:
- Login fails.
- An error message is displayed.
- The user stays on the login page.

### 3. Locked-out user login behavior
1. Open https://www.saucedemo.com/
2. Enter `locked_out_user` into Username.
3. Enter `secret_sauce` into Password.
4. Click Login.

Expected:
- Login fails.
- A locked-out user message is shown.
- The user remains on the login page.

### 4. Add and remove products from cart
1. Log in with `standard_user` / `secret_sauce`.
2. Add at least two products to the cart.
3. Verify the cart badge count updates correctly.
4. Open the cart page.
5. Confirm the selected products appear in the cart with name, description, price, and quantity.
6. Remove one product from the cart.

Expected:
- Cart contents update immediately.
- The removed product disappears from the cart.
- The cart badge count decrements correctly.

### 5. Complete checkout successfully
1. Log in with `standard_user` / `secret_sauce`.
2. Add one or more products to the cart.
3. Open the cart and click Checkout.
4. Enter `FirstName`, `LastName`, and `12345` as Postal Code.
5. Click Continue.
6. Review the order overview and click Finish.

Expected:
- Checkout completes.
- A confirmation page or success message is displayed.
- The order completion screen shows order details.

### 6. Checkout validation and cancel behavior
1. Log in with `standard_user` / `secret_sauce`.
2. Add a product to the cart.
3. Open the cart and click Checkout.
4. Leave one or more required fields blank.
5. Click Continue.

Expected:
- A validation error appears.
- The user cannot proceed until required fields are filled.
6. Click Cancel on the checkout information page.

Expected:
- The user is returned to the cart page.
- Checkout is not completed.

### 7. Product sorting and item details navigation
1. Log in with `standard_user` / `secret_sauce`.
2. Change the product sort order (e.g. Price (low to high), Name (Z to A)).
3. Verify products reorder correctly.
4. Click on a product name or image to open its details page.
5. Verify the product details page shows name, description, price, and Add to cart/Back buttons.
6. Click Back to return to the inventory.

Expected:
- Sorting updates the listed product order.
- Product details page loads correctly.
- Navigation back returns to the inventory view.

### 8. Logout clears session and returns to login
1. Log in with `standard_user` / `secret_sauce`.
2. Open the menu and click Logout.

Expected:
- User is redirected to the login page.
- Accessing the inventory page again requires logging in.
3. Attempt to navigate back to the inventory page.

Expected:
- The application blocks access without re-authentication.

## Additional Notes
- Consider cross-browser execution for Chromium, Firefox, and WebKit.
- Include negative validation for empty login fields, invalid postal codes, and missing checkout data.
- Verify UI elements like cart badges, sort dropdown, and menu navigation remain consistent across the flow.
