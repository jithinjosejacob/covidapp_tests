const BasePage = require('./BasePage')

class BattlePage extends BasePage {

    modal(headerText) { return $(`//h5[contains(text(),'${headerText}')]/ancestor::div[@class='modal-content']`) }

    get closeIcon() { return $(`(//button[@aria-label='Close'])[1]`)}

    modalContent(header){
        this.modal(header).waitForExist();
        this.modal(header).waitForDisplayed();
    }

    closeModal(){
        this.closeIcon.waitForDisplayed();
        this.closeIcon.click({force:true});
    }
}
module.exports = new BattlePage();