# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: 02-checkout.spec.ts >> full checkout flow: form validation and order confirmation
- Location: tests\02-checkout.spec.ts:11:5

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: getByTestId('title').filter({ hasText: 'Checkout: Overview' })
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for getByTestId('title').filter({ hasText: 'Checkout: Overview' })

```

```yaml
- button "Open Menu"
- img "Open Menu"
- text: "Swag Labs 1 Checkout: Your Information"
- textbox "First Name": Doe
- textbox "Last Name"
- textbox "Zip/Postal Code": "12345"
- 'heading "Error: Last Name is required" [level=3]':
  - button
  - text: "Error: Last Name is required"
- button "Go back Cancel":
  - img "Go back"
  - text: Cancel
- button "Continue"
- contentinfo:
  - list:
    - listitem:
      - link "Twitter":
        - /url: https://twitter.com/saucelabs
    - listitem:
      - link "Facebook":
        - /url: https://www.facebook.com/saucelabs
    - listitem:
      - link "LinkedIn":
        - /url: https://www.linkedin.com/company/sauce-labs/
  - text: © 2026 Sauce Labs. All Rights Reserved. Terms of Service | Privacy Policy
```

# Test source

```ts
  1  | import { test, expect } from '../fixtures/fixtures';
  2  | 
  3  | const PRODUCT = 'Sauce Labs Backpack';
  4  | 
  5  | test.beforeEach(async ({ loginPage, inventoryPage, testUser }) => {
  6  |   await loginPage.goto();
  7  |   await loginPage.login(testUser.username, testUser.password);
  8  |   await expect(inventoryPage.heading).toBeVisible();
  9  | });
  10 | 
  11 | test('full checkout flow: form validation and order confirmation', async ({
  12 |   inventoryPage,
  13 |   cartPage,
  14 |   checkoutPage,
  15 | }) => {
  16 |   // --- Add a product and proceed to cart ---
  17 |   await inventoryPage.addToCartButton(PRODUCT).click();
  18 |   await inventoryPage.navigateToCart();
  19 |   await expect(cartPage.cartItems().filter({ hasText: PRODUCT })).toBeVisible();
  20 | 
  21 |   // --- Start checkout ---
  22 |   await cartPage.checkout();
  23 | 
  24 |   // --- Validation: submitting with an empty first name must show an error ---
  25 |   await checkoutPage.continue();
  26 |   await expect(checkoutPage.errorMessage).toBeVisible();
  27 | 
  28 |   // --- Fill in shipping info and continue to order summary ---
  29 |   await checkoutPage.fillInfo('Jane', 'Doe', '12345');
  30 |   await checkoutPage.continue();
> 31 |   await expect(checkoutPage.orderSummaryHeader).toBeVisible();
     |                                                 ^ Error: expect(locator).toBeVisible() failed
  32 | 
  33 |   // --- Complete the order ---
  34 |   await checkoutPage.finish();
  35 |   await expect(checkoutPage.confirmationHeader).toBeVisible();
  36 | });
  37 | 
```