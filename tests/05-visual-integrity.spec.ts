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

test('cart icon and burger menu are visible', async ({ inventoryPage }) => {
  await expect(inventoryPage.cartIcon).toBeVisible();
  await expect(inventoryPage.burgerMenuButton).toBeVisible();
});

test('cart icon is positioned inside the page header', async ({ page }) => {
  // visual_user can move the cart icon outside the header — existence alone is not enough
  const cartIsInHeader = await page.evaluate(() => {
    const cart   = document.querySelector('[data-test="shopping-cart-link"]');
    const header = document.querySelector('.primary_header');
    if (!cart || !header) return false;
    const c = cart.getBoundingClientRect();
    const h = header.getBoundingClientRect();
    return c.top >= h.top && c.bottom <= h.bottom &&
           c.left >= h.left && c.right <= h.right;
  });
  expect(cartIsInHeader, 'Cart icon has moved outside the page header').toBe(true);
});

test('burger menu icon is not rotated', async ({ page }) => {
  // visual_user applies transform: rotate() to the img.bm-icon inside the burger button.
  // The button element itself has no transform — the icon image does.
  // matrix(a, b, c, d, tx, ty): b = sin(angle), non-zero means the icon is rotated.
  const sinAngle = await page.evaluate(() => {
    const icon = document.querySelector('.bm-burger-button img.bm-icon');
    if (!icon) return 0;
    const t = getComputedStyle(icon).transform;
    if (!t || t === 'none') return 0;
    const values = t.match(/matrix\(([^)]+)\)/)?.[1].split(',').map(Number);
    return values ? Math.abs(values[1]) : 0;
  });
  expect(sinAngle, `Burger menu icon is rotated (sin of angle = ${sinAngle.toFixed(4)})`).toBeLessThan(0.01);
});
