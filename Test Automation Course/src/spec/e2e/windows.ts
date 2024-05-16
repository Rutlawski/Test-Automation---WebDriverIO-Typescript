import HomePage from "../../pages/HomePage";
import { productPageUrl } from "../../lib/url";
import { homePageTitle, productPageTitle } from "../../lib/Text";

describe("Tests multiple opened windows", async() => {
    it("Opens Homepage and verifies", async() => {
        await HomePage.openHomePageAndVerify();
    })
    it("Opens Product Page in new window", async() => {
        await browser.newWindow(productPageUrl);
        await expect(browser).toHaveTitle(productPageTitle);
    })
    it("Switches between windows", async() => {
        const openWindows = await browser.getWindowHandles();
        await browser.switchToWindow(openWindows[0]);
        await expect(browser).toHaveTitle(homePageTitle);
        await browser.switchToWindow(openWindows[1]);
        await expect(browser).toHaveTitle(productPageTitle);
    })
})