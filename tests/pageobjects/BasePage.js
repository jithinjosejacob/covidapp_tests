module.exports = class BasePage {

    hyperLink(linkText) { return $(`//*[contains(text(),'${linkText}')]`) }

    paragraph(headerName) { return $(`//p[contains(text(),'${headerName}')]`)}

    open (path) {
        browser.url(path);
    }
    clickHyperlink(linkText){
        this.hyperLink(linkText).waitForExist();
        this.hyperLink(linkText).scrollIntoView();
        this.hyperLink(linkText).waitForDisplayed();
        this.hyperLink(linkText).click({force:true});
    }

    viewHeader(paragraphHeader){
        this.paragraph(paragraphHeader).waitForDisplayed();
    }
}