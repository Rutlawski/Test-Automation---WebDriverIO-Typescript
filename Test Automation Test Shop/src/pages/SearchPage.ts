class SearchPage{
    get searchHeader(){
        return $(".page-title");
    }
    get searchResults(){
        return $$(".entry-header");
    }
    get incorrectSearchHeader(){
        return $("//h1[contains(text(), 'Nothing Found')]");
    }
    async isSearchHeaderVisible(){
        const searchHeaderElement: WebdriverIO.Element = await this.searchHeader;
        await searchHeaderElement.waitForDisplayed();
    }
    async getSearchResultsNumber(n: number){
        const searchResultsElements: WebdriverIO.ElementArray = await this.searchResults;
        await expect(searchResultsElements.length).toEqual(n);
    }
}

export default new SearchPage();