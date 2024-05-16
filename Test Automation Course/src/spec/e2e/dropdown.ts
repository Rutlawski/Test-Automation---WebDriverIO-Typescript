import ProductPage from "../../pages/ProductPage";
import { productPageTitle } from "../../lib/Text";

describe("Tests dropdown element", async() => {
    it("Opens Product page", async() => {
        await ProductPage.openProductPage();
        await expect(browser).toHaveTitle(productPageTitle);
    })
    it("Selects dropdown value to 'L'", async() => {
        await ProductPage.selectDropdownValueL();
        await expect(ProductPage.dropdown).toHaveValue("3");
    })
    it("Selects dropdown value to 'M'", async() => {
        await ProductPage.selectDropdownValueM();
        await expect(ProductPage.dropdown).toHaveValue("2");
    })
    it("Selects dropdown value to 'S'", async() => {
        await ProductPage.selectDropdownValueS();
        await expect(ProductPage.dropdown).toHaveValue("1");
    })
})