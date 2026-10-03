import { Page, expect } from '@playwright/test';
import { BasePage } from './BasePage';

export class CartPage extends BasePage {
  readonly cartTitle;
  readonly checkoutButton;
  readonly continueShoppingButton;
  readonly cartItems;

  constructor(page: Page) {
    super(page);
    this.cartTitle = page.locator('.title');
    this.checkoutButton = page.locator('#checkout');
    this.continueShoppingButton = page.locator('#continue-shopping');
    this.cartItems = page.locator('.cart_item');
  }

  async verifyCartPage() {
    await expect(this.cartTitle).toHaveText('Your Cart');
  }

  async getCartItemCount() {
    return await this.cartItems.count();
  }

  async clickCheckout() {
    await this.checkoutButton.click();
  }

  async clickContinueShopping() {
    await this.continueShoppingButton.click();
  }
}
