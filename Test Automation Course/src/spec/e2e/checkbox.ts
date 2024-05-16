import HomePage from "../../pages/HomePage";
import WomenPage from "../../pages/WomenPage";
import { womenPageTitle } from "../../lib/Text";

describe("Tests checkbox element", async() => {
    it("Opens Homepage and verifies", async() => {
        await HomePage.openHomePageAndVerify();
    })
    it("Clicks on 'Womens' tab", async() => {
        await HomePage.clickOnWomenTab();
        await expect(browser).toHaveTitle(womenPageTitle);
    })
    it("Clicks on 'Top' checkbox", async() => {
        await WomenPage.clickOnCheckbox();
        await expect(WomenPage.checkboxTop).toBeSelected();
    })
    it("Unselects the 'Top' checkbox", async() => {
        await WomenPage.clickOnCheckbox();
        await expect(WomenPage.checkboxTop).not.toBeSelected();
    })
    it("Selects multiple checkboxes", async() => {
        await WomenPage.clickMultipleCheckboxesandVerify();
        await expect((await WomenPage.checkboxSmall).isSelected).toBeTruthy();
    })
})