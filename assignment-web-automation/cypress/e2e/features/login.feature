Feature: Login to sauce demo

    Scenario: Login with valid credential
        Given Mika open the url
        When Mika inputs valid credentials and clicks login button
        Then Mika should navigate to homepage
        When Mika add the item to cart
        When Mika cliks cart button
        Then Mika should navigate to cart page
        Then Validate the item price
        When Mika clicks the checkout page
        Then Mika should navigate to Checkout Your Information page
        When Mika inputs personal data and clicks continue button
        Then Mika should navigate overview page
        When Mika clicks finish button
        Then Mika success checkout the item