import { productPageUrl } from "../lib/url";

class ProductPage{
    get dropdown(){
        return $("#group_1");
    }
    async openProductPage(){
        await browser.url(productPageUrl);
    }
    async selectDropdownValueL(){
        const dropdownElement: WebdriverIO.Element = await this.dropdown;
        await dropdownElement.selectByVisibleText("L");
    }
    async selectDropdownValueM(){
        const dropdownElement: WebdriverIO.Element = await this.dropdown;
        await dropdownElement.selectByIndex(1);
    }
    async selectDropdownValueS(){
        const dropdownElement: WebdriverIO.Element = await this.dropdown;
        await dropdownElement.selectByAttribute("value", "1");
    }
}

export default new ProductPage();