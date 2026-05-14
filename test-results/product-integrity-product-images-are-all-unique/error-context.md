# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: product-integrity.spec.ts >> product images are all unique
- Location: tests\product-integrity.spec.ts:14:5

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: 6
Received: 1
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
                  - /url: https://saucelabs.com/error/404
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
            - generic [ref=e44]: $29.99
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
            - generic [ref=e56]: $9.99
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
            - generic [ref=e68]: $15.99
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
            - generic [ref=e80]: $49.99
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
            - generic [ref=e92]: $7.99
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
            - generic [ref=e104]: $15.99
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
  2  | import { users } from '../test-data/users';
  3  | 
  4  | // problem_user is known to have broken product images, garbled text, and layout bugs.
  5  | // Every assertion below reflects what a HEALTHY site should look like.
  6  | // Failing tests here are bug reports, not test errors.
  7  | 
  8  | test.beforeEach(async ({ loginPage, inventoryPage }) => {
  9  |   await loginPage.goto();
  10 |   await loginPage.login(users.problem_user.username, users.problem_user.password);
  11 |   await expect(inventoryPage.heading).toBeVisible();
  12 | });
  13 | 
  14 | test('product images are all unique', async ({ inventoryPage }) => {
  15 |   // Each product should display its own image — not the same placeholder repeated
  16 |   const srcs = await inventoryPage.allProductImages();
  17 |   const uniqueSrcs = new Set(srcs);
  18 | 
> 19 |   expect(uniqueSrcs.size).toBe(srcs.length);
     |                           ^ Error: expect(received).toBe(expected) // Object.is equality
  20 | });
  21 | 
  22 | test('product titles do not contain raw code artefacts', async ({ inventoryPage }) => {
  23 |   // Titles that look like bare function identifiers (e.g. "sauce-labs-backpack()") are
  24 |   // data pipeline leaks — a real product name always has spaces and mixed casing
  25 |   const titles = await inventoryPage.allProductTitles();
  26 | 
  27 |   titles.forEach(title => {
  28 |     // A code-artefact title has no spaces and ends with ()
  29 |     expect(title, `Suspicious title: "${title}"`).not.toMatch(/^[^\s]+\(\)$/);
  30 |   });
  31 | });
  32 | 
  33 | test('product descriptions do not contain raw code artefacts', async ({ inventoryPage }) => {
  34 |   const descriptions = await inventoryPage.allProductDescriptions();
  35 | 
  36 |   descriptions.forEach(description => {
  37 |     expect(description, `Suspicious description: "${description}"`).not.toMatch(/^[^\s]+\(\)$/);
  38 |   });
  39 | });
  40 | 
  41 | test('product title text is left-aligned', async ({ inventoryPage }) => {
  42 |   // Centered product titles indicate a CSS regression introduced for problem_user
  43 |   const textAligns = await inventoryPage.productTitles.evaluateAll(
  44 |     els => els.map(el => getComputedStyle(el).textAlign)
  45 |   );
  46 | 
  47 |   textAligns.forEach(align => {
  48 |     // Browsers return "start" (CSS logical) or "left" for normal left-aligned text.
  49 |     // The bug is explicit centering — reject "center", accept either left variant.
  50 |     expect(align, `Expected left-aligned text but got "${align}"`).not.toBe('center');
  51 |   });
  52 | });
  53 | 
  54 | test('product descriptions do not overflow outside their card', async ({ inventoryPage }) => {
  55 |   // If a description is taller than its card, layout is broken
  56 |   const overflows = await inventoryPage.productCards.evaluateAll(cards =>
  57 |     cards.map(card => {
  58 |       const desc = card.querySelector('.inventory_item_desc');
  59 |       if (!desc) return false;
  60 |       return desc.getBoundingClientRect().bottom > card.getBoundingClientRect().bottom;
  61 |     })
  62 |   );
  63 | 
  64 |   overflows.forEach((overflow, i) => {
  65 |     expect(overflow, `Card ${i + 1} description overflows its container`).toBe(false);
  66 |   });
  67 | });
  68 | 
```