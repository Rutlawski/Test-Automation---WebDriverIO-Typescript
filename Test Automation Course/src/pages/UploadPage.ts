import { uploadPageUrl } from "../lib/url";
const path = require ("path");

class UploadPage{
    get fileUploadButton(){
        return $("#file-upload");
    }
    get fileSubmitButton(){
        return $("#file-submit");
    }
    async openHomepage(){
        await browser.url(uploadPageUrl);
    }
    async uploadImage(){
        const imagePaths = path.join(__dirname, "../images/ziemia.jpg");
        const uploadImage = await browser.uploadFile(imagePaths);
        const fileUploadButton: WebdriverIO.Element = await this.fileUploadButton;
        await fileUploadButton.setValue(uploadImage);
        }
    async submitImage(){
        const fileSubmitButton: WebdriverIO.Element = await this.fileSubmitButton;
        await fileSubmitButton.click();
        }
    }


export default new UploadPage();