const wait = require('../../../helpers/wait.untill');
const accountDropdown = '[class="d-flex align-items-center tx-2c709E"]';
const logOutButton  = '[class="tx-1Iv0kw"]';



class HomePage {

    async accountDropdownFocus () {
//         await wait.waitUntilDisplayed(accountDropdown);
//         await wait.moveTo(accountDropdown);
         await browser.waitUntil(async () => {
            await expect(browser).toHaveUrlContaining('https://portal.telnyx.com/#/app/');
                 30000
            
        })
        await $('[class="d-flex align-items-center tx-2c709E"]').waitForDisplayed({timeout: 30000});
        await $('[class="d-flex align-items-center tx-2c709E"]').moveTo()
    }

    async clickLOgOutButton () {
        await wait.click(logOutButton)
    }

    async getAllSidebarMenuTitles() {
        const leftSideBarMenuList = await browser.$$('[class="tx-1pz1KC"] [class="w-100"]');
        const otherLinks = await browser.$$('[class="tx-1pz1KC"] [class*="SideBarMenuItem__SideBarMenuItemLabel-kmKpNL"]');
        await leftSideBarMenuList.forEach(async (elem) => {
           return console.log('Link is ' + await elem.getText())
           
        })

        await otherLinks.forEach(async (elem) => {
            return console.log('Link is ' + await elem.getText())
            
         })
    }
}
module.exports = new HomePage()
