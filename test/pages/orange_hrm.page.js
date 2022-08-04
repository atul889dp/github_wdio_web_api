

import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class OrangeHRMPage extends Page {
    /**
     * define selectors using getter methods
     */
    get inputUsername()     { return $('#txtUsername');}
    get inputPassword()     { return $('#txtPassword');}
    get btnLogin()          { return $('#btnLogin');
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async login (username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnLogin.click();
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open() {
        return browser.url(`https://opensource-demo.orangehrmlive.com/index.php/auth/login`)
    }
}

export default new OrangeHRMPage();
