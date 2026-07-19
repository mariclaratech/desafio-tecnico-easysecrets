import { expect, Locator, Page } from "@playwright/test";

export class SignUpPage {

    readonly page: Page;

    readonly usernameInput: Locator;
    readonly passwordInput: Locator;
    readonly signUpButton: Locator;

    constructor(page: Page) {

        this.page = page;

        this.usernameInput = page.locator("#sign-username");
        this.passwordInput = page.locator("#sign-password");
        this.signUpButton = page.locator("button", {
            hasText: "Sign up"
        });
    }

    async register(username: string, password: string) {

        await this.usernameInput.fill(username);

        await this.passwordInput.fill(password);

        this.page.once("dialog", async dialog => {

            expect(dialog.message()).toContain("Sign up successful");

            await dialog.accept();

        });

        await this.signUpButton.click();
    }

}