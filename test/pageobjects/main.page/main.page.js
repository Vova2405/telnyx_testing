const assert = require('assert');
const wait = require('../../../helpers/wait.untill');
const signUpButton = 'li [class="sc-5d3a275a-0 eKznVb"] [href="/sign-up"]';
const logInButton = '[href="https://portal.telnyx.com/"][class*="blLdCs"]';
const supportCenterButton = '[href="https://support.telnyx.com"][class*="blLdCs"]';
const productButton = '//span[text()="Products"]';
const solutionButton = '//span[text()="Solutions"]';
const networkButton = '//span[text()="Network"]';
const resourcesButton = '//span[text()="Resources"]';
const companyButton = '//span[text()="Company"]';
const pricingButton = '//span[text()="Pricing"]';
const talkToExpert = '[class*=" ilKAnW"] [href="/contact-us"]';
const acceptCookiesbutton = '//button[text()="Accept and close"]';
const talkToExpertHeader = '//span[text()="Talk to an expert"]';
const tryForFreeInput = '[type="email"]';
const tryForFreeButton = '[class*="UYAGn eUnEoi bTZeHd"]';
const text = '//*[text()="Powerful products."]';
const logo = 'h3[class*="dexjwF nuYWG"]';
const dropdown = '[class="sc-9d98fd33-0 bRlGsp"]';
const g2link = '[aria-label="Compare us with the competition. Opens in a new window."]';
const APILearnMoreButton = '//*[text()="Learn more"]';
const exploreProductsButton = '//*[text()="Explore our products"]';
const waitListLink = 'span [href="/products/storage"]';
const footerProductsBlock = '//p[text()="Products"]'



class MainPage {

    async clickG2link() {
        await wait.scrollTo(g2link)
        await wait.click(g2link)
    }

    async g2pageURL() {
        expect(browser).toHaveUrlContaining(`https://www.g2.com/categories/communication-platform-as-a-service?order=top_shelf&utf8=%E2%9C%93`)
    }

    async scrollToText() {
        await wait.scrollTo(text);
    }

    async scrollToLogo() {
        await wait.scrollTo(logo);
    }

    async dropdownIsVisible() {
        await wait.isDisplayed(dropdown)
    }

    async setEmailInMainPage(email) {
        await wait.setValue(tryForFreeInput, email)
    }

    async pageURL () {
        const emailInput = $('#email');
        assert.equal(await browser.getUrl(), `https://telnyx.com/sign-up?email=`+ await emailInput.getValue())
    }

    async clickTryForFreeButton() {
        await wait.click(tryForFreeButton)
    }


    async clickLoginButton() {
        await wait.click(logInButton);
    }

    async clickSignUpButton () {
        await wait.click(signUpButton);
    }

    async clickAcceptButton () {
        await wait.click(acceptCookiesbutton);
    }

    async focusDropdown(element) {
        await wait.waitUntilClickable(element);
        await wait.moveTo(element)
    }

    async clickSupportCenter() {
        await wait.click(supportCenterButton)
    }

    async supportCenterUrl() {
        await browser.getUrl();
        assert.equal(await browser.getUrl(), 'https://support.telnyx.com/en/')
    }

    async clickTalkToAnExpert() {
        await wait.click(talkToExpert);
    }

    async talkToExpertHeaderIsVisible() {
        await wait.isDisplayed(talkToExpertHeader)
    }

    async clickLearnMore () {
        await wait.scrollTo(APILearnMoreButton)
        await wait.click(APILearnMoreButton)
    }

    async APIheaderIsVisible() {
        const APIHeaderr = $('#telnyx-api-v2-documentation')
        assert.equal(await APIHeaderr.getText(), 'Telnyx API Documentation')
    }

    async clickExploreProductsButton() {
        await wait.scrollTo(exploreProductsButton);
        await wait. click(exploreProductsButton);
    }

    async productPageURL() {
        assert.equal(await browser.getUrl(), 'https://telnyx.com/products')
    }

    async clickWaitListLink() {
        await wait.click(waitListLink);
    }

    async waitListHeaderIsVisible() {
        const waitListHeader = $('[class="sc-31ce2512-5 locIEM"] span')
        assert.equal(await waitListHeader.getText(), 'Better cloud storage, for less.')
    }

    async getTextFromProducts() {
        const productsTitles = await browser.$$(' [class="sc-7b3980dc-11 hQMkaN"] [class="sc-7b3980dc-1 dlshfZ"]');
        
        await productsTitles.forEach(async (elem) => {
           return console.log('Title is ' + await elem.getText())
           
        })  
    }

    async getTextFromSolutions() {
        const solutionTitles = await browser.$$(' [class="sc-7b3980dc-14 hxgeKl"] [class="sc-7b3980dc-1 dlshfZ"]');
        
        await solutionTitles.forEach(async (elem) => {
           return console.log('Title is ' + await elem.getText())
           
        })
    }

    async getTextFromResources() {
        const resourcesTitles = await browser.$$('//*[@class="sc-9d98fd33-7 kpJVrZ"]/ul/li[4]//span[@class="sc-7b3980dc-1 dlshfZ"]');
        
        await resourcesTitles.forEach(async (elem) => {
           return console.log('Title is ' + await elem.getText())
           
        })
    }

    async getTextFromCompany() {
        const companyTitles = await browser.$$('//*[@class="sc-9d98fd33-7 kpJVrZ"]/ul/li[5]//span[@class="sc-7b3980dc-1 dlshfZ"]');
        
        await companyTitles.forEach(async (elem) => {
           return console.log('Title is ' + await elem.getText())
           
        })
    }

    async getTextFromPricing() {
        const pricingTitles = await browser.$$('//*[@class="sc-9d98fd33-7 kpJVrZ"]/ul/li[6]//span[@class="sc-7b3980dc-1 dlshfZ"]');
        
        await pricingTitles.forEach(async (elem) => {
           return console.log('Title is ' + await elem.getText())
           
        })
    }

    async scrollToFooter() {
        await wait.scrollTo(footerProductsBlock)
    }

    async getTextFromFooterTitles() {
        const footerTitles = await browser.$$('[class="sc-7b6c9f9b-8 gRLahy"]');
        
        await footerTitles.forEach(async (elem) => {
           return console.log('Title is ' + await elem.getText())
           
        })
    }

    async getAllFooterLinks() {
        const footerLinks = await browser.$$('[class="sc-6c41f57a-0 gvobTR"] span');
        
        await footerLinks.forEach(async (elem) => {
           return console.log('Link is ' + await elem.getText())
           
        })
    }

    


}
module.exports = new MainPage();