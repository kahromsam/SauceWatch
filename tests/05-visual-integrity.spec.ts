import { test, expect } from '../fixtures/fixtures';

// Assertions reflect what a HEALTHY site should look like.
// Failing tests are bug reports, not test errors.
// Run with: TEST_USER=visual_user npx playwright test tests/visual-integrity.spec.ts

test.beforeEach(async ({ loginPage, inventoryPage, testUser }) => {
  await loginPage.goto();
  await loginPage.login(testUser.username, testUser.password);
  await expect(inventoryPage.heading).toBeVisible();
});

test('product prices are stable across navigation', async ({ page, inventoryPage }) => {
  // Capture the baseline prices on the inventory page
  const pricesBeforeCart = await inventoryPage.allProductPrices();

  // Navigate to the cart and back — prices must not change
  await inventoryPage.navigateToCart();
  await page.goBack();
  await expect(inventoryPage.heading).toBeVisible();
  const pricesAfterCart = await inventoryPage.allProductPrices();
  expect(pricesAfterCart, 'Prices changed after visiting the cart').toEqual(pricesBeforeCart);

  // Navigate to the About page (external) and back — prices must still not change
  await inventoryPage.clickAbout();
  await page.goBack();
  await expect(inventoryPage.heading).toBeVisible();
  const pricesAfterAbout = await inventoryPage.allProductPrices();
  expect(pricesAfterAbout, 'Prices changed after visiting the About page').toEqual(pricesBeforeCart);
});

test('core navigation chrome is visible on the inventory page', async ({ inventoryPage }) => {
  // The cart icon and burger menu must always be present — their absence breaks navigation
  await expect(inventoryPage.cartIcon).toBeVisible();
  await expect(inventoryPage.burgerMenuButton).toBeVisible();
});
