import Dashboard from  '../pages/orange_hrm_dashboard.page';
import OrangeHRMPage from  '../pages/orange_hrm.page';
import data from '../testData/data.json'

describe('Login to Orange HRM application', () => {
    it('should login Orange HRM with valid credentials', async () => {
        await OrangeHRMPage.open();
        await OrangeHRMPage.login(data.userName, data.password);
        await Dashboard.verifyDashboard();
    });
});


