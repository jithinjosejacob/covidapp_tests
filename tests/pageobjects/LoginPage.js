
const BasePage = require('./BasePage')

class LoginPage extends BasePage {

    get userNameTextBox () { return $('#username') }

    open() {
        super.open('https://responsivefight.herokuapp.com/')
    }
}
module.exports = new LoginPage();