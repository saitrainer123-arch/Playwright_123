# Flipkart Website Test Plan

## Application Overview

Functional test plan for the Flipkart shopping website at https://www.flipkart.com/. Covers landing-page access, search, product discovery, cart, authentication, and checkout-related safety checks. Start each scenario in a fresh browser context; use authorized test accounts and non-production data only. Flipkart may vary by region, session, device, and anti-bot or login prompts, so validate current labels and flows during execution.

## Test Scenarios

### 1. Shopping and Account Flows

**Seed:** ``

#### 1.1. Loads the Flipkart homepage

**File:** `tests/flipkart/homepage.spec.ts`

**Steps:**
  1. Open https://www.flipkart.com/ in a fresh browser context.
    - expect: The page loads without a browser-level failure and displays recognizable Flipkart branding.
    - expect: The main navigation and search control are visible, or a dismissible sign-in/consent prompt is displayed over the page.
    - expect: Any displayed modal or overlay can be dismissed using its visible close or dismiss control.

#### 1.2. Searches for an available product

**File:** `tests/flipkart/search-products.spec.ts`

**Steps:**
  1. Open the homepage, enter a common product query such as “headphones” into the search field, and submit using the search button or Enter.
    - expect: Search results for the submitted query load.
    - expect: The results page provides product cards or a clear no-results message.
    - expect: Product names and prices are readable where results are available.

#### 1.3. Handles an empty search submission

**File:** `tests/flipkart/search-empty.spec.ts`

**Steps:**
  1. Open the homepage, leave the search field empty, and attempt to submit the search using Enter and the visible search control if enabled.
    - expect: The site does not navigate to an unintended product result.
    - expect: The page remains usable; if empty queries are blocked, appropriate validation or unchanged state is shown.

#### 1.4. Handles a query with no matching products

**File:** `tests/flipkart/search-no-results.spec.ts`

**Steps:**
  1. Search for a distinctive nonsensical query unlikely to match a product, such as “zzqv-no-product-48291”.
    - expect: The results page clearly communicates that no matching products were found, or presents an empty result state.
    - expect: The search query remains editable so the user can try another search.

#### 1.5. Opens a product detail page from search results

**File:** `tests/flipkart/product-details.spec.ts`

**Steps:**
  1. Search for a common product and open one result from the results listing.
    - expect: A product detail page or product quick-view opens for the selected item.
    - expect: The product name, price, and available product information are displayed.
    - expect: The displayed product corresponds to the result selected.

#### 1.6. Applies a filter or sort option to product results

**File:** `tests/flipkart/filter-sort.spec.ts`

**Steps:**
  1. Search for a common product category, then apply an available filter or sorting option and inspect the result list.
    - expect: The selected filter or sort option is visibly selected or otherwise indicated.
    - expect: The results update consistently with the selected criterion when matching items are available.
    - expect: The page remains usable when filters are changed or cleared.

#### 1.7. Adds a product to the cart

**File:** `tests/flipkart/add-to-cart.spec.ts`

**Steps:**
  1. Search for an in-stock product, open its details, select any required variant, and choose Add to Cart.
    - expect: The item is added to the cart, or the site presents a required sign-in prompt.
    - expect: When the cart is updated, its item count reflects the addition and the selected product is shown in the cart.

#### 1.8. Updates or removes a cart item

**File:** `tests/flipkart/cart-update.spec.ts`

**Steps:**
  1. Starting from a cart containing one test item, open the cart and change its quantity if supported; then remove the item.
    - expect: The cart reflects the changed quantity and recalculated total, if quantity changes are supported.
    - expect: After removal, the item is absent and an empty-cart state or corresponding item count is displayed.

#### 1.9. Validates sign-in form behavior

**File:** `tests/flipkart/login-prompt.spec.ts`

**Steps:**
  1. Open the sign-in entry point from the homepage and inspect the available authentication form or prompt.
    - expect: The sign-in interface is displayed with its expected identifier/password controls or supported authentication options.
    - expect: Submitting empty or malformed input does not create an authenticated session and displays appropriate validation or an error.
    - expect: A user can close or leave the sign-in prompt and return to shopping.

#### 1.10. Verifies checkout gates without placing an order

**File:** `tests/flipkart/checkout-guard.spec.ts`

**Steps:**
  1. With a test item in the cart, proceed to the next checkout step using only an approved test account and non-production test data; stop before payment submission or final order placement.
    - expect: The site enforces required sign-in, address, or other checkout prerequisites before proceeding.
    - expect: No real payment is submitted and no order is placed.
    - expect: The user can return to the cart without losing its contents, subject to the application's expected behavior.

#### 1.11. Keeps essential shopping controls usable on a narrow viewport

**File:** `tests/flipkart/responsive-layout.spec.ts`

**Steps:**
  1. Open the homepage and search results at a narrow mobile viewport; inspect the navigation, search control, and a product listing.
    - expect: Essential navigation and search remain visible or accessible through a responsive menu.
    - expect: Product content remains usable without critical controls being inaccessible or overlapping.
    - expect: No blocking horizontal overflow prevents access to primary shopping actions.
