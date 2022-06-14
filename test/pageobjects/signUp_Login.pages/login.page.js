const assert = require('assert');
const wait = require('../../../helpers/wait.untill')

const emailInput = '[class*="eSxLXo"] [name="email"]';
const passwordInput ='[class*="gxdokR"] [name="password"]';
const loginButton = '//button[text()="Log in"]';
const errorMessage = '[class="Message__MessageCopy-izQIRg dJvVGg"]';
const loginWithGoogleButton = '//*[text()="Log in with Google"]';
const loginWithMicrosoftButton = '//*[text()="Log in with Microsoft"]';
const loginAnotherProviderButton = '[class*=" bJmGgN"]';
const loginWithGithubButton = '//*[text()="Log in with Github"]';
const loginWithLinkedinButton = '//*[text()="Log in with Linkedin"]';
const loginWithFacebookButton = '//*[text()="Log in with Facebook"]';
const homeHeader = '[class="tx-Z12BLcq"]'


class LoginPage {
    get errorMessage() {return $('[class="Message__MessageCopy-izQIRg dJvVGg"]')};
    get emailError() {return $('[class="TextField__ErrorMessage-wqPfx fjBYhj"]')}

    async homeHeaderIsVisible() {
        await wait.waitUntilDisplayed(homeHeader);
        await wait.isDisplayed(homeHeader)
    }


    async setEmailValue(value) {
        await wait.setValue(emailInput, value)
    }

    async setPasswordValue(value) {
        await wait.setValue(passwordInput, value)
    }

    async clickLoginButton() {
        await wait.click(loginButton);
    }

    async errorMessageIsVisible() {
        await wait.waitUntilDisplayed(errorMessage);
        console.log('Is message displayed?: ' + await this.errorMessage.isDisplayed())
    }

    async clickloginWithGoogle() {
        await wait.click(loginWithGoogleButton)
    }

    async clickLoginWithMicrosoft() {
        await wait.click(loginWithMicrosoftButton)
    }

    async clickLoginWithAnotherProvider() {
        await wait.click(loginAnotherProviderButton);
    }

    async clickLoginWithGithub() {
        await wait.click(loginWithGithubButton);
    }

    async clickLoginWithFacebook() {
        await wait.click(loginWithFacebookButton);
    }

    async clickLoginWithLinkedin() {
        await wait.click(loginWithLinkedinButton);
    }

    async currentPageUrl() {
        const currentUrl = await browser.getUrl()
        assert('https://portal.telnyx.com/#/login/sign-in', await currentUrl)
    }
}
module.exports = new LoginPage()