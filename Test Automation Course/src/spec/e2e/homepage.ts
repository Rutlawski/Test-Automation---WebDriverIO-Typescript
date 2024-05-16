import HomePage from "../../pages/HomePage";
import { homePageTitle } from "../../lib/Text";

describe("Test1 - Open Homepage", async() => {
    it("Opens Homepage and verifies title", async() => {
        await HomePage.openHomePage();
        await expect(browser).toHaveTitle(homePageTitle);
    })
})