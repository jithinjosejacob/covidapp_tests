const BasePage = require('./BasePage')

class DashboardPage extends BasePage {

    get userNameTextBox() { return $("#worrior_username") }

    enterWarriorName(name){
        this.userNameTextBox.waitForDisplayed();
        this.userNameTextBox.scrollIntoView();
        this.userNameTextBox.setValue(name);
        this.clickHyperlink('Create warrior');
    }
}
module.exports = new DashboardPage();