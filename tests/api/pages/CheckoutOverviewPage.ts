import { Page, expect } from '@playwright/test';
import { BasePage } from './BasePage';

export class CheckoutOverviewPage extends BasePage {
  readonly title;
  readonly itemTotal;
  readonly tax;
  readonly total;
  readonly finishButton;
  readonly cancelButton;

  constructor(page: Page) {
    super(page);
    this.title = page.locator('.title');
    this.itemTotal = page.locator('.summary_subtotal_label');
    this.tax = page.locator('.summary_tax_label');
    this.total = page.locator('.summary_total_label');
    this.finishButton = page.locator('#finish');
    this.cancelButton = page.locator('#cancel');
  }

  async verifyOverviewPage() {
    await expect(this.title).toHaveText('Checkout: Overview');
  }

  async getItemTotal() {
    return await this.itemTotal.textContent();
  }

  async getTax() {
    return await this.tax.textContent();
  }

  async getTotal() {
    return await this.total.textContent();
  }

  async clickFinish() {
    await this.finishButton.click();
  }

  async clickCancel() {
    await this.cancelButton.click();
  }
}
