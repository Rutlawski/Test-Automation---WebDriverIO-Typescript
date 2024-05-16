class GlobalPage{
    async shortPasue(){
        await browser.pause(2000);
    }
    async longPause(){
        await browser.pause(4000);
    }
}

export default GlobalPage;