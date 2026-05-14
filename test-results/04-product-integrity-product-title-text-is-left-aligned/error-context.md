# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: 04-product-integrity.spec.ts >> product title text is left-aligned
- Location: tests\04-product-integrity.spec.ts:39:5

# Error details

```
Error: Card 3 title has unexpected alignment "right" — expected left or start

expect(received).toMatch(expected)

Expected pattern: /^(left|start)$/
Received string:  "right"
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
            - generic [ref=e44]: $38.05
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
            - generic [ref=e56]: $82.39
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
            - generic [ref=e68]: $39.16
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
            - generic [ref=e80]: $24.23
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
            - generic [ref=e92]: $17.11
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
            - generic [ref=e104]: $54.68
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
  1   | import { test, expect } from '../fixtures/fixtures';
  2   | 
  3   | // Assertions reflect what a HEALTHY site should look like.
  4   | // Failing tests are bug reports, not test errors.
  5   | // Run with: TEST_USER=problem_user npx playwright test tests/product-integrity.spec.ts
  6   | // Run with: TEST_USER=visual_user  npx playwright test tests/product-integrity.spec.ts
  7   | 
  8   | test.beforeEach(async ({ loginPage, inventoryPage, testUser }) => {
  9   |   await loginPage.goto();
  10  |   await loginPage.login(testUser.username, testUser.password);
  11  |   await expect(inventoryPage.heading).toBeVisible();
  12  | });
  13  | 
  14  | test('product images are all unique', async ({ inventoryPage }) => {
  15  |   // Each product should display its own image — not the same placeholder repeated
  16  |   const srcs = await inventoryPage.allProductImages();
  17  |   const uniqueSrcs = new Set(srcs);
  18  | 
  19  |   expect(uniqueSrcs.size).toBe(srcs.length);
  20  | });
  21  | 
  22  | test('product titles do not contain raw code artefacts', async ({ inventoryPage }) => {
  23  |   // word() anywhere in a product name is a method-call leaking from code into product data
  24  |   const titles = await inventoryPage.allProductTitles();
  25  | 
  26  |   titles.forEach(title => {
  27  |     expect(title, `Suspicious title: "${title}"`).not.toMatch(/\w\(\)/);
  28  |   });
  29  | });
  30  | 
  31  | test('product descriptions do not contain raw code artefacts', async ({ inventoryPage }) => {
  32  |   const descriptions = await inventoryPage.allProductDescriptions();
  33  | 
  34  |   descriptions.forEach(description => {
  35  |     expect(description, `Suspicious description: "${description}"`).not.toMatch(/\w\(\)/);
  36  |   });
  37  | });
  38  | 
  39  | test('product title text is left-aligned', async ({ inventoryPage }) => {
  40  |   // visual_user adds class "align_right" to some titles, setting text-align: right.
  41  |   // Any non-left/start alignment on the title element is a bug.
  42  |   const alignResults = await inventoryPage.productCards.evaluateAll(cards =>
  43  |     cards.map((card, i) => {
  44  |       const title = card.querySelector('.inventory_item_name');
  45  |       if (!title) return { index: i, align: 'start' };
  46  |       const align = getComputedStyle(title).textAlign;
  47  |       return { index: i, align };
  48  |     })
  49  |   );
  50  | 
  51  |   alignResults.forEach(({ index, align }) => {
  52  |     expect(
  53  |       align,
  54  |       `Card ${index + 1} title has unexpected alignment "${align}" — expected left or start`
> 55  |     ).toMatch(/^(left|start)$/);
      |       ^ Error: Card 3 title has unexpected alignment "right" — expected left or start
  56  |   });
  57  | });
  58  | 
  59  | test('product descriptions do not overflow outside their card', async ({ inventoryPage }) => {
  60  |   // If a description is taller than its card, layout is broken
  61  |   const overflows = await inventoryPage.productCards.evaluateAll(cards =>
  62  |     cards.map(card => {
  63  |       const desc = card.querySelector('.inventory_item_desc');
  64  |       if (!desc) return false;
  65  |       return desc.getBoundingClientRect().bottom > card.getBoundingClientRect().bottom;
  66  |     })
  67  |   );
  68  | 
  69  |   overflows.forEach((overflow, i) => {
  70  |     expect(overflow, `Card ${i + 1} description overflows its container`).toBe(false);
  71  |   });
  72  | });
  73  | 
  74  | test('every add-to-cart button works and updates the cart badge', async ({ inventoryPage }) => {
  75  |   // Click every product's Add to cart button in sequence and verify:
  76  |   // 1. The cart badge increments to the expected count
  77  |   // 2. The button switches to "Remove" — confirming the item was actually added
  78  |   // problem_user has broken buttons on some products; those will fail here
  79  |   const titles = await inventoryPage.allProductTitles();
  80  | 
  81  |   for (let i = 0; i < titles.length; i++) {
  82  |     const name = titles[i];
  83  |     await inventoryPage.addToCartButton(name).click();
  84  |     await expect(inventoryPage.cartBadge, `Badge did not increment after adding "${name}"`).toHaveText(String(i + 1));
  85  |     await expect(inventoryPage.removeButton(name), `Remove button did not appear for "${name}"`).toBeVisible();
  86  |   }
  87  | });
  88  | 
  89  | test('add-to-cart buttons are within their product card', async ({ inventoryPage }) => {
  90  |   // A button rendered outside its card boundaries is a layout bug (visible on visual_user)
  91  |   const overflows = await inventoryPage.productCards.evaluateAll(cards =>
  92  |     cards.map(card => {
  93  |       const button = card.querySelector('button');
  94  |       if (!button) return false;
  95  |       const btnRect = button.getBoundingClientRect();
  96  |       const cardRect = card.getBoundingClientRect();
  97  |       return (
  98  |         btnRect.bottom > cardRect.bottom ||
  99  |         btnRect.top < cardRect.top ||
  100 |         btnRect.right > cardRect.right ||
  101 |         btnRect.left < cardRect.left
  102 |       );
  103 |     })
  104 |   );
  105 | 
  106 |   overflows.forEach((overflow, i) => {
  107 |     expect(overflow, `Card ${i + 1} button is outside its product card`).toBe(false);
  108 |   });
  109 | });
  110 | 
```