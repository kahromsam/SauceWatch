import { test, expect } from '../fixtures/fixtures';

// Assertions reflect what a HEALTHY site should look like.
// Failing tests are bug reports, not test errors.
// Run with: TEST_USER=problem_user npx playwright test tests/product-integrity.spec.ts
// Run with: TEST_USER=visual_user  npx playwright test tests/product-integrity.spec.ts

test.beforeEach(async ({ loginPage, inventoryPage, testUser }) => {
  await loginPage.goto();
  await loginPage.login(testUser.username, testUser.password);
  await expect(inventoryPage.heading).toBeVisible();
});

test('product images are all unique', async ({ inventoryPage }) => {
  // Each product should display its own image — not the same placeholder repeated
  const srcs = await inventoryPage.allProductImages();
  const uniqueSrcs = new Set(srcs);

  expect(uniqueSrcs.size).toBe(srcs.length);
});

test('product titles do not contain raw code artefacts', async ({ inventoryPage }) => {
  // word() anywhere in a product name is a method-call leaking from code into product data
  const titles = await inventoryPage.allProductTitles();

  titles.forEach(title => {
    expect(title, `Suspicious title: "${title}"`).not.toMatch(/\w\(\)/);
  });
});

test('product descriptions do not contain raw code artefacts', async ({ inventoryPage }) => {
  const descriptions = await inventoryPage.allProductDescriptions();

  descriptions.forEach(description => {
    expect(description, `Suspicious description: "${description}"`).not.toMatch(/\w\(\)/);
  });
});

test('product title text is left-aligned', async ({ inventoryPage }) => {
  // Walk every ancestor from the title up to (but not including) the card boundary.
  // visual_user applies text-align: center several levels above .inventory_item_name,
  // so a single-level parent check is not enough.
  const alignResults = await inventoryPage.productCards.evaluateAll(cards =>
    cards.map((card, i) => {
      const title = card.querySelector('.inventory_item_name');
      if (!title) return { index: i, centered: false };
      let node: Element | null = title;
      while (node && node !== card) {
        if (getComputedStyle(node).textAlign === 'center') {
          return { index: i, centered: true };
        }
        node = node.parentElement;
      }
      return { index: i, centered: false };
    })
  );

  alignResults.forEach(({ index, centered }) => {
    expect(centered, `Card ${index + 1} title is centered instead of left-aligned`).toBe(false);
  });
});

test('product descriptions do not overflow outside their card', async ({ inventoryPage }) => {
  // If a description is taller than its card, layout is broken
  const overflows = await inventoryPage.productCards.evaluateAll(cards =>
    cards.map(card => {
      const desc = card.querySelector('.inventory_item_desc');
      if (!desc) return false;
      return desc.getBoundingClientRect().bottom > card.getBoundingClientRect().bottom;
    })
  );

  overflows.forEach((overflow, i) => {
    expect(overflow, `Card ${i + 1} description overflows its container`).toBe(false);
  });
});

test('every add-to-cart button works and updates the cart badge', async ({ inventoryPage }) => {
  // Click every product's Add to cart button in sequence and verify:
  // 1. The cart badge increments to the expected count
  // 2. The button switches to "Remove" — confirming the item was actually added
  // problem_user has broken buttons on some products; those will fail here
  const titles = await inventoryPage.allProductTitles();

  for (let i = 0; i < titles.length; i++) {
    const name = titles[i];
    await inventoryPage.addToCartButton(name).click();
    await expect(inventoryPage.cartBadge, `Badge did not increment after adding "${name}"`).toHaveText(String(i + 1));
    await expect(inventoryPage.removeButton(name), `Remove button did not appear for "${name}"`).toBeVisible();
  }
});

test('add-to-cart buttons are within their product card', async ({ inventoryPage }) => {
  // A button rendered outside its card boundaries is a layout bug (visible on visual_user)
  const overflows = await inventoryPage.productCards.evaluateAll(cards =>
    cards.map(card => {
      const button = card.querySelector('button');
      if (!button) return false;
      const btnRect = button.getBoundingClientRect();
      const cardRect = card.getBoundingClientRect();
      return (
        btnRect.bottom > cardRect.bottom ||
        btnRect.top < cardRect.top ||
        btnRect.right > cardRect.right ||
        btnRect.left < cardRect.left
      );
    })
  );

  overflows.forEach((overflow, i) => {
    expect(overflow, `Card ${i + 1} button is outside its product card`).toBe(false);
  });
});
