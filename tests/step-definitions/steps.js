const { Given, When, Then } = require('@cucumber/cucumber');
const DashboardPage = require('../pageobjects//DashboardPage');
const LoginPage = require('../pageobjects/LoginPage');
const SecurePage = require('../pageobjects/SecurePage');
const CovidPage = require('../pageobjects/CovidPage');
const BattlePage = require('../pageobjects/BattlePage');

Given('I am on the {string} page', function (pageUrl) {
    if (pageUrl === 'app'){
        pageName = '/'
    }
    else{
        pageName = '/'+pageUrl
    }
    LoginPage.open(pageName);
    expect(browser).toHaveTitle('COVID-19 THE GAME');
});

When('the user enters username as {string} and password as {string}', function (username, password) {
    LoginPage.userNameTextBox.setValue(username);
    LoginPage.passwordTextBox.setValue(password);
});

When('I enter {string} into warrior name', function (name) {
    DashboardPage.enterWarriorName(name);
});

When ('I click on button {string}',function (textContent) {
    DashboardPage.clickHyperlink(textContent);
})

When('clicks on login button', function () {
    LoginPage.loginButton.click();
});

Then('I should see the welcome text {string}',function (messageText) {
    CovidPage.verifyWelcomeMessage(messageText);
});

Then('I should see the modal header {string}',function (headerText) {
    BattlePage.modalContent(headerText);
});

Then('I should see the paragraph header {string}',function (paragraphHeader) {
    BattlePage.viewHeader(paragraphHeader);
});

Then('I close the modal dialog',function () {
    BattlePage.closeModal();
});

Then('the user must navigate to secure area page displaying a message {string}', function (successMessage) {    
    expect(SecurePage.secureAreaElement).toExist();
    expect(SecurePage.secureAreaElement).toHaveTextContaining('Secure Area');
    expect(SecurePage.messageElement).toExist();
    expect(SecurePage.messageElement).toHaveTextContaining(successMessage);
});

Then('the user must remain on login page displaying a message {string}', function (errorMessage) {
    expect(LoginPage.loginPageElement).toExist();
    expect(LoginPage.loginPageElement).toHaveTextContaining('Login Page');
    expect(LoginPage.messageElement).toExist();
    expect(LoginPage.messageElement).toHaveTextContaining(errorMessage);
});