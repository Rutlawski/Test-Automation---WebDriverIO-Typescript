import { cartPageUrl } from "../../lib/links";
import { cartIconTextBefore, expectedCartEmptyMessage, homePageTitle } from "../../lib/text";
import CartPage from "../../pages/CartPage";
import HomePage from "../../pages/HomePage"


describe("Test 2 - Adding to Cart functionality", async() => {
    it("Opens Homepage and verifies Title", async() => {
        await HomePage.openHomePage();
        await expect(browser).toHaveTitle(homePageTitle);
    })
    it("Verifies Cart Icon Text", async() => {
        await HomePage.isCartIconVisible();
        await expect(HomePage.cartIcon).toHaveText(cartIconTextBefore);
    })
    it("Adds a product to cart and verifies cart count", async() => {
        const cartIconNumberBefore: WebdriverIO.Element = await HomePage.cartIcon;
        await HomePage.addProductToCart();
        const cartIconNumberAfter: WebdriverIO.Element = await HomePage.cartIcon;
        await expect(cartIconNumberBefore.getText()).not.toBe(cartIconNumberAfter.getText());
    })
    it("Goes to Cart and verifies URL", async() => {
        await HomePage.clickCartIcon();
        await expect(browser).toHaveUrl(cartPageUrl);
    })
    it("Changes product quantity and verifies price", async() => {
        const totalPriceBefore: WebdriverIO.Element = await CartPage.totalPrice;
        await CartPage.clickAddProductButton();
        await CartPage.clickUpdateCartButton();
        const totalPriceAfter: WebdriverIO.Element = await CartPage.totalPrice;
        await expect(totalPriceBefore.getText()).not.toBe(totalPriceAfter.getText());
    })
    it("Removes products and verifies", async() => {
        await browser.refresh();
        await CartPage.clickRemoveProductButton();
        await HomePage.shortPause();
        await CartPage.clickRemoveProductButton();
        await CartPage.clickUpdateCartButton();
        await expect(await CartPage.cartEmptyMessage).toHaveText(expectedCartEmptyMessage);
    })
})