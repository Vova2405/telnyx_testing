const {config} = require("./wdio.conf");

const chromeHeadlessConfig = {
    ...config,
    services: [[{chrome: 'latest'}]],
    capabilities: [{
        maxInstances: 3,
        browserName: "chrome",
        'goog:chromeOptions': {
            args: ['--headless', '--start-maximized', '--no-sandbox', '--disable-gpu', '--window-size=1900,1000', '--allow-insecure-localhost', '--ignore-certificate-errors']
        },
    }],
    logLevel: 'warn',
    path: "/wd/hub",
};

exports.config = chromeHeadlessConfig;