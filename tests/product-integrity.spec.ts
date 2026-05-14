import { test, expect } from '../fixtures/fixtures';
import { users } from '../test-data/users';

// problem_user is known to have broken product images, garbled text, and layout bugs.
// Every assertion below reflects what a HEALTHY site should look like.
// Failing tests here are bug reports, not test errors.

test.beforeEach(async ({ loginPage, inventoryPage }) => {
  await loginPage.goto();
  await loginPage.login(users.problem_user.username, users.problem_user.password);
  await expect(inventoryPage.heading).toBeVisible();
});

test('product images are all unique', async ({ inventoryPage }) => {
  // Each product should display its own image — not the same placeholder repeated
  const srcs = await inventoryPage.allProductImages();
  const uniqueSrcs = new Set(srcs);

  expect(uniqueSrcs.size).toBe(srcs.length);
});

test('product titles do not contain raw code artefacts', async ({ inventoryPage }) => {
  // Titles that look like bare function identifiers (e.g. "sauce-labs-backpack()") are
  // data pipeline leaks — a real product name always has spaces and mixed casing
  const titles = await inventoryPage.allProductTitles();

  titles.forEach(title => {
    // A code-artefact title has no spaces and ends with ()
    expect(title, `Suspicious title: "${title}"`).not.toMatch(/^[^\s]+\(\)$/);
  });
});

test('product descriptions do not contain raw code artefacts', async ({ inventoryPage }) => {
  const descriptions = await inventoryPage.allProductDescriptions();

  descriptions.forEach(description => {
    expect(description, `Suspicious description: "${description}"`).not.toMatch(/^[^\s]+\(\)$/);
  });
});

test('product title text is left-aligned', async ({ inventoryPage }) => {
  // Centered product titles indicate a CSS regression introduced for problem_user
  const textAligns = await inventoryPage.productTitles.evaluateAll(
    els => els.map(el => getComputedStyle(el).textAlign)
  );

  textAligns.forEach(align => {
    // Browsers return "start" (CSS logical) or "left" for normal left-aligned text.
    // The bug is explicit centering — reject "center", accept either left variant.
    expect(align, `Expected left-aligned text but got "${align}"`).not.toBe('center');
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
