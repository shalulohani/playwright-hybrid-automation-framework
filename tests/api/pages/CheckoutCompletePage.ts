import { Page, expect } from '@playwright/test';
import { BasePage } from './BasePage';

export class CheckoutCompletePage extends BasePage {
  readonly title;
  readonly thankYouMessage;
  readonly orderDispatchMessage;
  readonly backHomeButton;

  constructor(page: Page) {
    super(page);
    this.title = page.locator('.title');
    this.thankYouMessage = page.locator('.complete-header');
    this.orderDispatchMessage = page.locator('.complete-text');
    this.backHomeButton = page.locator('#back-to-products');
  }

  async verifyCompletePage() {
    await expect(this.title).toHaveText('Checkout: Complete!');
    await expect(this.thankYouMessage).toHaveText('Thank you for your order!');
  }

  async getOrderDispatchMessage() {
    return await this.orderDispatchMessage.textContent();
  }

  async clickBackHome() {
    await this.backHomeButton.click();
  }
}
