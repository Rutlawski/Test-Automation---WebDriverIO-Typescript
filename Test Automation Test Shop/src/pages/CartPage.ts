class CartPage{
    get totalPrice(){
        return $("td.product-subtotal > span");
    }
    get addProductButton(){
        return $(".dashicons-plus");
    }
    get removeProductButton(){
        return $(".dashicons-minus");
    }
    get updateCartButton(){
        return $("//input[@value='Update cart']");
    }
    get cartEmptyMessage(){
        return $(".cart-empty");
    }
    async clickAddProductButton(){
        const addProductButtonElement: WebdriverIO.Element = await this.addProductButton;
        await addProductButtonElement.waitForDisplayed();
        await addProductButtonElement.click();
    }
    async clickRemoveProductButton(){
        const removeProductButtonElement: WebdriverIO.Element = await this.removeProductButton;
        await removeProductButtonElement.waitForDisplayed();
        await removeProductButtonElement.click();
    }
    async clickUpdateCartButton(){
        const updateCartButtonElement: WebdriverIO.Element = await this.updateCartButton;
        await updateCartButtonElement.waitForDisplayed();
        await updateCartButtonElement.click();
    }
}

export default new CartPage();