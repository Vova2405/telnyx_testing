const wait = require('../../../helpers/wait.untill');

    const googleAuthorizationHeader = '[class="kHn9Lb"]';
    const microsoftLogo = '[class="logo"]';
    const facebookHeader = '[class="_9axz"]';
    const linkedinHeader = '[class="header__logo"]';
    const githubLogo = '[class="header-logo"]';
    const gitHubLoginInput = '#login_field';
    const gitHuSsignInButton ='[class*="btn btn-primary"]';
    const gitHubPasswordInput = '#password';
    const homeHeader = '[class="tx-Z12BLcq"]';
    const linkedInEmailInput = '#username';
    const linkedInPasswordInput = '#password';
    const linkedInSignInButton = '[class*="btn__primary--large"]'


class RedirectingPage {

    get googleAuthorizationHeader() {return $('[class="kHn9Lb"]')};
    get microsoftLogo() {return $('[class="logo"]')};
    get facebookHeader() {return $('[class="_9axz"]')};
    get linkedinHeader() {return $('[class="header__logo"]')};
    get githubLogo() {return $('[class="header-logo"]')}
    get homeHeader() {return $('[class="tx-Z12BLcq"]')}

    async googleHeaderIsVisible() {
        await wait.waitUntilDisplayed(googleAuthorizationHeader);
        console.log('Choose an account is visible?: ' + await this.googleAuthorizationHeader.isDisplayed())
    }

    async microsoftLogoIsVisible() {
        await wait.waitUntilDisplayed(microsoftLogo);
        console.log('Microsoft logo is visible?: ' + await this.microsoftLogo.isDisplayed())
    }

    async facebookHeaderIsVisible() {
        await wait.waitUntilDisplayed(facebookHeader);
        console.log('Facebook header is visible?: ' + await this.facebookHeader.isDisplayed())
    }

    async linkedinHeaderIsVisible() {
        await wait.waitUntilDisplayed(linkedinHeader);
        console.log('Linkedin header is visible?: ' + await this.linkedinHeader.isDisplayed())
    }

    async githubLogoIsVisible() {
        await wait.waitUntilDisplayed(githubLogo);
        console.log('Github logo is visible?: ' + await this.githubLogo.isDisplayed())
    }

    async setGitEmail() {
        await wait.setValue(gitHubLoginInput, 'Vova2405');
    }

    async clickGitSignInButton() {
        await wait.click(gitHuSsignInButton);
    }

    async setGitPassword() {
        await wait.setValue(gitHubPasswordInput, 'noone240593')
    }

    async homeHeaderIsVisible() {
        await wait.waitUntilDisplayed(homeHeader);
        console.log('Home header is visible?: ' + this.homeHeader.isDisplayed())
    }

    async setLIEmail() {
        await wait.setValue(linkedInEmailInput, 'phenom2405@gmail.com')
    }

    async setLIPassword() {
        await wait.setValue(linkedInPasswordInput, 'noone111')
    }

    async clickLISignInButton () {
        await wait.click(linkedInSignInButton)
    }

}
module.exports = new RedirectingPage()