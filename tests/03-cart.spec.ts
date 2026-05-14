import { test, expect } from '../fixtures/fixtures';
import { users } from '../test-data/users';

const PRODUCT = 'Sauce Labs Backpack';

test.beforeEach(async ({ loginPage, inventoryPage }) => {
  await loginPage.goto();
  await loginPage.login(users.standard_user.username, users.standard_user.password);
  await expect(inventoryPage.heading).toBeVisible();
});

test('cart persists across sorting and navigation, and item can be removed', async ({
  page,
  inventoryPage,
  cartPage,
}) => {
  // --- Add a product and confirm the badge appears ---
  await inventoryPage.addToCartButton(PRODUCT).click();
  await expect(inventoryPage.cartBadge).toHaveText('1');

  // --- Sort Z-A and verify the list reorders without touching cart state ---
  // "Test.allTheThings() T-Shirt (Red)" sorts above all "Sauce Labs ..." products
  await inventoryPage.sortBy('za');
  const firstName = await inventoryPage.firstProductName();
  expect(firstName.charAt(0).toUpperCase()).toBe('T');
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
