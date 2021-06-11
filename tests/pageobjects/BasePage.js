module.exports = class BasePage {

    hyperLink(linkText) { return $(`//a[contains(text(),'${linkText}')]`) }

    open (path) {
        browser.url(path);
    }
    clickHyperlink(linkText){
        this.hyperLink(linkText).waitForDisplayed();
        this.hyperLink(linkText).click({force:true});
    }
}