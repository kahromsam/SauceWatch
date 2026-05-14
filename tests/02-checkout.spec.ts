import { test, expect } from '../fixtures/fixtures';

const PRODUCT = 'Sauce Labs Backpack';

test.beforeEach(async ({ loginPage, inventoryPage, testUser }) => {
  await loginPage.goto();
  await loginPage.login(testUser.username, testUser.password);
  await expect(inventoryPage.heading).toBeVisible();
});

test('full checkout flow: form validation and order confirmation', async ({
  inventoryPage,
  cartPage,
  checkoutPage,
}) => {
  // --- Add a product and proceed to cart ---
  await inventoryPage.addToCartButton(PRODUCT).click();
  await inventoryPage.navigateToCart();
  await expect(cartPage.cartItems().filter({ hasText: PRODUCT })).toBeVisible();

  // --- Start checkout ---
  await cartPage.checkout();

  // --- Validation: submitting with an empty first name must show an error ---
  await checkoutPage.continue();
  await expect(checkoutPage.errorMessage).toBeVisible();

  // --- Fill in shipping info and continue to order summary ---
  await checkoutPage.fillInfo('Jane', 'Doe', '12345');
  await checkoutPage.continue();
  await expect(checkoutPage.orderSummaryHeader).toBeVisible();

  // --- Complete the order ---
  await checkoutPage.finish();
  await expect(checkoutPage.confirmationHeader).toBeVisible();
});
