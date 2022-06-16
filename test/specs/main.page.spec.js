const main = require('../pageobjects/main.page/main.page');
const dropdownHeaders = require('../pageobjects/main.page/dropdown_headers/dropdown.headers.page');
const talkToExpertPage = require('../pageobjects/redirectings/talk.to.expert.redirecting.page');
const random = require('../../helpers/randomGenerate');
const signUpPage = require('../pageobjects/signUp_Login.pages/signUp.page');
const faq = require('../pageobjects/products.storage/storage.guestions.page');
const sipTrunkingButton = '//*[text()="Elastic SIP Trunking"]';
const allSolutionsButton = '//*[text()="See all Solutions"]';
const developerDocsButton = '//*[text()="Developer Docs"]';
const aboutCompanyButton = '//*[text()="About Telnyx"]';
const allPricingButton = '//*[text()= "See all Pricing"]';
const productButton = '//span[text()="Products"]';
const solutionButton = '//span[text()="Solutions"]';
const resourcesButton = '//span[text()="Resources"]';
const companyButton = '//span[text()="Company"]';
const pricingButton = '//span[text()="Pricing"]';



describe('main page testing', () => {
    before(async () => {
        await browser.url('https://telnyx.com/');
        await main.clickAcceptButton();
    })

    beforeEach(async() => {
        await browser.url('https://telnyx.com/');
        require('expect-webdriverio').setOptions({ wait: 1000 })

    })

    it('open products dropdown menu if mouse hover on ', async() => {
        await main.focusDropdown(productButton);
        await dropdownHeaders.headerIsVisible(sipTrunkingButton)
    })
    
    it('open solution dropdown menu if mouse hover on ', async() => {
        await main.focusDropdown(solutionButton);
        await dropdownHeaders.headerIsVisible(allSolutionsButton)
    })

    it('open resources dropdown menu if mouse hover on ', async() => {
        await main.focusDropdown(resourcesButton);
        await dropdownHeaders.headerIsVisible(developerDocsButton)
    })

    it('open company dropdown menu if mouse hover on ', async() => {
        await main.focusDropdown(companyButton);
        await dropdownHeaders.headerIsVisible(aboutCompanyButton)
    })

    it('open pricing dropdown menu if mouse hover on ', async() => {
        await main.focusDropdown(pricingButton);
        await dropdownHeaders.headerIsVisible(allPricingButton)
    })

    it('redirect to support center page', async() => {
        await main.clickSupportCenter()
        await main.supportCenterUrl()
    })

    it('redirect to Talk to an expert page', async () => {
        await main.clickTalkToAnExpert();
        await main.talkToExpertHeaderIsVisible();
    })

    it('make an appointment to talk to expert with Sales Inquiry reason', async () => {
        await main.clickTalkToAnExpert();
        await talkToExpertPage.selectSalesReason();
        await talkToExpertPage.setFirstName('tester');
        await talkToExpertPage.setLastName('tester');
        await talkToExpertPage.setBusinessEmail(random.randomEmail());
        await talkToExpertPage.choseUaCode();
        await talkToExpertPage.setPhoneNumber(random.randomNumber());
        await talkToExpertPage.setCompanySiteName('http://www.example.com/');
        await talkToExpertPage.selectInterestValue();
        await talkToExpertPage.clickSubmitButton();
        await talkToExpertPage.switchFrame()
        await talkToExpertPage.clickNextButton();
        await talkToExpertPage.setNameValue('tester');
        await talkToExpertPage.setEmailValue(random.randomEmail());
        await talkToExpertPage.setComment('comment');
        await talkToExpertPage.clickScheduleButton();
        await browser.pause(4000);
        await talkToExpertPage.meetingInfoTextIsVisible();
    })

    it('make an appointment to talk to expert with Support reason', async () => {
        await main.clickTalkToAnExpert();
        await talkToExpertPage.selectSupportReason();
        await talkToExpertPage.setFirstName('tester');
        await talkToExpertPage.setLastName('tester');
        await talkToExpertPage.setBusinessEmail(random.randomEmail());
        await talkToExpertPage.choseUaCode();
        await talkToExpertPage.setPhoneNumber(random.randomNumber());
        await talkToExpertPage.setCompanySiteName('http://www.example.com/');
        await talkToExpertPage.clickSubmitButton();
        await talkToExpertPage.thanksHeaderIsVisible();
    })

    it('cancel the recording of the talk to expert', async () => {
        await main.clickTalkToAnExpert();
        await talkToExpertPage.selectSalesReason();
        await talkToExpertPage.setFirstName('tester');
        await talkToExpertPage.setLastName('tester');
        await talkToExpertPage.setBusinessEmail(random.randomEmail());
        await talkToExpertPage.choseUaCode();
        await talkToExpertPage.setPhoneNumber(random.randomNumber());
        await talkToExpertPage.setCompanySiteName('http://www.example.com/');
        await talkToExpertPage.selectInterestValue();
        await talkToExpertPage.clickSubmitButton();
        await talkToExpertPage.switchFrame()
        await talkToExpertPage.clickNextButton(); 
        await browser.switchToParentFrame();
        await talkToExpertPage.clickCrossButton();
        await browser.pause(500);
        await talkToExpertPage.currentPageUrl();
    })

    it('redirecting to Sign Up page from main page by Try for free option', async () => {
        await main.setEmailInMainPage(random.randomEmail());
        await main.clickTryForFreeButton();
        await main.pageURL();
    })

    it('should display header dropdown menu', async () => {
        await main.scrollToText();
        await main.scrollToLogo();
        await main.dropdownIsVisible()
    })

    it('redirect to g2 page', async () => {
        await main.clickG2link();
        await browser.pause(1000)
        await main.g2pageURL();
        await browser.pause(1000)
    })

    it('redirect to Telnyx API Documentation page', async () => {
        await main.clickLearnMore();
        await main.APIheaderIsVisible()
    })

    it('redirect to products page', async () => {
        await main.clickExploreProductsButton();
        await main.productPageURL()
    })

    it('redirect to storage page to Join the waitlist', async () => {
     
        await main.clickWaitListLink();
        await main.waitListHeaderIsVisible()
    })

    it('click all question', async () => {
        await main.clickWaitListLink();
        await faq.getQuestions()
    })

    it('get headers from Products dropdown in header', async () => {
        await main.focusDropdown(productButton);
        await main.getTextFromProducts()
    })

    it('get headers from Solution dropdown in header', async () => {
        await main.focusDropdown(solutionButton);
        await main.getTextFromSolutions()
    })

    it('get headers from Resources dropdown in header', async () => {
        await main.focusDropdown(resourcesButton);
        await main.getTextFromResources()
    })

    it('get headers from Company dropdown in header', async () => {
        await main.focusDropdown(companyButton);
        await main.getTextFromCompany()
    })

    it('get headers from Pricing dropdown in header', async () => {
        await main.focusDropdown(pricingButton);
        await main.getTextFromPricing()
    })

    it('get headers from footer blocks', async () => {
        await main.scrollToFooter();
        await main.getTextFromFooterTitles()
    })

    it('get all footer links', async () => {
        await main.scrollToFooter();
        await main.getAllFooterLinks();
    })


})