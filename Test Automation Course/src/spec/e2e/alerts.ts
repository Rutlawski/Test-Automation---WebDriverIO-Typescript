import { alertPageTitle, alertText, dissmisMessage, expectedMessage } from "../../lib/Text";
import AlertPage from "../../pages/AlertPage"
import HomePage from "../../pages/HomePage";


describe("Tests alert functionality", async() => {
    it("Opens Alert Homepage", async() => {
        await AlertPage.openHomePage();
        await HomePage.shortPasue();
        await expect(browser).toHaveTitle(alertPageTitle);
    })
    it("Enables and disables alert", async() => {
        await AlertPage.clicksAlert();
        await expect(await browser.isAlertOpen()).toBeTruthy();
        await browser.dismissAlert();
        await expect(await browser.isAlertOpen()).toBeFalsy();
    })
    it("Opens and dismisses confirmation alert", async() => {
        await AlertPage.clickOnConfirmAlert();
        await expect(await browser.isAlertOpen).toBeTruthy();
        await browser.dismissAlert();
        const p: WebdriverIO.Element = await $("#demo");
        const pText: string = await p.getText();
        await expect(pText).toBe(dissmisMessage);
    })
    it("Opens and accepts alert with textbox", async() => {
        await AlertPage.clicksTextboxAlert();
        await expect(await browser.isAlertOpen()).toBeTruthy();
        await browser.sendAlertText(alertText);
        await browser.acceptAlert();
        const p: WebdriverIO.Element = await $("#demo1");
        await expect(await p.getText()).toContain(expectedMessage);
    })
})