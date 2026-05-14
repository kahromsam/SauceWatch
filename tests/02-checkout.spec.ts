import { test, expect } from '../fixtures/fixtures';
import { users } from '../test-data/users';

const PRODUCT = 'Sauce Labs Backpack';

test.beforeEach(async ({ loginPage, inventoryPage }) => {
  await loginPage.goto();
  await loginPage.login(users.standard_user.username, users.standard_user.password);
  await expect(inventoryPage.heading).toBeVisible();
});

test('full checkout flow: button state, cart badge, validation, and order confirmation', async ({
  inventoryPage,
  cartPage,
  checkoutPage,
}) => {
  // --- Add to cart ---
  // User adds a product and expects the button to switch to "Remove"
  await inventoryPage.addToCartButton(PRODUCT).click();
  await expect(inventoryPage.removeButton(PRODUCT)).toBeVisible();
  await expect(inventoryPage.cartBadge).toHaveText('1');

  // --- Remove from cart ---
  // User removes it and expects the button to revert and the badge to disappear
  await inventoryPage.removeButton(PRODUCT).click();
  await expect(inventoryPage.addToCartButton(PRODUCT)).toBeVisible();
  await expect(inventoryPage.cartBadge).not.toBeVisible();

  // --- Add again and proceed to cart ---
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
