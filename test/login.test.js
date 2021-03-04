describe("interaction with web elements", function(){
    it("should get field text", function(){
        browser.url('/');
        const label = $('span.a-size-base.a-color-base');
        let text = label.getText();
        console.log(text);
});
    it("search in a field", function(){
        browser.url('/');
        const search = $('#twotabsearchtextbox');
        search.setValue('Apple Mac Book');
       browser.pause(5000);

});
    it('click on element', function(){
        browser.url('/');
        const icon = $('input.nav-input');
        icon.click();
});
    it('click on accounts button', function(){
        browser.url('/');
        const signInbtn = $('span.nav-line-2.nav-long-width');
        signInbtn.click();

    });
    it('capture browser title', function(){
        browser.url('/');
        let title = browser.getTitle();
        console.log(title);
    });
});