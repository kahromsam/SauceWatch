import { test, expect } from '../fixtures/fixtures';

const PRODUCT = 'Sauce Labs Backpack';

test.beforeEach(async ({ loginPage, inventoryPage, testUser }) => {
  await loginPage.goto();
  await loginPage.login(testUser.username, testUser.password);
  await expect(inventoryPage.heading).toBeVisible();
});

test('checkout form requires first name, last name, and zip code', async ({
  inventoryPage,
  cartPage,
  checkoutPage,
}) => {
  await inventoryPage.addToCartButton(PRODUCT).click();
  await inventoryPage.navigateToCart();
  await cartPage.checkout();

  // Submitting empty form must show an error
  await checkoutPage.continue();
  await expect(checkoutPage.errorMessage).toBeVisible();

  // Submitting with only first name must still show an error
  await checkoutPage.fillInfo('Ismo', '', '');
  await checkoutPage.continue();
  await expect(checkoutPage.errorMessage).toBeVisible();

  // Submitting with first + last but no zip must still show an error
  await checkoutPage.fillInfo('Ismo', 'Laitela', '');
  await checkoutPage.continue();
  await expect(checkoutPage.errorMessage).toBeVisible();

  // All three fields filled — error must clear and form must advance
  await checkoutPage.fillInfo('Ismo', 'Laitela', '12345');
  await checkoutPage.continue();
  await expect(checkoutPage.errorMessage).not.toBeVisible();
  await expect(checkoutPage.orderSummaryHeader).toBeVisible();
});

test('full checkout flow completes with valid shipping info', async ({
  inventoryPage,
  cartPage,
  checkoutPage,
}) => {
  // --- Add a product and proceed to cart ---
  await inventoryPage.addToCartButton(PRODUCT).click();
  await inventoryPage.navigateToCart();
  await expect(cartPage.cartItems().filter({ hasText: PRODUCT })).toBeVisible();

  // --- Start checkout and fill valid info ---
  await cartPage.checkout();
  await checkoutPage.fillInfo('Ismo', 'Laitela', '12345');
  await checkoutPage.continue();
  await expect(checkoutPage.orderSummaryHeader).toBeVisible();

  // --- Complete the order ---
  await checkoutPage.finish();
  await expect(checkoutPage.confirmationHeader).toBeVisible();
});
