// Dashboard functions are defined here.
const BasePage = require('./BasePage')

class DashboardPage extends BasePage {

    // Warrior username input
    get userNameTextBox() { return $("#worrior_username") }

    // Table Header
    tableHeader(header) { return $(`//tbody/tr/th[contains(text(),'${header}')]`)}

    // Enter the name passed from cucumber into username text box and click Create warrior.
    enterWarriorName(name){
        this.userNameTextBox.waitForDisplayed();
        this.userNameTextBox.scrollIntoView();
        this.userNameTextBox.setValue(name);
        this.clickLink('Create warrior');
    }

    // Verify specific table header
    verifyTableHeader(headerName){
        this.tableHeader(headerName).waitForDisplayed();
    }
}
module.exports = new DashboardPage();