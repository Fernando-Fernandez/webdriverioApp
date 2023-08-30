import { remote } from 'webdriverio';
import dotenv from 'dotenv';

dotenv.config();
const SF_URL = process.env.SF_URL;
const SF_USERNAME = process.env.SF_USERNAME;
const SF_PWD = process.env.SF_PWD;

// NOTE:  to run multiple connections:  const { multiremote } = require('webdriverio');
// should we specify hostname: 'localhost' and port in capabilities?

( async function() {

    const browser = await remote({
        capabilities: {
            browserName: 'chrome',
            'goog:chromeOptions': {
                args: [ 'headless', 'disable-gpu', 'disable-notifications' ]
            }
        }
    });
    
    // testBrowser( browser );
    testSalesforce( browser );

} )();

// async function testBrowser( browser ) {
//     await browser.url('https://webdriver.io');
    
//     const apiLink = await browser.$('=API');
//     await apiLink.click();
    
//     await browser.saveScreenshot('./screenshot.png');
//     await browser.deleteSession();
// }

async function testSalesforce( browser ) {

    const PAGE_LOAD_TIMEOUT = 10 * 1000;   // 10 seconds
    await browser.url( SF_URL );
    const form = await browser.$( "#login_form" );
    await form.waitForExist( PAGE_LOAD_TIMEOUT );

    const usernameInput = await browser.$( "#username" );
    await usernameInput.setValue( SF_USERNAME );

    const passwordInput = await browser.$( "#password" );
    await passwordInput.setValue( SF_PWD );

    const loginButton = await browser.$( '#Login' );
    await loginButton.click();
    await browser.pause(5 * 1000);

    await browser.saveScreenshot('./screenshot.png');
    await browser.deleteSession();
}
