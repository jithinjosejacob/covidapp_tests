// Login functions are defined here.
const BasePage = require('./BasePage')

class LoginPage extends BasePage {

    // If page url is app,open the application,else pass the parameter to the last portion of the url.
    open(pageUrl) {
        let path;
        if (pageUrl === 'app') {
            path = '/'
        }
        else {
            path = '/' + pageUrl
        }
        super.open(`${path}`)
    }
}
module.exports = new LoginPage();