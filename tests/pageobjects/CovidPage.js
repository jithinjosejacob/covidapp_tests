
const BasePage = require('./BasePage')

class CovidPage extends BasePage {

    welcomeMessage(messageText) { return $(`//div/p[contains(text(),'${messageText}')]`) }

    verifyWelcomeMessage(messageText){
        this.welcomeMessage(messageText).isDisplayed();
    }
}
module.exports = new CovidPage();