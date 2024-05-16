import { emptySearchLink } from "../../lib/links";
import { homePageTitle, incorrectHeaderText, incorrectSearchValueText, searchPageTitle, searchValueText } from "../../lib/text";
import HomePage from "../../pages/HomePage"
import SearchPage from "../../pages/SearchPage";
import searchbar from "../../pages/elements/searchbar";


describe("Test 1 - Searchbar Functionality", async() => {
    it("Opens Homepage and verifies title", async() => {
        await HomePage.openHomePage();
        await expect(browser).toHaveTitle(homePageTitle);
    })
    it("Clicks on the Search Icon and verifies URL", async() => {
        await searchbar.clickSearchIcon();
        await expect(browser).toHaveUrl(emptySearchLink);
    })
    it("Clicks on Homepage logo and verifies URL", async() => {
        await HomePage.clickHomePageLogo();
        await expect(browser).toHaveTitle(homePageTitle);
    })
    it("Fills Search Bar with a value and clicks on Search Icon", async() => {
        await searchbar.fillSearchBar(searchValueText);
        await searchbar.clickSearchIcon();
        await expect(browser).toHaveTitle(searchPageTitle);
    })
    it("Verifies search results number and displayed header", async() => {
        await SearchPage.isSearchHeaderVisible();
        await SearchPage.getSearchResultsNumber(3);
    })
    it("Clears search value in Search Bar and verifies", async() => {
        await searchbar.clearSearchBar();
        await expect(searchbar.searchBar).toHaveValue("");
    })
    it("Fills Search Bar with an incorrect value and verifies result", async() => {
        await searchbar.incorrectFillSearchBar(incorrectSearchValueText);
        await searchbar.clickSearchIcon();
        await expect(SearchPage.incorrectSearchHeader).toHaveText(incorrectHeaderText);
    })

})