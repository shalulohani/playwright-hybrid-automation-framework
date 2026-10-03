import { Page, expect } from '@playwright/test';
import { BasePage } from './BasePage';

export class ProductPage extends BasePage {
  readonly inventoryItems;
  readonly addToCartButtons;
  readonly productNames;
  readonly productPrices;
  readonly cartIcon;

  constructor(page: Page) {
    super(page);
    this.inventoryItems = page.locator('.inventory_item');
    this.addToCartButtons = page.locator('.btn_inventory');
    this.productNames = page.locator('.inventory_item_name');
    this.productPrices = page.locator('.inventory_item_price');
    this.cartIcon = page.locator('.shopping_cart_link');
  }

  async verifyProductPage() {
    await expect(this.page.locator('.title')).toHaveText('Products');
  }

  async getProductCount() {
    return await this.inventoryItems.count();
  }

  async getProductName(index: number) {
    return await this.productNames.nth(index).textContent();
  }

  async getProductPrice(index: number) {
    return await this.productPrices.nth(index).textContent();
  }

  async addProductToCart(index: number) {
    await this.addToCartButtons.nth(index).click();
  }

  async openCart() {
    await this.cartIcon.click();
  }
}
