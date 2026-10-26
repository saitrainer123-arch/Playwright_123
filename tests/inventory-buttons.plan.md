# Sauce Demo Inventory Page — Six Button Functionality Plan

## Application Overview

Check whether six buttons on the Sauce Demo inventory page work: Open Menu, Close Menu, View Product Details, Add to Cart, Cart, and Logout. The direct inventory URL redirects unauthenticated users to login. For each test, start in a fresh browser context, open https://www.saucedemo.com/inventory.html, and if redirected log in with the public demo credentials standard_user / secret_sauce. Record each button as WORKING or NOT WORKING according to its expected result; if blocked by an application or environment issue, record BLOCKED and note evidence. Use only the demo account and do not enter real personal information.

## Test Scenarios

### 1. Inventory Page Button Checks

**Seed:** ``

#### 1.1. Button 1 — Open Menu

**File:** `tests/inventory-buttons/open-menu.spec.ts`

**Steps:**
  1. Start from a fresh logged-in session on /inventory.html. Click the Open Menu button once.
    - expect: The side navigation opens and menu options such as All Items, About, Logout, and Reset App State are visible.
    - expect: Mark WORKING if the menu opens and options are usable; otherwise mark NOT WORKING and record the observed behavior.

#### 1.2. Button 2 — Close Menu

**File:** `tests/inventory-buttons/close-menu.spec.ts`

**Steps:**
  1. Start from a fresh logged-in session on /inventory.html. Click Open Menu, then click Close Menu.
    - expect: The side navigation closes and the inventory page is unobstructed.
    - expect: Mark WORKING if the menu closes; otherwise mark NOT WORKING and record the observed behavior.

#### 1.3. Button 3 — View Product Details

**File:** `tests/inventory-buttons/product-details.spec.ts`

**Steps:**
  1. Start from a fresh logged-in session on /inventory.html. Click the product-name button for Sauce Labs Backpack (View details for Sauce Labs Backpack).
    - expect: The product details page for Sauce Labs Backpack opens and displays the matching product name, description, and price.
    - expect: Mark WORKING if the selected product details open correctly; otherwise mark NOT WORKING and record the observed behavior.

#### 1.4. Button 4 — Add to Cart

**File:** `tests/inventory-buttons/add-to-cart.spec.ts`

**Steps:**
  1. Start from a fresh logged-in session with an empty cart on /inventory.html. Click Add to cart for Sauce Labs Backpack.
    - expect: The cart count changes to 1 and the product button changes to Remove.
    - expect: Mark WORKING if the cart reflects the added product; otherwise mark NOT WORKING and record the observed behavior.

#### 1.5. Button 5 — Cart

**File:** `tests/inventory-buttons/cart.spec.ts`

**Steps:**
  1. Start from a fresh logged-in session on /inventory.html. Click the cart button while the cart is empty.
    - expect: The browser opens /cart.html and displays the cart page, including its empty-cart state and Continue Shopping control.
    - expect: Mark WORKING if the cart page opens and renders correctly; otherwise mark NOT WORKING and record the observed behavior.

#### 1.6. Button 6 — Logout

**File:** `tests/inventory-buttons/logout.spec.ts`

**Steps:**
  1. Start from a fresh logged-in session on /inventory.html. Click Open Menu, then click Logout.
    - expect: The browser returns to the login page at https://www.saucedemo.com/.
    - expect: Directly attempting to revisit /inventory.html without logging in redirects to the login page.
    - expect: Mark WORKING if logout ends the session and inventory is protected; otherwise mark NOT WORKING and record the observed behavior.
