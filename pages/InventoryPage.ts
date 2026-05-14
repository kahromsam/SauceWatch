import { Page, Locator } from '@playwright/test';

export class InventoryPage {
  readonly heading: Locator;
  readonly cartBadge: Locator;
  readonly cartIcon: Locator;
  readonly sortDropdown: Locator;
  readonly burgerMenuButton: Locator;

  // Locators exposed so tests can evaluate CSS properties directly
  readonly productTitles: Locator;
  readonly productDescriptions: Locator;
  readonly productCards: Locator;
  readonly productImages: Locator;
  readonly productPrices: Locator;

  constructor(private readonly page: Page) {
    // The page title is a <span class="title">, not a semantic heading element.
    // getByTestId is the best available semantic locator here.
    this.heading = page.getByTestId('title');
    this.cartBadge = page.getByTestId('shopping-cart-badge');
    this.cartIcon = page.getByTestId('shopping-cart-link');
    this.sortDropdown = page.getByTestId('product-sort-container');
    // Icon-only button; aria-label="Open Menu" is set by the app
    this.burgerMenuButton = page.getByRole('button', { name: 'Open Menu' });

    this.productTitles = page.locator('.inventory_item_name');
    this.productDescriptions = page.locator('.inventory_item_desc');
    this.productCards = page.locator('.inventory_item');
    this.productImages = page.locator('.inventory_item img');
    this.productPrices = page.locator('.inventory_item_price');
  }

  // Scoped to the card that contains productName to avoid matching other buttons
  addToCartButton(productName: string): Locator {
    return this.page
      .locator('.inventory_item')
      .filter({ hasText: productName })
      .getByRole('button', { name: 'Add to cart' });
  }

  removeButton(productName: string): Locator {
    return this.page
      .locator('.inventory_item')
      .filter({ hasText: productName })
      .getByRole('button', { name: 'Remove' });
  }

  async sortBy(option: 'az' | 'za' | 'lohi' | 'hilo') {
    await this.sortDropdown.selectOption(option);
  }

  async firstProductName(): Promise<string> {
    return this.productTitles.first().innerText();
  }

  async allProductImages(): Promise<string[]> {
    const count = await this.productImages.count();
    const srcs: string[] = [];
    for (let i = 0; i < count; i++) {
      srcs.push((await this.productImages.nth(i).getAttribute('src')) ?? '');
    }
    return srcs;
  }

  async allProductTitles(): Promise<string[]> {
    return this.productTitles.allInnerTexts();
  }

  async allProductDescriptions(): Promise<string[]> {
    return this.productDescriptions.allInnerTexts();
  }

  async allProductPrices(): Promise<string[]> {
    return this.productPrices.allInnerTexts();
  }

  async openBurgerMenu() {
    await this.burgerMenuButton.click();
  }

  async clickAbout() {
    await this.openBurgerMenu();
    await this.page.getByRole('link', { name: 'About' }).click();
  }

  async navigateToCart() {
    await this.cartIcon.click();
  }
}
