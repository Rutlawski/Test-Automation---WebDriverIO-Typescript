import { alertPageUrl } from "../lib/url";

class AlertPage{
    get alert(){
        return $(".btn-danger");
    }
    get confirmAlertTab(){
        return $("//a[contains(text(), 'Alert with OK & Cancel')]");
    }
    get confirmAlert(){
        return $(".btn-primary");
    }
    get textboxAlertTab(){
        return $("//a[contains(text(), 'Alert with Textbox')]");
    }
    get textboxAlert(){
        return $(".btn-info");
    }
    async openHomePage(){
        await browser.url(alertPageUrl);
    }
    async clicksAlert(){
        const alertButton: WebdriverIO.Element = await this.alert;
        await alertButton.click();
    }
    async clickOnConfirmAlert(){
        const confirmAlertTab: WebdriverIO.Element = await this.confirmAlertTab;
        const confirmAlertButton: WebdriverIO.Element = await this.confirmAlert;
        await confirmAlertTab.click();
        await confirmAlertButton.click();
    }
    async clicksTextboxAlert(){
        const textboxAlertTab: WebdriverIO.Element = await this.textboxAlertTab;
        const textboxAlertButton: WebdriverIO.Element = await this.textboxAlert;
        await textboxAlertTab.click();
        await textboxAlertButton.click();
    }
}

export default new AlertPage();