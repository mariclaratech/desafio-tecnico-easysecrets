import { expect, Locator, Page } from "@playwright/test";

export class CartPage {

    readonly page: Page;

    readonly deleteButton: Locator;

    constructor(page: Page) {

        this.page = page;

        this.deleteButton = page.getByRole("link", {
            name: "Delete"
        });

    }

    async validateProduct(productName: string) {

    await this.page.waitForFunction(() => {
        const rows = document.querySelectorAll("#tbodyid tr");
        return rows.length > 0;
    }, { timeout: 15000 });

    await expect(
        this.page.getByRole("cell", { name: productName })
    ).toBeVisible();
}

    async removeProduct() {

        await this.deleteButton.click();

    }

    async validateCartIsEmpty() {

        await expect(this.deleteButton).toHaveCount(0);

    }

}
