import { should } from "chai";

const USERNAME_FIELD = '[data-test="username"]';
const PASSWORD_FIELD = '[data-test="password"]';
const LOGIN_BTN = '[data-test="login-button"]';
const ADD_TO_CART_BACKPACK = '[data-test="add-to-cart-sauce-labs-backpack"]';
const BACKPACK_PRICE_HOMEPAGE = ':nth-child(1) > .inventory_item_description > .pricebar > .inventory_item_price'
const BACKPACK_PRICE_CART_PAGE = '.inventory_item_price';
const SHOPPING_CART_BADGE = '.shopping_cart_badge';
const SHOPPING_CART_LINK = '.shopping_cart_link';
const CHECKOUT_BTN = '[data-test="checkout"]';
const FIRST_NAME_FIELD = '[data-test="firstName"]';
const LAST_NAME_FIELD = '[data-test="lastName"]';
const POSTAL_CODE_FIELD = '[data-test="postalCode"]';
const CONTINUE_BTN = '[data-test="continue"]';
const FINISH_BTN = '[data-test="finish"]';



class LoginPage {
    visit() {
        cy.visit(Cypress.env("base_url"));
    }

    usernameField() {
        return cy.get(USERNAME_FIELD);
    }

    passwordField() {
        return cy.get(PASSWORD_FIELD);
    }

    loginButton() {
        return cy.get(LOGIN_BTN);
    }

    firstNameField() {
        return cy.get(FIRST_NAME_FIELD)
    }

    lastNameField() {
        return cy.get(LAST_NAME_FIELD)
    }

    postalCodeField() {
        return cy.get(POSTAL_CODE_FIELD)
    }

    continueButton() {
        return cy.get(CONTINUE_BTN)
    }

    finishButton() {
        return cy.get(FINISH_BTN)
    }

    inputUsername() {
        this.usernameField().type(Cypress.env("username"));
    }

    inputPassword() {
        this.passwordField().type(Cypress.env("password"));
    }

    inputFirstName() {
        this.firstNameField().type(Cypress.env("first_name"));
    }

    inputLastName() {
        this.lastNameField().type(Cypress.env("last_name"));
    }

    inputPostalCode() {
        this.postalCodeField().type(Cypress.env("postal_code"));
    }

    clickLoginButton() {
        this.loginButton().click();
    }

    clickContinueButton() {
        this.continueButton().click();
    }

    clickFinishButton() {
        this.finishButton().click()
    }

    isOnHomepage() {
        cy.contains('Products');
    }

    addToCartBackpack() {
        return cy.get(ADD_TO_CART_BACKPACK);
    }

    clickAddToCartBackpack() {
        this.addToCartBackpack().click();
    }

    shoppingCartBadge() {
        return cy.get(SHOPPING_CART_BADGE);
    }

    validateShoppingCartBadge() {
        // this.shoppingCartBadge().should('be.visible');
        this.shoppingCartBadge().should('be.visible');
    }

    shoppingCartLink() {
        return cy.get(SHOPPING_CART_LINK);
    }

    clickShoppingCartLink() {
        this.shoppingCartLink().click()
    }

    isOnCartPage() {
        cy.contains('Your Cart');
    }

    backpackPriceHomePage() {
        return cy.get(BACKPACK_PRICE_HOMEPAGE);
    }

    backpackPriceCartPage() {
        return cy.get(BACKPACK_PRICE_CART_PAGE);
    }

    validatePriceItem() {
        // this.backpackPriceCartPage(should('equal', this.backpackPriceHomePage()));
        return cy.readFile('cypress/jsonfile/priceOfItem.txt').then((newItem) => {
            this.backpackPriceCartPage(should('equal', newItem))
        })
    }

    getItemPrice() {
        return this.backpackPriceHomePage().then(($item) => {
            const priceOfItem = $item.text();
            cy.writeFile('cypress/jsonfile/priceOfItem.txt', priceOfItem);
        });
    }

    checkoutButton() {
        return cy.get(CHECKOUT_BTN);
    }

    clickCheckoutButton() {
        this.checkoutButton().click();
    }

    isOnYourInformationPage() {
        cy.contains('Checkout: Your Information');
    }

    isOnOverviewPage() {
        cy.contains('Checkout: Overview')
    }

    successCheckoutItem() {
        cy.contains('Thank you for your order!')
    }

}

const loginPage = new LoginPage();
export default loginPage;