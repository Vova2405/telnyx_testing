const wait = require('../../../helpers/wait.untill')


const reasonForContactInput = '#Reason_for_Contact__c';
const firstNameInput = '#FirstName';
const lastNameInput = '#LastName';
const buisnessEmailInput = '#Email';
const countryCodeSelect = '#Phone_Number_Extension__c';
const numberInput ='#Phone_Number_Base__c';
const companySiteInput = '#Website';
const interestInput = '#Use_Case_Form__c';
const submitButton = '//button[text()="Submit"]';
const nextButton ='//*[text()="Next"]';
const crossButton = '[class="groove-close-cross"]';
const nameInput = '#groove-input-Name';
const emailInput ='#groove-input-Email';
const commentInput = '#groove-input-Comments';
const scheduleButton = '[class="_63c1e _40f02 _0d55d primary-border"]';
const meetingInfoText = '[class="b873f _97482 d9960"]';
const thanksHeader = '//h1[contains(text(),"Thanks")]'

class TalkToExpert {

    async thanksHeaderIsVisible() {
        await wait.waitUntilDisplayed(thanksHeader);
        await wait.isDisplayed(thanksHeader)
    }

    async meetingInfoTextIsVisible() {
        await wait.isDisplayed(meetingInfoText)
    }

    async clickSubmitButton() {
        await wait.click(submitButton);
    }

   
    async selectSalesReason() {
        await wait.selectByText(reasonForContactInput, "Sales Inquiry")
       
    }

    async selectSupportReason () {
        await wait.selectByText(reasonForContactInput, "Support")
    }

    async setFirstName(name) {
        await wait.setValue(firstNameInput, name)
    }

    async setLastName(name) {
        await wait.setValue(lastNameInput, name);
    }

    async setBusinessEmail(email) {
        await wait.setValue(buisnessEmailInput, email);
    }


    async choseUaCode() {
        await wait.selectByText(countryCodeSelect, '+380');

    }

    async setPhoneNumber(num) {
        await wait.setValue(numberInput, num);
    }

    async setCompanySiteName(site) {
        await wait.setValue(companySiteInput, site);
    }

    async selectInterestValue() {
        await wait.selectByText(interestInput, 'AI / Voice Analytics')
    }

    async switchFrame() {
        await browser.pause(5000);
        const iframe = await browser.$("#groove-frame");
        const frame = await $(await iframe);     
        await browser.switchToFrame(await frame);
       
    }

    async clickNextButton() {
       await wait.click(nextButton)
    }

    async setNameValue(name) {
        await wait.setValue(nameInput, name);
    }

    async setEmailValue(email) {
        await wait.setValue(emailInput, email);
    }

    async setComment(com) {
        await wait.setValue(commentInput, com);
    }

    async clickScheduleButton () {
        await wait.click(scheduleButton);
    }

    async clickCrossButton() {
        await wait.click(crossButton);
    }

    async currentPageUrl() {
        expect(browser).toHaveUrlContaining('https://telnyx.com/thank-you?')
    }


}

module.exports = new TalkToExpert()