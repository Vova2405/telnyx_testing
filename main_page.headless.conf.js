const {config} = require("./main.page.conf");

const chromeHeadlessConfig = {
    ...config,
    services: ['chromedriver'],
    capabilities: [{
        maxInstances: 3,
        browserName: "chrome",
        'goog:chromeOptions': {
            args: ['--headless', '--start-maximized', '--no-sandbox', '--disable-gpu', '--window-size=1900,1000', '--allow-insecure-localhost', '--ignore-certificate-errors']
        },
    }],
    logLevel: 'warn',
//     path: "/wd/hub",
};

exports.config = chromeHeadlessConfig;
