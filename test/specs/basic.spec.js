const main = require('../pageobjects/main.page/main.page');
const loginPage = require('../pageobjects/signUp_Login.pages/login.page');
const redirectingPage = require('../pageobjects/redirectings/login.redirecting.page');
const signUpPage = require('../pageobjects/signUp_Login.pages/signUp.page');
const loginRedirectingPage = require('../pageobjects/redirectings/login.redirecting.page');
const homePage = require('../pageobjects/home.page/home.page');
const wait = require('../../helpers/wait.untill')



describe('main page testing',() => {

    before(async () => {
        await browser.url('https://telnyx.com/');
        await main.clickAcceptButton();
    })

    beforeEach(async() => {
        await browser.url('https://telnyx.com/');
    })

    it('log in with wrong credentials', async () => {
        await main.clickLoginButton();
        await loginPage.setEmailValue('kadnldsbjsdhb@kjsng.afln');
        await loginPage.setPasswordValue('123456789');
        await loginPage.clickLoginButton();
        await loginPage.errorMessageIsVisible()
    })

    it('login with correct credentials', async () => {
        await main.clickLoginButton();
        await loginPage.setEmailValue('phenom2405@gmail.com');
        await loginPage.setPasswordValue('Noone123456.');
        await loginPage.getValues()
        await loginPage.clickLoginButton();
        await loginPage.buttonEnabled();
        await browser.pause(15000);
        await loginPage.buttonEnabled();
        await loginPage.clickLoginButton();
        await homePage.redirectToHomePage();
        await loginPage.homeHeaderIsVisible();
        await homePage.accountDropdownFocus();
        await homePage.clickLOgOutButton()
    })

    it('log in with empty values', async() => {
        await main.clickLoginButton();
        await loginPage.clickLoginButton();
        await loginPage.currentPageUrl()
    })

    it('full log in with linkedIn', async() => {
        await main.clickLoginButton();
        await loginPage.clickLoginWithAnotherProvider();
        await loginPage.clickLoginWithLinkedin();
        await redirectingPage.setLIEmail();
        await redirectingPage.setLIPassword();
        await redirectingPage.clickLISignInButton();
        await loginPage.homeHeaderIsVisible();
        await homePage.accountDropdownFocus();
        await homePage.clickLOgOutButton()
    })

    it('log in with microsoft', async() => {
        await main.clickLoginButton();
        await loginPage.clickLoginWithMicrosoft();
        await redirectingPage.microsoftLogoIsVisible()
    })

    it('log in with facebook', async() => {
        await main.clickLoginButton();
        await loginPage.clickLoginWithAnotherProvider()
        await loginPage.clickLoginWithFacebook();
        await redirectingPage.facebookHeaderIsVisible()
    })


    it('log in with github', async() => {
        await main.clickLoginButton();
        await loginPage.clickLoginWithAnotherProvider()
        await loginPage.clickLoginWithGithub();
        await redirectingPage.githubLogoIsVisible()
    })

    it('sign up with valid values', async() => {
        await main.clickSignUpButton();
        await signUpPage.setEmail();
        await signUpPage.setFullName();
        await signUpPage.setPassword();
        await signUpPage.clickTermsAndPolicy()
        await signUpPage.clickCheckbox()
        await signUpPage.clickCreateAccountButton();
        await signUpPage.clickCreateAccountButton();
        await signUpPage.sentLetterIsVisible();

    })

    it('sign up with empty values', async() => {
        await main.clickSignUpButton();
        await signUpPage.clickCreateAccountButton();
        await signUpPage.emailErrorIsVisible();
        await signUpPage.nameErrorIsVisible()
    })

    it('get all feft sidebar menu list texts', async() => {
        await main.clickLoginButton();
        await loginPage.setEmailValue('phenom2405@gmail.com');
        await loginPage.setPasswordValue('Noone123456.');
        await loginPage.clickLoginButton();
        await loginPage.homeHeaderIsVisible();
        await homePage.getAllSidebarMenuTitles();
    })

})
