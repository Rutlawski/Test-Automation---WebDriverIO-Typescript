import GlobalPage from "./GlobalPage";

class HomePage extends GlobalPage{
    get homepageLogo(){
        return $("//a[@class='site-title']");
    }
    get cartIcon(){
        return $("li.top-cart > a");
    }
    get addToCartButton(){
        return $("div.primary > div > div >div >div > div >div >div > div > div > a");
    }
    async openHomePage(){
        await browser.url("/");
    }
    async clickHomePageLogo(){
        const homepageLogoElement: WebdriverIO.Element = await this.homepageLogo;
        await homepageLogoElement.waitForDisplayed();
        await homepageLogoElement.click();
    }
    async isCartIconVisible(){
        const cartIconElement: WebdriverIO.Element = await this.cartIcon;
        await cartIconElement.waitForDisplayed();
    }
    async getCartIconText(){
        const cartIconElement: WebdriverIO.Element = await this.cartIcon;
        return cartIconElement.getText();
    }
    async addProductToCart(){
        const addToCartButtonElement: WebdriverIO.Element = await this.addToCartButton;
        await addToCartButtonElement.waitForDisplayed();
        await addToCartButtonElement.scrollIntoView();
        await addToCartButtonElement.click();
    }
    async clickCartIcon(){
        const cartIconElement: WebdriverIO.Element = await this.cartIcon;
        await cartIconElement.waitForDisplayed();
        await cartIconElement.click();
    }
}

export default new HomePage();