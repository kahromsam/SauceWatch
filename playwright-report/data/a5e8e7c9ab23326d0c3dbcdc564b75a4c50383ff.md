# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: 04-product-integrity.spec.ts >> product images are all unique
- Location: tests\04-product-integrity.spec.ts:14:5

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
        - generic [ref=e7]:
          - button "Open Menu" [ref=e8] [cursor=pointer]
          - img "Open Menu" [ref=e9]
        - generic [ref=e11]: Swag Labs
      - generic [ref=e14]:
        - generic [ref=e15]: Products
        - generic [ref=e17] [cursor=pointer]:
          - generic [ref=e18]: Name (A to Z)
          - combobox [ref=e19]:
            - option "Name (A to Z)" [selected]
            - option "Name (Z to A)"
            - option "Price (low to high)"
            - option "Price (high to low)"
    - generic [ref=e23]:
      - generic [ref=e24]:
        - link "Sauce Labs Backpack" [ref=e26] [cursor=pointer]:
          - /url: "#"
          - img "Sauce Labs Backpack" [ref=e27]
        - generic [ref=e28]:
          - generic [ref=e29]:
            - link "Sauce Labs Backpack" [ref=e30] [cursor=pointer]:
              - /url: "#"
              - generic [ref=e31]: Sauce Labs Backpack
            - generic [ref=e32]: carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection.
          - generic [ref=e33]:
            - generic [ref=e34]: $29.99
            - button "Add to cart" [ref=e35] [cursor=pointer]
      - generic [ref=e36]:
        - link "Sauce Labs Bike Light" [ref=e38] [cursor=pointer]:
          - /url: "#"
          - img "Sauce Labs Bike Light" [ref=e39]
        - generic [ref=e40]:
          - generic [ref=e41]:
            - link "Sauce Labs Bike Light" [ref=e42] [cursor=pointer]:
              - /url: "#"
              - generic [ref=e43]: Sauce Labs Bike Light
            - generic [ref=e44]: A red light isn't the desired state in testing but it sure helps when riding your bike at night. Water-resistant with 3 lighting modes, 1 AAA battery included.
          - generic [ref=e45]:
            - generic [ref=e46]: $9.99
            - button "Add to cart" [ref=e47] [cursor=pointer]
      - generic [ref=e48]:
        - link "Sauce Labs Bolt T-Shirt" [ref=e50] [cursor=pointer]:
          - /url: "#"
          - img "Sauce Labs Bolt T-Shirt" [ref=e51]
        - generic [ref=e52]:
          - generic [ref=e53]:
            - link "Sauce Labs Bolt T-Shirt" [ref=e54] [cursor=pointer]:
              - /url: "#"
              - generic [ref=e55]: Sauce Labs Bolt T-Shirt
            - generic [ref=e56]: Get your testing superhero on with the Sauce Labs bolt T-shirt. From American Apparel, 100% ringspun combed cotton, heather gray with red bolt.
          - generic [ref=e57]:
            - generic [ref=e58]: $15.99
            - button "Add to cart" [ref=e59] [cursor=pointer]
      - generic [ref=e60]:
        - link "Sauce Labs Fleece Jacket" [ref=e62] [cursor=pointer]:
          - /url: "#"
          - img "Sauce Labs Fleece Jacket" [ref=e63]
        - generic [ref=e64]:
          - generic [ref=e65]:
            - link "Sauce Labs Fleece Jacket" [ref=e66] [cursor=pointer]:
              - /url: "#"
              - generic [ref=e67]: Sauce Labs Fleece Jacket
            - generic [ref=e68]: It's not every day that you come across a midweight quarter-zip fleece jacket capable of handling everything from a relaxing day outdoors to a busy day at the office.
          - generic [ref=e69]:
            - generic [ref=e70]: $49.99
            - button "Add to cart" [ref=e71] [cursor=pointer]
      - generic [ref=e72]:
        - link "Sauce Labs Onesie" [ref=e74] [cursor=pointer]:
          - /url: "#"
          - img "Sauce Labs Onesie" [ref=e75]
        - generic [ref=e76]:
          - generic [ref=e77]:
            - link "Sauce Labs Onesie" [ref=e78] [cursor=pointer]:
              - /url: "#"
              - generic [ref=e79]: Sauce Labs Onesie
            - generic [ref=e80]: Rib snap infant onesie for the junior automation engineer in development. Reinforced 3-snap bottom closure, two-needle hemmed sleeved and bottom won't unravel.
          - generic [ref=e81]:
            - generic [ref=e82]: $7.99
            - button "Add to cart" [ref=e83] [cursor=pointer]
      - generic [ref=e84]:
        - link "Test.allTheThings() T-Shirt (Red)" [ref=e86] [cursor=pointer]:
          - /url: "#"
          - img "Test.allTheThings() T-Shirt (Red)" [ref=e87]
        - generic [ref=e88]:
          - generic [ref=e89]:
            - link "Test.allTheThings() T-Shirt (Red)" [ref=e90] [cursor=pointer]:
              - /url: "#"
              - generic [ref=e91]: Test.allTheThings() T-Shirt (Red)
            - generic [ref=e92]: This classic Sauce Labs t-shirt is perfect to wear when cozying up to your keyboard to automate a few tests. Super-soft and comfy ringspun combed cotton.
          - generic [ref=e93]:
            - generic [ref=e94]: $15.99
            - button "Add to cart" [ref=e95] [cursor=pointer]
  - contentinfo [ref=e96]:
    - list [ref=e97]:
      - listitem [ref=e98]:
        - link "Twitter" [ref=e99] [cursor=pointer]:
          - /url: https://twitter.com/saucelabs
      - listitem [ref=e100]:
        - link "Facebook" [ref=e101] [cursor=pointer]:
          - /url: https://www.facebook.com/saucelabs
      - listitem [ref=e102]:
        - link "LinkedIn" [ref=e103] [cursor=pointer]:
          - /url: https://www.linkedin.com/company/sauce-labs/
    - generic [ref=e104]: © 2026 Sauce Labs. All Rights Reserved. Terms of Service | Privacy Policy
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
> 19  |   expect(uniqueSrcs.size).toBe(srcs.length);
      |                           ^ Error: expect(received).toBe(expected) // Object.is equality
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
  40  |   // Walk every ancestor from the title up to (but not including) the card boundary.
  41  |   // visual_user applies text-align: center several levels above .inventory_item_name,
  42  |   // so a single-level parent check is not enough.
  43  |   const alignResults = await inventoryPage.productCards.evaluateAll(cards =>
  44  |     cards.map((card, i) => {
  45  |       const title = card.querySelector('.inventory_item_name');
  46  |       if (!title) return { index: i, centered: false };
  47  |       let node: Element | null = title;
  48  |       while (node && node !== card) {
  49  |         if (getComputedStyle(node).textAlign === 'center') {
  50  |           return { index: i, centered: true };
  51  |         }
  52  |         node = node.parentElement;
  53  |       }
  54  |       return { index: i, centered: false };
  55  |     })
  56  |   );
  57  | 
  58  |   alignResults.forEach(({ index, centered }) => {
  59  |     expect(centered, `Card ${index + 1} title is centered instead of left-aligned`).toBe(false);
  60  |   });
  61  | });
  62  | 
  63  | test('product descriptions do not overflow outside their card', async ({ inventoryPage }) => {
  64  |   // If a description is taller than its card, layout is broken
  65  |   const overflows = await inventoryPage.productCards.evaluateAll(cards =>
  66  |     cards.map(card => {
  67  |       const desc = card.querySelector('.inventory_item_desc');
  68  |       if (!desc) return false;
  69  |       return desc.getBoundingClientRect().bottom > card.getBoundingClientRect().bottom;
  70  |     })
  71  |   );
  72  | 
  73  |   overflows.forEach((overflow, i) => {
  74  |     expect(overflow, `Card ${i + 1} description overflows its container`).toBe(false);
  75  |   });
  76  | });
  77  | 
  78  | test('every add-to-cart button works and updates the cart badge', async ({ inventoryPage }) => {
  79  |   // Click every product's Add to cart button in sequence and verify:
  80  |   // 1. The cart badge increments to the expected count
  81  |   // 2. The button switches to "Remove" — confirming the item was actually added
  82  |   // problem_user has broken buttons on some products; those will fail here
  83  |   const titles = await inventoryPage.allProductTitles();
  84  | 
  85  |   for (let i = 0; i < titles.length; i++) {
  86  |     const name = titles[i];
  87  |     await inventoryPage.addToCartButton(name).click();
  88  |     await expect(inventoryPage.cartBadge, `Badge did not increment after adding "${name}"`).toHaveText(String(i + 1));
  89  |     await expect(inventoryPage.removeButton(name), `Remove button did not appear for "${name}"`).toBeVisible();
  90  |   }
  91  | });
  92  | 
  93  | test('add-to-cart buttons are within their product card', async ({ inventoryPage }) => {
  94  |   // A button rendered outside its card boundaries is a layout bug (visible on visual_user)
  95  |   const overflows = await inventoryPage.productCards.evaluateAll(cards =>
  96  |     cards.map(card => {
  97  |       const button = card.querySelector('button');
  98  |       if (!button) return false;
  99  |       const btnRect = button.getBoundingClientRect();
  100 |       const cardRect = card.getBoundingClientRect();
  101 |       return (
  102 |         btnRect.bottom > cardRect.bottom ||
  103 |         btnRect.top < cardRect.top ||
  104 |         btnRect.right > cardRect.right ||
  105 |         btnRect.left < cardRect.left
  106 |       );
  107 |     })
  108 |   );
  109 | 
  110 |   overflows.forEach((overflow, i) => {
  111 |     expect(overflow, `Card ${i + 1} button is outside its product card`).toBe(false);
  112 |   });
  113 | });
  114 | 
```