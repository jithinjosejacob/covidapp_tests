
const BasePage = require('./BasePage')

class LoginPage extends BasePage {

    open(path) {
        super.open(`https://responsivefight.herokuapp.com${path}`)
    }
}
module.exports = new LoginPage();