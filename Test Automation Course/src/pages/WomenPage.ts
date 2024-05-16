

class WomenPage{
    get checkboxTop(){
        return $("#layered_category_4");
    }
    get checkboxSmall(){
        return $("#uniform-layered_id_attribute_group_1");
    }
    get checkboxes(){
        return $$("#ul_layered_id_attribute_group_1 li input");
    }
    async clickOnCheckbox(){
        const checkboxElement: WebdriverIO.Element = await this.checkboxTop;
        await checkboxElement.click();
    }
    async clickMultipleCheckboxesandVerify(){
        const multipleCheckboxElements: WebdriverIO.ElementArray = await this.checkboxes;
        await multipleCheckboxElements.map(async i => {
            await i.click();
        })
    }
}

export default new WomenPage();