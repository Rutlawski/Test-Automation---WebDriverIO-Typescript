import HomePage from "../../pages/HomePage"


describe("Tests scroll functionality", async() => {
    it("Opens Homepage and verifies", async() => {
        await HomePage.openHomePageAndVerify();
    })
})