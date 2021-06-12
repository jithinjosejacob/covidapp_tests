// Covid page functions are placed here.
const BasePage = require('./BasePage')

class CovidPage extends BasePage {

    // Messgae Text on a page
    welcomeMessage(messageText) { return $(`//div/p[contains(text(),'${messageText}')]`) }

    // Verify that message text is displayed on the page.
    verifyWelcomeMessage(messageText){
        this.welcomeMessage(messageText).isDisplayed();
    }
}
module.exports = new CovidPage();