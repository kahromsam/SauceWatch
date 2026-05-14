import { test as base } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';
import { CartPage } from '../pages/CartPage';
import { CheckoutPage } from '../pages/CheckoutPage';
import { getActiveUser } from '../test-data/users';
import type { UserKey } from '../test-data/users';

type Pages = {
  loginPage: LoginPage;
  inventoryPage: InventoryPage;
  cartPage: CartPage;
  checkoutPage: CheckoutPage;
  // The user selected by the TEST_USER env var (defaults to standard_user).
  // Use in integrity test beforeEach blocks so the suite is user-configurable.
  testUser: ReturnType<typeof getActiveUser>;
};

// Extends base test with page object instances.
// Login is NOT performed here — each test's beforeEach decides which user to log in as.
export const test = base.extend<Pages>({
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },
  inventoryPage: async ({ page }, use) => {
    await use(new InventoryPage(page));
  },
  cartPage: async ({ page }, use) => {
    await use(new CartPage(page));
  },
  checkoutPage: async ({ page }, use) => {
    await use(new CheckoutPage(page));
  },
  testUser: async ({}, use) => {
    await use(getActiveUser());
  },
});

export { expect } from '@playwright/test';
export type { UserKey };
