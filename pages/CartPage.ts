import { Page, Locator } from '@playwright/test';

export class CartPage {
  readonly cartBadge: Locator;
  readonly checkoutButton: Locator;

  constructor(private readonly page: Page) {
    this.cartBadge = page.getByTestId('shopping-cart-badge');
    this.checkoutButton = page.getByTestId('checkout');
  }

  cartItems(): Locator {
    return this.page.getByTestId('cart-item');
  }

  async itemNames(): Promise<string[]> {
    return this.page.locator('.inventory_item_name').allInnerTexts();
  }

  async removeItem(productName: string) {
    await this.page
      .getByTestId('cart-item')
      .filter({ hasText: productName })
      .getByRole('button', { name: 'Remove' })
      .click();
  }

  async checkout() {
    await this.checkoutButton.click();
  }

  async isCartEmpty(): Promise<boolean> {
    return (await this.cartItems().count()) === 0;
  }
}
