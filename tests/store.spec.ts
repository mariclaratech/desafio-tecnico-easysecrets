import { expect, test } from "@playwright/test";

import { HomePage } from "../pages/HomePage";
import { LoginPage } from "../pages/LoginPage";
import { SignUpPage } from "../pages/SignUpPage";
import { ProductPage } from "../pages/ProductPage";
import { CartPage } from "../pages/CartPage";

import { generateUser } from "../utils/generateUser";

test.describe("Demoblaze Store", () => {

    test("Should register, login, add and remove a product from cart", async ({ page }) => {

        const homePage = new HomePage(page);
        const signUpPage = new SignUpPage(page);
        const loginPage = new LoginPage(page);
        const productPage = new ProductPage(page);
        const cartPage = new CartPage(page);

        const user = generateUser();

        const product = {
            name: "Samsung galaxy s6"
        };

        await homePage.open();

        await test.step("Register a new user", async () => {

            await homePage.clickSignUp();

            await signUpPage.register(
                user.username,
                user.password
            );

        });

        await test.step("Login with created user", async () => {

            await homePage.clickLogin();

            await loginPage.login(
                user.username,
                user.password
            );

        });

        await test.step("Add product to cart", async () => {

            await homePage.openProduct(product.name);

            await productPage.validateProductName(product.name);

            await productPage.addProductToCart();

        });

        await test.step("Remove product from cart", async () => {

            await homePage.openCart();

            await cartPage.validateProduct(product.name);

            await cartPage.removeProduct();

            await cartPage.validateCartIsEmpty();

        });

    });

});