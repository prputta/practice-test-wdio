import SearchPage from './pages/seach.page';
//import SearchPage from '.pages/search.page';
//import { expect } from 'chai';
    describe("interaction with ebay site", function(){
    it("should open the main url", function(){
        browser.url('https://www.ebay.com');
        //expect(browser).toHaveTitle('Electronics, Cars, Fashion, Collectibles & More | eBay');
    });
    it('should search a product and verify the text', function() {
        SearchPage.searchInput.addValue('Laptop');
        SearchPage.searchBtn.click();    
        //expect(searchInput).toHaveValue('Laptop');
 
    });
});