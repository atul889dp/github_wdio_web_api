

import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class OrangeHRMPage extends Page {
    /**
     * define selectors using getter methods
     */
    get welcome()     { return $('a#welcome');}
    get dashboard()   { return $('#menu_dashboard_index');}

    /**
     * a method to verify if dashboard is displayed post login
     */
    async verifyDashboard () {
        await this.welcome.waitForDisplayed();
        await expect(this.welcome).toBeExisting();
        await expect(this.dashboard).toHaveTextContaining('Dashboard');
    }
}

export default new OrangeHRMPage();
