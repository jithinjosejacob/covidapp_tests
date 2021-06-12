// This is te base class, all subclasses inherit from here.
module.exports = class BasePage {

    // Hyperlink having a text,this could be either hyperlink or a button.
    hyperLink(linkText) { return $(`//*[contains(text(),"${linkText}")]`) }

    // Paragraph having a specific paragraph header.
    paragraph(headerName) { return $(`//p[contains(text(),'${headerName}')]`) }

    // Open a specific path provided.
    open(path) {
        browser.url(path);
    }

    // Click on a link(button or hyperlink) having a specific text.
    clickLink(linkText) {
        this.hyperLink(linkText).waitForExist();
        this.hyperLink(linkText).scrollIntoView();
        this.hyperLink(linkText).waitForDisplayed();
        this.hyperLink(linkText).click({ force: true });
    }

    // Verify that specific paragraph header is loaded.
    viewHeader(paragraphHeader) {
        this.paragraph(paragraphHeader).waitForDisplayed();
    }
}