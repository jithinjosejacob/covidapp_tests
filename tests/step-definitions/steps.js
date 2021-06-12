// Step Defintions are placed here.
const { Given, When, Then } = require('@cucumber/cucumber');
const BattlePage = require('../pageobjects/BattlePage');
const CovidPage = require('../pageobjects/CovidPage');
const DashboardPage = require('../pageobjects//DashboardPage');
const LoginPage = require('../pageobjects/LoginPage');

// Navigate to a specific page,pass page parameter here.
Given('I am on the {string} page', function (pageUrl) {
    LoginPage.open(pageUrl);
    expect(browser).toHaveTitle('COVID-19 THE GAME');
});

// Passing required name into warrior name and creating a warrior.
When('I enter {string} into warrior name', function (name) {
    DashboardPage.enterWarriorName(name);
});

// Click on a button or hyperlink having a specific text.
When('I click on button {string}', function (textContent) {
    DashboardPage.clickLink(textContent);
})

// Verify that landed page contains a specific welcome text.
Then('I should see the table header {string}', function (header) {
    DashboardPage.verifyTableHeader(header)
});

// Verify that table header has been loaded.
Then('I should see the welcome text {string}', function (messageText) {
    CovidPage.verifyWelcomeMessage(messageText);
});

// Verify that user navigated to covid page.
Given('I have navigated to covid app page as {string}', function (name) {
    LoginPage.open('app');
    DashboardPage.enterWarriorName(name);
    DashboardPage.clickLink('Start your journey');
    CovidPage.verifyWelcomeMessage('Choose your battle field');
});

// Verify that a modal having a specific modal header is visible.
Then('I should see the modal header {string}', function (headerText) {
    BattlePage.modalContent(headerText);
});

// Verify that a specific paragraph header is visible.
Then('I should see the paragraph header {string}', function (paragraphHeader) {
    BattlePage.viewHeader(paragraphHeader);
});

// Closing a active modal dialog.
Then('I close the modal dialog', function () {
    BattlePage.closeModal();
});