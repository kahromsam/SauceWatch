import { Page, Locator } from '@playwright/test';

export class CheckoutPage {
  readonly firstNameInput: Locator;
  readonly lastNameInput: Locator;
  readonly zipInput: Locator;
  readonly continueButton: Locator;
  readonly finishButton: Locator;
  readonly errorMessage: Locator;
  readonly orderSummaryHeader: Locator;
  readonly confirmationHeader: Locator;

  constructor(page: Page) {
    this.firstNameInput = page.getByTestId('firstName');
    this.lastNameInput = page.getByTestId('lastName');
    this.zipInput = page.getByTestId('postalCode');
    this.continueButton = page.getByTestId('continue');
    this.finishButton = page.getByTestId('finish');
    this.errorMessage = page.getByTestId('error');
    this.orderSummaryHeader = page.getByRole('heading', { name: 'Checkout: Overview' });
    this.confirmationHeader = page.getByRole('heading', { name: 'Thank you for your order!' });
  }

  async fillInfo(firstName: string, lastName: string, zip: string) {
    await this.firstNameInput.fill(firstName);
    await this.lastNameInput.fill(lastName);
    await this.zipInput.fill(zip);
  }

  async continue() {
    await this.continueButton.click();
  }

  async finish() {
    await this.finishButton.click();
  }
}
