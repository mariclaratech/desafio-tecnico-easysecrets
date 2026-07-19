import { expect, Locator, Page } from "@playwright/test";

export class HomePage {

    readonly page: Page;

    readonly signUpButton: Locator;
    readonly loginButton: Locator;
    readonly cartButton: Locator;

    constructor(page: Page) {

        this.page = page;

        this.signUpButton = page.locator("#signin2");
        this.loginButton = page.locator("#login2");
        this.cartButton = page.locator("#cartur");
    }

    async open() {

        await this.page.goto("/");
    }

    async clickSignUp() {

        await this.signUpButton.click();
    }

    async clickLogin() {

        await this.loginButton.click();
    }

    async openCart() {

        await this.cartButton.click();

        
    }

    async openProduct(productName: string) {

        await this.page.getByRole("link", {
            name: productName,
            exact: true
        }).click();
    }

}

