const DynamicLoadingPage = require('../pageobjects/dynamic_loading.page');

describe('My Dynamic application', () => {
    it('should click the start button', async () => {
        await DynamicLoadingPage.open();

        await browser.saveScreenshot('./screenshots/dynamicpage.png');

        await (DynamicLoadingPage.btnStart).click();
    });
    it('should verify that the H4 exists and take a screenshot', async () => {
        await browser.pause(5000);

        await expect (DynamicLoadingPage.helloWorld).toExist;

        await browser.saveScreenshot('./screenshots/h4.png');
    })
});