describe("interaction with web elements", function(){
    it("should get header text", function(){
        browser.url('https://www.freshworks.com');
        const header = $('h1');
        let text = header.getText();
        console.log(text);
    });
});