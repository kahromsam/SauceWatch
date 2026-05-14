import { test, expect } from '../fixtures/fixtures';

const PRODUCT = 'Sauce Labs Backpack';

test.beforeEach(async ({ loginPage, inventoryPage, testUser }) => {
  await loginPage.goto();
  await loginPage.login(testUser.username, testUser.password);
  await expect(inventoryPage.heading).toBeVisible();
});

test('all sort options produce the correct order', async ({ inventoryPage }) => {
  // A-Z: titles must be in ascending alphabetical order
  await inventoryPage.sortBy('az');
  const titlesAZ = await inventoryPage.allProductTitles();
  expect(titlesAZ).toEqual([...titlesAZ].sort((a, b) => a.localeCompare(b)));

  // Z-A: "Test.allTheThings() T-Shirt (Red)" should be first
  await inventoryPage.sortBy('za');
  const firstZA = await inventoryPage.firstProductName();
  expect(firstZA.charAt(0).toUpperCase()).toBe('T');

  // Price low→high: numeric values must be non-decreasing
  await inventoryPage.sortBy('lohi');
  const pricesLoHi = (await inventoryPage.allProductPrices()).map(p => parseFloat(p.replace('$', '')));
  expect(pricesLoHi).toEqual([...pricesLoHi].sort((a, b) => a - b));

  // Price high→low: numeric values must be non-increasing
  await inventoryPage.sortBy('hilo');
  const pricesHiLo = (await inventoryPage.allProductPrices()).map(p => parseFloat(p.replace('$', '')));
  expect(pricesHiLo).toEqual([...pricesHiLo].sort((a, b) => b - a));
});

test('cart persists across sorting and navigation, and item can be removed', async ({
  page,
  inventoryPage,
  cartPage,
}) => {
  // --- Add a product and confirm the badge appears ---
  await inventoryPage.addToCartButton(PRODUCT).click();
  await expect(inventoryPage.cartBadge).toHaveText('1');

  // --- Sort Z-A and verify cart badge survives reorder ---
  await inventoryPage.sortBy('za');
  await expect(inventoryPage.cartBadge).toHaveText('1');

  // --- Navigate to an external page and back, then confirm cart survives ---
  await inventoryPage.clickAbout();
  await page.goBack();
  await expect(inventoryPage.heading).toBeVisible();
  await expect(inventoryPage.cartBadge).toHaveText('1');

  // --- Visit the cart and confirm the product is there ---
  await inventoryPage.navigateToCart();
  await expect(cartPage.cartItems().filter({ hasText: PRODUCT })).toBeVisible();

  // --- Remove the product and confirm the cart is empty ---
  await cartPage.removeItem(PRODUCT);
  expect(await cartPage.isCartEmpty()).toBe(true);
  await expect(cartPage.cartBadge).not.toBeVisible();
});
