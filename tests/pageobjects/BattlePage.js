// Battle page functions are placed here.
const BasePage = require('./BasePage')

class BattlePage extends BasePage {

    // Modal having a specific header text.
    modal(headerText) { return $(`//h5[contains(text(),"${headerText}")]/ancestor::div[@class='modal-content']`) }

    // Close Icon in Modal.
    get closeIcon() { return $(`(//div[@class='modal-dialog']/descendant::button[@aria-label='Close'])[1]`)}

    // Modal having a specific header.
    modalContent(header){
        // Sometimes modal header will be displayed after progress bar is complete,so explicitly waiting for 60 seconds here.
        this.modal(header).waitForExist({ timeout: 60000 });
        this.modal(header).waitForDisplayed({ timeout: 60000 });
    }

    // Closing active modal dialog.
    closeModal(){
        this.closeIcon.waitForExist();
        // Js command.
        browser.execute("arguments[0].click();", this.closeIcon);
    }
}
module.exports = new BattlePage();