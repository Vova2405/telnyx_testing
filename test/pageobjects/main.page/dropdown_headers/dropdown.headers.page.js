const wait = require('../../../../helpers/wait.untill')



class DropdownHeaders {

    async headerIsVisible(element) {
        
        await wait.waitUntilDisplayed(element);
        await wait.isDisplayed(element);
    }

}

module.exports = new DropdownHeaders()