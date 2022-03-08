const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class DynamicLoadingPage extends Page {
    

    get btnStart() {
        return $('<button />');
    }

    get helloWorld() {
        return $('h4*=Hello');
    }
    
    /**
     * overwrite specific options to adapt it to page object
     */
    open() {
        return super.open('dynamic_loading/2');
    }
}

module.exports = new DynamicLoadingPage();
