const path = require('path');
const androidPath = path.join(process.cwd(),"app/android/Android-MyDemoAppRN.1.3.0.build-244.apk")
exports.config = {

    // ====================
    // Runner Configuration
    // ====================

    port: 4723,
    path: "/wd/hub",
    specs: [
        './test/specs/**/*.js'
    ],
    // Patterns to exclude.
    exclude: [
        // 'path/to/excluded/files'
    ],
    
    maxInstances: 10,
    
    capabilities: [{
        
            "platformName": "Android",
            "appium:platformVersion": "12",
            "appium:deviceName": "Pixel 4 API 31(S)",
            "appium:app": androidPath,
            //path.join(process.cwd(),"app/android/Android-MyDemoAppRN.1.3.0.build-244.apk"),
            "appium:automationName": "UIAutomator2"

    }],

    // ===================
    // Test Configurations
    // ===================

    logLevel: 'info',
    bail: 0,
    baseUrl: 'http://localhost',
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    
    services: ['appium'],

    framework: 'mocha',

    reporters: ['spec'],

    // Options to be passed to Mocha.
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },
    //

}
