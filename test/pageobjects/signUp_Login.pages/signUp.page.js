const randomEmail = require('../../../helpers/randomGenerate');
const wait = require('../../../helpers/wait.untill')
const emailInput = '#email';
const fullNameInput ='#full_name';
const passwordInput = '#password';
const createAccountButton = '//button[text()="Create Account"]';
const checkbox = '[for="subscription_opt_in"]';
const sentLetter = 'h1[class*=" gkWopw etvJmf"]';
const emailError = '#email_error';
const nameError = '#full_name_error';
const agreeTermsCheckbox = '[aria-labelledby="terms-label"]'


class SignUpPage{
    get sentLetter() {return $('h1[class*=" gkWopw etvJmf"]')};
    get emailError() {return $('#email_error')};
    get nameError() {return $('#full_name_error')}



    async setEmail() {
        await wait.setValue(emailInput, randomEmail.randomEmail())
    }

    async setFullName() {
        await wait.setValue(fullNameInput, 'tester tester')
    }
    async setPassword() {
        await wait.setValue(passwordInput, 'Password123456.')
    }

    async clickCreateAccountButton() {
        await wait.click(createAccountButton)
    }

    async clickCheckbox() {
        await wait.click(checkbox)
    }
    async clickTermsAndPolicy() {
        await wait.click(agreeTermsCheckbox)
    }

    async sentLetterIsVisible() {
        await wait.waitUntilDisplayed(sentLetter);
        console.log('Sent letter is visible?: ' + await this.sentLetter.isDisplayed())
    }

    async emailErrorIsVisible() {
        await wait.waitUntilDisplayed(emailError);
        console.log('Email error notification is visible?: ' + await this.emailError.isDisplayed())
    }

    async nameErrorIsVisible() {
        await wait.waitUntilDisplayed(nameError);
        console.log('Full name error notification is visible?: ' + await this.nameError.isDisplayed())
    }
}

module.exports = new SignUpPage()