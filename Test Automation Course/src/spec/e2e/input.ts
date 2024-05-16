import homePage from "../../pages/HomePage";

describe("Input element test", async() => {
    it("Opens Homepage and verifies", async() => {
        await homePage.openHomePageAndVerify();
    })
    it("Enters text into the searchbar", async() => {
        await homePage.enterValue();
        await expect(homePage.searchInput).toHaveValue("Dress");
    })
    it("Clears search value from the searchbar", async() => {
        await homePage.clearValue();
        await expect(homePage.searchInput).toHaveValue("");
    })
})