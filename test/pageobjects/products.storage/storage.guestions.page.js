const assert = require('assert');
const wait = require('../../../helpers/wait.untill');
const firstQuestion = '[data-faq-question="0"]';
const secondQuestion = '[data-faq-question="1"]';
const thirdQuestion = '[data-faq-question="2"]';
const fouthQuestion = '[data-faq-question="3"]';
const fifthQuestion = '[data-faq-question="4"]';
const sixQuestion = '[data-faq-question="5"]';
const sevenQuestion = '[data-faq-question="6"]';
const eigthQuestion = '[data-faq-question="7"]';
const firstQuestionDesc = '#faq1_description p';
const secondQuestionDesc = '#faq2_description p';
const thirdQuestionDesc = '#faq3_description p';
const fouthQuestionDesc = '//p[contains(text(),"is less expensive than the competition")]';
const fifthQuestionDesc = '#faq5_description p';
const sixQuestionDesc = '//p[contains(text(),"Storage costs $0.015 per gigabyte")]';
const sevenQuestionDesc = `//p[contains(text(),"We're designing Telnyx")]`;
const eigthQuestionDesc = '//p[contains(text(),"Telnyx Storage uses")]';

class Faq {

    async clickFirstQuestion() {
        await wait.scrollTo(firstQuestion);
        await wait.click(firstQuestion);
        await wait.click(firstQuestion);
    }

    async firstDescIsVisible() {
        await wait.waitUntilDisplayed(firstQuestionDesc);
        const firstQuestionDescc = $('#faq1_description p');
        assert.equal(await firstQuestionDescc.getText(), 'Telnyx Storage is a distributed storage service that runs on S3-compatible APIs, but at a lower cost, so you can plug and play your S3-native data analytics, backup & restore services, and content delivery networks while saving costs.')
    }

    async clickSecondQuestion() {
        await wait.scrollTo(secondQuestion);
        await wait.click(secondQuestion);
    }

    async secondDescIsVisible() {
        await wait.waitUntilDisplayed(secondQuestionDesc);
        const secondQuestionDescc = $('#faq2_description p');
        assert.equal(await secondQuestionDescc.getText(), 'Telnyx Storage works just like any other distributed cloud storage service. You can store and read data via API, or using the Telnyx Mission Control Portal. Your data is hosted on your choice of one of ten points of presence (and backed up with redundant data copies), situated in the fastest-growing metropolitan areas in the United States, meaning your applications can access this data with low latency.')
    }

    async clickThirdQuestion() {
        await wait.scrollTo(thirdQuestion);
        await wait.click(thirdQuestion);
    }

    async thirdDescIsVisible() {
        await wait.waitUntilDisplayed(thirdQuestionDesc);
        const thirdQuestionDescc = $('#faq3_description p');
        assert.equal(await thirdQuestionDescc.getText(), 'With Telnyx Storage, you can build applications that access objects stored in the cloud. These can be artificial intelligence or machine learning applications that learn from large amounts of data, backup & restore applications that keep your business running when the unexpected happens, content delivery networks (CDNs) that seamlessly serve rich content to your audience everywhere, or cloud-native apps that run smoothly no matter the demands placed on your infrastructure.')
    }

    async clickFourthQuestion() {
        await wait.scrollTo(fouthQuestion);
        await wait.click(fouthQuestion);
    }

    async fourthDescIsVisible() {
        await wait.waitUntilDisplayed(fouthQuestionDesc);
        const fouthQuestionDesc1 = $('//p[contains(text(),"is less expensive than the competition")]');
        const fouthQuestionDesc2 = $('//p[contains(text(),"is also more modern than the competition.")]')
        assert.equal(await fouthQuestionDesc1.getText(), `Telnyx Storage is less expensive than the competition. At $0.015 per month to store a gigabyte of data, you'll save over 30% when you switch from Amazon S3's entry-level storage tiers. And, unlike the competition, you won't pay egress fees to retrieve your data from our service. That means you can build your applications with confidence, knowing that our pricing is never going to limit your scale.`)
        assert.equal(await fouthQuestionDesc2.getText(), 'Telnyx Storage is also more modern than the competition. We leverage the power of the blockchain to give you a better distributed storage service. Your files are stored on the Filecoin network, a decentralized protocol that continuously validates that your files are stored correctly. That means the data you store with Telnyx Storage is non-censorable, non-corruptible, and always available — even in the unlikely event that our APIs are not.')
    }

    async clickFifthQuestion() {
        await wait.scrollTo(fifthQuestion);
        await wait.click(fifthQuestion);
    }

    async fifthDescIsVisible() {
        await wait.waitUntilDisplayed(fifthQuestionDesc);
        const fifthQuestionDescc = $('#faq5_description p');
        assert.equal(await fifthQuestionDescc.getText(), `Our team is working closely with early-adopting customers to build our storage infrastructure and S3-compatible APIs with your needs in mind. If you'd like to be a part of our development process or get early access to an upcoming invite-only beta version of the product, fill out the form below with info about what you'd like to do with Telnyx Storage.`)
    }

    async clickSixQuestion() {
        await wait.scrollTo(sixQuestion);
        await wait.click(sixQuestion);
    }

    async sixDescIsVisible() {
        await wait.waitUntilDisplayed(sixQuestionDesc);
        const sixQuestionDesc1 = $('//p[contains(text(),"Storage costs $0.015 per gigabyte")]');
        assert.equal(await sixQuestionDesc1.getText(), `Telnyx Storage costs $0.015 per gigabyte of data stored, per month. That's over 30% less than S3's entry-level storage costs. And unlike some competitors, we don't charge egress fees for your data, so you don't pay to access your data.`)
    }

    async clickSevenQuestion() {
        await wait.scrollTo(sevenQuestion);
        await wait.click(sevenQuestion);
    }

    async sevenDescIsVisible() {
        await wait.waitUntilDisplayed(sevenQuestionDesc);
        const sevenQuestionDesc1 = $(`//p[contains(text(),"We're designing Telnyx")]`);
        const sevenQuestionDesc2 = $(`//p[contains(text(),"If you're still concerned")]`);
        assert.equal(await sevenQuestionDesc1.getText(), `We're designing Telnyx Storage from the ground-up for people who are already using S3. Our APIs will have plug-and-play compatibility with S3's API, so you can simply point your applications from S3 to Telnyx Storage and keep everything running seamlessly.`)
        assert.equal(await sevenQuestionDesc2.getText(), `If you're still concerned about migrating, our team is more than happy to work with you to ensure your migration is easy, simple, quick, and painless, so you can stop worrying about migration and start enjoying the benefits of our lower costs and latency.`)
    }

    async clickEightQuestion() {
        await wait.scrollTo(eigthQuestion);
        await wait.click(eigthQuestion);
    }

    async eightDescIsVisible() {
        await wait.waitUntilDisplayed(eigthQuestionDesc);
        const eigthQuestionDesc1 = $('//p[contains(text(),"Telnyx Storage uses")]');
        const eigthQuestionDesc2 = $('//p[contains(text(),"Filecoin is a blockchain")]');
        const eigthQuestionDesc3 = $('//p[contains(text(),"In order to ensure your")]');
        assert.equal(await eigthQuestionDesc1.getText(), `Telnyx Storage uses the Filecoin network to ensure your stored files are non-censorable, non-corruptible, and always available—even in the unlikely event that our APIs are not.`)
        assert.equal(await eigthQuestionDesc2.getText(), `Filecoin is a blockchain storage protocol that continuously validates that files are stored correctly. Telnyx handles all of our interactions with the Filecoin network independently, so you don't need to be a crypto expert to enjoy the benefits of this technology. By building our service on this battle-tested protocol, we're leveraging the power of the blockchain to provide a next-generation distributed storage experience to our users.`)
        assert.equal(await eigthQuestionDesc3.getText(), `In order to ensure your data on the blockchain stays private, secure, and under your control, we’ll require encryption ahead of uploading.`)
    }

    async getQuestions(){
        const quests = await browser.$$('[class="Text-sc-5o8owa-0 sc-fec4993d-5 czgqGc dqUxbS"]');
        
        await quests.forEach(async (elem) => {
           return await elem.scrollIntoView(await elem.click()),
            await elem.scrollIntoView(await elem.click());   
        })
        
    }

    async getAnswers() {
        const answers = $$('[class="Text-sc-5o8owa-0 sc-fec4993d-9 czgqGc hXICLy"]');

        await answers.forEach(async(ans) => {
            if(ans.isDisplayed() = false){
                console.log('not displayed')
            } else {
                return await ans.getText()
            }
            
        })
    }

}
module.exports = new Faq()