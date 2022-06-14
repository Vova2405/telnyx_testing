class WaitUntill {
    
    async getElement(element) {
        return await $(element);
    }
    
    
async waitUntilClickable(element, timeout) {
        await browser.waitUntil(async () => {
            return (await this.getElement(element)).isClickable();
        }, {timeout: timeout});
    }


async waitUntilDisplayed(element, timeout) {
        await browser.waitUntil(async () => {
            return (await this.getElement(element)).isDisplayed();
        }, {timeout: timeout});
    }

   

async click(element) {
        await this.waitUntilClickable(element);
        await (await this.getElement(element)).click();
    }
async setValue(element, value) {
        await this.waitUntilDisplayed(element);
        await (await this.getElement(element)).setValue(value);
    }

    async isDisplayed(element) {
        await (await this.getElement(element)).isDisplayed()
    }

    async getText(element) {
        await (await this.getElement(element)).getText()
    }

    async moveTo(element) {
        await (await this.getElement(element)).moveTo()
    }

    async scrollTo(element) {
        await (await this.getElement(element)).scrollIntoView()
    }

    async selectByText(element, value) {
        await this.waitUntilDisplayed(element);
        await (await this.getElement(element)).selectByVisibleText(value);
    }


    async switch() {
        await browser.pause(5000);
        const iframe = await browser.$("#groove-frame");
        const frame = await $(await iframe);     

        await browser.switchToFrame(await frame);
   
        const clickAgree = await browser.$('[class="_63c1e _28d6f _0d55d primary-border"]');   
        await clickAgree.click();

        


    }

    

}
module.exports = new WaitUntill()