const sc = 'loginScreen'+Date;
class Screenshot{
    async screenShotsName() {
        await browser.saveScreenshot('../csreenshots/loginPage/loginScreen'+sc)
    }
}

module.exports = new Screenshot()