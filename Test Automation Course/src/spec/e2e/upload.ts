import { uploadPageTitle, uploadSuccessMessage } from "../../lib/Text";
import HomePage from "../../pages/HomePage";
import UploadPage from "../../pages/UploadPage"


describe("Tests file upload", async() => {
    it("Opens Homepage", async() => {
        await UploadPage.openHomepage();
        await expect(browser).toHaveTitle(uploadPageTitle);
    })
    it("Uploads a JPG file and clicks submit button", async() => {
        await UploadPage.uploadImage();
        await UploadPage.submitImage();
        await HomePage.shortPasue();
        const uploadSuccess: WebdriverIO.Element = await $("//h3['File Uploaded!']");
        await expect(await uploadSuccess.getText()).toContain(uploadSuccessMessage);
    })
})