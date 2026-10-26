# Sauce Demo Inventory Page Test Plan

## Application Overview

Validate the authenticated Sauce Demo inventory page at https://www.saucedemo.com/inventory.html. The inventory requires login; a fresh session visiting the direct URL should be redirected to the login page. Use the public standard demo account (standard_user / secret_sauce) for authenticated scenarios. Cover inventory rendering, sorting, product detail navigation, cart operations, menu navigation, logout, and protected-route behavior. Reset to a fresh context between scenarios to prevent cart or session state leaking.

## Test Scenarios

### 1. Inventory Access and Shopping Flows

**Seed:** ``

#### 1.1. Redirects unauthenticated visitors from inventory to login

**File:** `tests/inventory-page/protected-inventory-route.spec.ts`

**Steps:**
  1. Open https://www.saucedemo.com/inventory.html in a fresh browser context without an existing session.
    - expect: The browser redirects to https://www.saucedemo.com/.
    - expect: A login form is visible with Username and Password fields and a Login button.
    - expect: An access error may explain that the inventory requires login.

#### 1.2. Displays the inventory after successful login

**File:** `tests/inventory-page/inventory-render.spec.ts`

**Steps:**
  1. In a fresh browser context, open the inventory URL; on redirect, log in using standard_user and secret_sauce.
    - expect: The browser reaches /inventory.html and displays the Products heading.
    - expect: Six product cards are visible, each with a product name, description, price, image, and Add to cart button.
    - expect: The navigation header shows the menu control and cart control.

#### 1.3. Sorts products by name and price

**File:** `tests/inventory-page/product-sorting.spec.ts`

**Steps:**
  1. Log in as standard_user. Change Sort products to Name (Z to A), then Price (low to high), then Price (high to low).
    - expect: Each selected sort option is reflected in the control.
    - expect: Product names are in descending order for Name (Z to A).
    - expect: Prices are in ascending order for Price (low to high) and descending order for Price (high to low).

#### 1.4. Opens and returns from a product details page

**File:** `tests/inventory-page/product-details.spec.ts`

**Steps:**
  1. Log in as standard_user and select the Sauce Labs Backpack product name or image.
    - expect: The product details page displays the selected product's name, description, and price.
    - expect: A Back to products control returns to /inventory.html.

#### 1.5. Adds and removes an item from the cart

**File:** `tests/inventory-page/add-to-cart.spec.ts`

**Steps:**
  1. Log in as standard_user with an empty cart. Click Add to cart for Sauce Labs Backpack, then click Remove for that product.
    - expect: After adding, the cart badge displays 1 and the product control changes to Remove.
    - expect: After removing, the cart badge is cleared and the product control returns to Add to cart.

#### 1.6. Opens the cart and verifies selected items

**File:** `tests/inventory-page/cart.spec.ts`

**Steps:**
  1. Log in as standard_user, add Sauce Labs Backpack to the cart, then open the cart control.
    - expect: The browser navigates to /cart.html.
    - expect: The cart contains Sauce Labs Backpack and its quantity and price are displayed.
    - expect: Continue Shopping returns to /inventory.html.

#### 1.7. Uses the navigation menu and returns to inventory

**File:** `tests/inventory-page/menu-navigation.spec.ts`

**Steps:**
  1. Log in as standard_user and open the menu. Select All Items, then open the menu again and select About.
    - expect: The menu displays All Items, About, Logout, and Reset App State options.
    - expect: All Items returns to /inventory.html.
    - expect: About navigates to the Sauce Labs website.

#### 1.8. Logs out and protects inventory after logout

**File:** `tests/inventory-page/logout.spec.ts`

**Steps:**
  1. Log in as standard_user, open the menu, and select Logout. Then navigate directly to /inventory.html.
    - expect: Logout returns the browser to the login page.
    - expect: Opening /inventory.html without signing in redirects back to the login page.

#### 1.9. Supports keyboard access to primary inventory controls

**File:** `tests/inventory-page/accessibility.spec.ts`

**Steps:**
  1. Log in as standard_user and navigate the page using Tab and Enter without a mouse. Focus the menu, sort control, product links, Add to cart, and cart controls.
    - expect: Primary controls can receive visible keyboard focus.
    - expect: Keyboard activation opens product details, changes sorting, adds an item, and opens the cart as applicable.

#### 1.10. Keeps inventory usable on a narrow viewport

**File:** `tests/inventory-page/responsive-layout.spec.ts`

**Steps:**
  1. Log in as standard_user, set the viewport to a narrow mobile size, and inspect the header and product list.
    - expect: Menu and cart controls remain accessible.
    - expect: Product names, prices, and Add to cart controls remain visible and usable.
    - expect: No page overflow blocks access to essential inventory actions.
