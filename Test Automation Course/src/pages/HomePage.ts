import GlobalPage from "./GlobalPage";
import { homePageTitle } from "../lib/Text";
import { searchValue } from "../lib/Text";

class HomePage extends GlobalPage{
    get facebookIcon(){
        return $("li.facebook");
    }
    get searchInput(){
        return $("#search_query_top");
    }
    get womenTab(){
        return $("a[title = 'Women']");
    }
    async openHomePage(){
        await browser.url("/");
    }
    async openHomePageAndVerify(){
        await browser.url("/");
        await expect(browser).toHaveTitle(homePageTitle);
    }
    async enterValue(){
        const searchInputElement: WebdriverIO.Element = await this.searchInput;
        await searchInputElement.setValue(searchValue);
    }
    async clearValue(){
        const searchInputElement: WebdriverIO.Element = await this.searchInput;
        await searchInputElement.clearValue();
    }
    async clickOnWomenTab(){
        (await this.womenTab).click();
    }
}

export default new HomePage();