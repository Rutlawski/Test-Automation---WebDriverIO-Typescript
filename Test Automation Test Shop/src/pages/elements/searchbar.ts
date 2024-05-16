class searchbar{
    get searchIcon(){
        return $("#search-top-bar-submit");
    }
    get searchBar(){
        return $("//input[@name='s']");
    }
    async clickSearchIcon(){
        const searchIconElement: WebdriverIO.Element = await this.searchIcon;
        await searchIconElement.waitForDisplayed();
        await searchIconElement.click();
    }
    async fillSearchBar(phrase: string){
        const searchBarElement: WebdriverIO.Element = await this.searchBar;
        await searchBarElement.waitForDisplayed();
        await searchBarElement.setValue(phrase);
    }
    async incorrectFillSearchBar(phrase: string){
        const searchBarElement: WebdriverIO.Element = await this.searchBar;
        await searchBarElement.waitForDisplayed();
        await searchBarElement.setValue(phrase);
    }
    async clearSearchBar(){
        const searchBarElement: WebdriverIO.Element = await this.searchBar;
        await searchBarElement.waitForDisplayed();
        await searchBarElement.clearValue();
    }
}

export default new searchbar();