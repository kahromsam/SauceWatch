# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: 05-visual-integrity.spec.ts >> cart icon is positioned inside the page header
- Location: tests\05-visual-integrity.spec.ts:37:5

# Error details

```
Error: Cart icon has moved outside the page header

expect(received).toBe(expected) // Object.is equality

Expected: true
Received: false
```

# Page snapshot

```yaml
- generic [ref=e3]:
  - generic [ref=e4]:
    - generic [ref=e5]:
      - generic [ref=e6]:
        - generic:
          - generic:
            - generic [ref=e7]:
              - button "Open Menu" [ref=e8] [cursor=pointer]
              - img "Open Menu" [ref=e9]
            - generic [ref=e10]:
              - navigation [ref=e12]:
                - link [ref=e13] [cursor=pointer]:
                  - /url: "#"
                  - text: All Items
                - link [ref=e14] [cursor=pointer]:
                  - /url: https://saucelabs.com/
                  - text: About
                - link [ref=e15] [cursor=pointer]:
                  - /url: "#"
                  - text: Logout
                - link [ref=e16] [cursor=pointer]:
                  - /url: "#"
                  - text: Reset App State
              - generic [ref=e17]:
                - button [ref=e18] [cursor=pointer]: Close Menu
                - img [ref=e19]
        - generic [ref=e21]: Swag Labs
      - generic [ref=e24]:
        - generic [ref=e25]: Products
        - generic [ref=e27] [cursor=pointer]:
          - generic [ref=e28]: Name (A to Z)
          - combobox [ref=e29]:
            - option "Name (A to Z)" [selected]
            - option "Name (Z to A)"
            - option "Price (low to high)"
            - option "Price (high to low)"
    - generic [ref=e33]:
      - generic [ref=e34]:
        - link "Sauce Labs Backpack" [ref=e36] [cursor=pointer]:
          - /url: "#"
          - img "Sauce Labs Backpack" [ref=e37]
        - generic [ref=e38]:
          - generic [ref=e39]:
            - link "Sauce Labs Backpack" [ref=e40] [cursor=pointer]:
              - /url: "#"
              - generic [ref=e41]: Sauce Labs Backpack
            - generic [ref=e42]: carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection.
          - generic [ref=e43]:
            - generic [ref=e44]: $91.58
            - button "Add to cart" [ref=e45] [cursor=pointer]
      - generic [ref=e46]:
        - link "Sauce Labs Bike Light" [ref=e48] [cursor=pointer]:
          - /url: "#"
          - img "Sauce Labs Bike Light" [ref=e49]
        - generic [ref=e50]:
          - generic [ref=e51]:
            - link "Sauce Labs Bike Light" [ref=e52] [cursor=pointer]:
              - /url: "#"
              - generic [ref=e53]: Sauce Labs Bike Light
            - generic [ref=e54]: A red light isn't the desired state in testing but it sure helps when riding your bike at night. Water-resistant with 3 lighting modes, 1 AAA battery included.
          - generic [ref=e55]:
            - generic [ref=e56]: $81.1
            - button "Add to cart" [ref=e57] [cursor=pointer]
      - generic [ref=e58]:
        - link "Sauce Labs Bolt T-Shirt" [ref=e60] [cursor=pointer]:
          - /url: "#"
          - img "Sauce Labs Bolt T-Shirt" [ref=e61]
        - generic [ref=e62]:
          - generic [ref=e63]:
            - link "Sauce Labs Bolt T-Shirt" [ref=e64] [cursor=pointer]:
              - /url: "#"
              - generic [ref=e65]: Sauce Labs Bolt T-Shirt
            - generic [ref=e66]: Get your testing superhero on with the Sauce Labs bolt T-shirt. From American Apparel, 100% ringspun combed cotton, heather gray with red bolt.
          - generic [ref=e67]:
            - generic [ref=e68]: $40
            - button "Add to cart" [ref=e69] [cursor=pointer]
      - generic [ref=e70]:
        - link "Sauce Labs Fleece Jacket" [ref=e72] [cursor=pointer]:
          - /url: "#"
          - img "Sauce Labs Fleece Jacket" [ref=e73]
        - generic [ref=e74]:
          - generic [ref=e75]:
            - link "Sauce Labs Fleece Jacket" [ref=e76] [cursor=pointer]:
              - /url: "#"
              - generic [ref=e77]: Sauce Labs Fleece Jacket
            - generic [ref=e78]: It's not every day that you come across a midweight quarter-zip fleece jacket capable of handling everything from a relaxing day outdoors to a busy day at the office.
          - generic [ref=e79]:
            - generic [ref=e80]: $18.54
            - button "Add to cart" [ref=e81] [cursor=pointer]
      - generic [ref=e82]:
        - link "Sauce Labs Onesie" [ref=e84] [cursor=pointer]:
          - /url: "#"
          - img "Sauce Labs Onesie" [ref=e85]
        - generic [ref=e86]:
          - generic [ref=e87]:
            - link "Sauce Labs Onesie" [ref=e88] [cursor=pointer]:
              - /url: "#"
              - generic [ref=e89]: Sauce Labs Onesie
            - generic [ref=e90]: Rib snap infant onesie for the junior automation engineer in development. Reinforced 3-snap bottom closure, two-needle hemmed sleeved and bottom won't unravel.
          - generic [ref=e91]:
            - generic [ref=e92]: $70.21
            - button "Add to cart" [ref=e93] [cursor=pointer]
      - generic [ref=e94]:
        - link "Test.allTheThings() T-Shirt (Red)" [ref=e96] [cursor=pointer]:
          - /url: "#"
          - img "Test.allTheThings() T-Shirt (Red)" [ref=e97]
        - generic [ref=e98]:
          - generic [ref=e99]:
            - link "Test.allTheThings() T-Shirt (Red)" [ref=e100] [cursor=pointer]:
              - /url: "#"
              - generic [ref=e101]: Test.allTheThings() T-Shirt (Red)
            - generic [ref=e102]: This classic Sauce Labs t-shirt is perfect to wear when cozying up to your keyboard to automate a few tests. Super-soft and comfy ringspun combed cotton.
          - generic [ref=e103]:
            - generic [ref=e104]: $9.96
            - button "Add to cart" [ref=e105] [cursor=pointer]
  - contentinfo [ref=e106]:
    - list [ref=e107]:
      - listitem [ref=e108]:
        - link "Twitter" [ref=e109] [cursor=pointer]:
          - /url: https://twitter.com/saucelabs
      - listitem [ref=e110]:
        - link "Facebook" [ref=e111] [cursor=pointer]:
          - /url: https://www.facebook.com/saucelabs
      - listitem [ref=e112]:
        - link "LinkedIn" [ref=e113] [cursor=pointer]:
          - /url: https://www.linkedin.com/company/sauce-labs/
    - generic [ref=e114]: © 2026 Sauce Labs. All Rights Reserved. Terms of Service | Privacy Policy
```

# Test source

```ts
  1  | import { test, expect } from '../fixtures/fixtures';
  2  | 
  3  | // Assertions reflect what a HEALTHY site should look like.
  4  | // Failing tests are bug reports, not test errors.
  5  | // Run with: TEST_USER=visual_user npx playwright test tests/visual-integrity.spec.ts
  6  | 
  7  | test.beforeEach(async ({ loginPage, inventoryPage, testUser }) => {
  8  |   await loginPage.goto();
  9  |   await loginPage.login(testUser.username, testUser.password);
  10 |   await expect(inventoryPage.heading).toBeVisible();
  11 | });
  12 | 
  13 | test('product prices are stable across navigation', async ({ page, inventoryPage }) => {
  14 |   // Capture the baseline prices on the inventory page
  15 |   const pricesBeforeCart = await inventoryPage.allProductPrices();
  16 | 
  17 |   // Navigate to the cart and back — prices must not change
  18 |   await inventoryPage.navigateToCart();
  19 |   await page.goBack();
  20 |   await expect(inventoryPage.heading).toBeVisible();
  21 |   const pricesAfterCart = await inventoryPage.allProductPrices();
  22 |   expect(pricesAfterCart, 'Prices changed after visiting the cart').toEqual(pricesBeforeCart);
  23 | 
  24 |   // Navigate to the About page (external) and back — prices must still not change
  25 |   await inventoryPage.clickAbout();
  26 |   await page.goBack();
  27 |   await expect(inventoryPage.heading).toBeVisible();
  28 |   const pricesAfterAbout = await inventoryPage.allProductPrices();
  29 |   expect(pricesAfterAbout, 'Prices changed after visiting the About page').toEqual(pricesBeforeCart);
  30 | });
  31 | 
  32 | test('cart icon and burger menu are visible', async ({ inventoryPage }) => {
  33 |   await expect(inventoryPage.cartIcon).toBeVisible();
  34 |   await expect(inventoryPage.burgerMenuButton).toBeVisible();
  35 | });
  36 | 
  37 | test('cart icon is positioned inside the page header', async ({ page }) => {
  38 |   // visual_user can move the cart icon outside the header — existence alone is not enough
  39 |   const cartIsInHeader = await page.evaluate(() => {
  40 |     const cart   = document.querySelector('[data-test="shopping-cart-link"]');
  41 |     const header = document.querySelector('.primary_header');
  42 |     if (!cart || !header) return false;
  43 |     const c = cart.getBoundingClientRect();
  44 |     const h = header.getBoundingClientRect();
  45 |     return c.top >= h.top && c.bottom <= h.bottom &&
  46 |            c.left >= h.left && c.right <= h.right;
  47 |   });
> 48 |   expect(cartIsInHeader, 'Cart icon has moved outside the page header').toBe(true);
     |                                                                         ^ Error: Cart icon has moved outside the page header
  49 | });
  50 | 
  51 | test('burger menu icon is not rotated', async ({ page }) => {
  52 |   // visual_user applies transform: rotate() to the img.bm-icon inside the burger button.
  53 |   // The button element itself has no transform — the icon image does.
  54 |   // matrix(a, b, c, d, tx, ty): b = sin(angle), non-zero means the icon is rotated.
  55 |   const sinAngle = await page.evaluate(() => {
  56 |     const icon = document.querySelector('.bm-burger-button img.bm-icon');
  57 |     if (!icon) return 0;
  58 |     const t = getComputedStyle(icon).transform;
  59 |     if (!t || t === 'none') return 0;
  60 |     const values = t.match(/matrix\(([^)]+)\)/)?.[1].split(',').map(Number);
  61 |     return values ? Math.abs(values[1]) : 0;
  62 |   });
  63 |   expect(sinAngle, `Burger menu icon is rotated (sin of angle = ${sinAngle.toFixed(4)})`).toBeLessThan(0.01);
  64 | });
  65 | 
```