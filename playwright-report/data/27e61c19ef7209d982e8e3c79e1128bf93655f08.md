# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: 04-product-integrity.spec.ts >> every add-to-cart button works and updates the cart badge
- Location: tests\04-product-integrity.spec.ts:78:5

# Error details

```
Error: Badge did not increment after adding "Sauce Labs Bolt T-Shirt"

expect(locator).toHaveText(expected) failed

Locator:  getByTestId('shopping-cart-badge')
Expected: "3"
Received: "2"
Timeout:  5000ms

Call log:
  - Badge did not increment after adding "Sauce Labs Bolt T-Shirt" with timeout 5000ms
  - waiting for getByTestId('shopping-cart-badge')
    14 × locator resolved to <span class="shopping_cart_badge" data-test="shopping-cart-badge">2</span>
       - unexpected value "2"

```

```yaml
- text: "2"
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
> 88  |     await expect(inventoryPage.cartBadge, `Badge did not increment after adding "${name}"`).toHaveText(String(i + 1));
      |                                                                                             ^ Error: Badge did not increment after adding "Sauce Labs Bolt T-Shirt"
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