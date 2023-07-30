import { And, Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";
import loginPage from "../../pages/LoginPage";

Given('Mika open the url', () => {
    loginPage.visit();
});

When('Mika inputs valid credentials and clicks login button', () => {
    loginPage.inputUsername();
    loginPage.inputPassword();
    loginPage.clickLoginButton();
});

Then('Mika should navigate to homepage', () => {
    loginPage.isOnHomepage();
});

When('Mika add the item to cart', () => {
    loginPage.clickAddToCartBackpack();
    loginPage.getItemPrice();
});

Then('The item should added to the cart', () => {
    loginPage.validateShoppingCartBadge();
})

When('Mika cliks cart button', () => {
    loginPage.clickShoppingCartLink();
})

Then('Mika should navigate to cart page', () => {
    loginPage.isOnCartPage();
})

Then('Validate the item price', () => {
    loginPage.validatePriceItem();
})

When('Mika clicks the checkout page', () => {
    loginPage.clickCheckoutButton();
})

Then('Mika should navigate to Checkout Your Information page', () => {
    loginPage.isOnYourInformationPage;
})

When('Mika inputs personal data and clicks continue button', () => {
    loginPage.inputFirstName();
    loginPage.inputLastName();
    loginPage.inputPostalCode();
    loginPage.clickContinueButton();
})

Then('Mika should navigate overview page', () => {
    loginPage.isOnOverviewPage();
    loginPage.validatePriceItem();
})

When('Mika clicks finish button', () => {
    loginPage.clickFinishButton();
})

Then('Mika success checkout the item', () => {
    loginPage.successCheckoutItem()
})