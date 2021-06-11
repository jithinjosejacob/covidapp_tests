
const BasePage = require('./BasePage');

class SecurePage extends BasePage {

    get secureAreaElement () { return $('div[class="example"] h2') }

    get messageElement () { return $('#flash') }
}
module.exports = new SecurePage();


