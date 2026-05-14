import { test, expect } from '../fixtures/fixtures';
import { users } from '../test-data/users';

// No shared beforeEach — these tests exercise the login flow itself.

test('active user can log in and land on the inventory page', async ({ page, loginPage, inventoryPage, testUser }) => {
  // The user selected by TEST_USER (default: standard_user) navigates to the site and logs in
  await loginPage.goto();
  await loginPage.login(testUser.username, testUser.password);

  // The app redirects to /inventory.html and shows the product catalogue heading
  await expect(page).toHaveURL(/\/inventory\.html$/);
  await expect(inventoryPage.heading).toBeVisible();
});

test('locked_out_user sees an error message and cannot log in', async ({ loginPage }) => {
  // A locked-out user submits valid credentials
  await loginPage.goto();
  await loginPage.login(users.locked_out_user.username, users.locked_out_user.password);

  // The app must display a clear, user-facing error — not a silent failure
  await expect(loginPage.errorMessage).toBeVisible();
  expect(await loginPage.errorMessageText()).toContain(
    'Epic sadface: Sorry, this user has been locked out.'
  );
});
