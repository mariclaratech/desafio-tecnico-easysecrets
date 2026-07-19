import { expect, Locator, Page } from "@playwright/test";

export class LoginPage {

    readonly page: Page;

    readonly usernameInput: Locator;
    readonly passwordInput: Locator;
    readonly loginButton: Locator;

    constructor(page: Page) {

        this.page = page;

        this.usernameInput = page.locator("#loginusername");
        this.passwordInput = page.locator("#loginpassword");

        this.loginButton = page.locator("button", {
            hasText: "Log in"
        });

    }

    async login(username: string, password: string) {

        await this.usernameInput.fill(username);

        await this.passwordInput.fill(password);

        await this.loginButton.click();

        await expect(this.page.locator("#nameofuser"))
            .toContainText(username);

    }

}