import { expect, Locator, Page } from "@playwright/test";

export class ProductPage {

    readonly page: Page;

    readonly productTitle: Locator;
    readonly addToCartButton: Locator;

    constructor(page: Page) {

        this.page = page;

        this.productTitle = page.locator(".name");

        this.addToCartButton = page.locator("a.btn.btn-success");
    }

    async validateProductName(productName: string) {

        await expect(this.productTitle).toHaveText(productName);

    }

    async addProductToCart() {

    const dialogPromise = this.page.waitForEvent("dialog");

    await this.page.getByRole("link", {
        name: "Add to cart"
    }).click();

    const dialog = await dialogPromise;

    await expect.soft(dialog.message()).toContain("Product added");

    await dialog.accept();
}

}