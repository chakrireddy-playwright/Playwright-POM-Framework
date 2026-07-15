import { test,expect  } from '@playwright/test';

import { LoginPage } from '../pages/LoginPage';
import { DashboardPage } from '../pages/DashboardPage';
import { LogoutPage } from '../pages/LogoutPage';

import { ENV } from '../utils/env';
import { createBug } from '../utils/jira/createBug';

test('OrangeHRM Login Test @smoke', async ({ page }) => {

    try {

        await page.goto(ENV.BASE_URL);

        const loginPage = new LoginPage(page);

        const dashboardPage = new DashboardPage(page);

        const logoutPage = new LogoutPage(page);

        await loginPage.login(ENV.HRM_USERNAME, ENV.HRM_PASSWORD);

        //await dashboardPage.verifyDashboardVisible();  
        await expect(page.locator("h1")).toHaveText("ManagerDemoFailure");      
        
        await dashboardPage.clickProfileIcon();

        await logoutPage.clickLogout();

    }catch (error: any) {

        await createBug(
            "OrangeHRM Login Test Failed",
            `
                Test Name : OrangeHRM Login Test

                Environment : QA

                Browser : Chromium

                Failure Reason :

                ${error.message}
                `
        );

        throw error;

    }

});

    test.skip('Demo failure test @demo', async ({ page }) => {

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');

    // real failure (UI mismatch simulation)
    await expect(page.locator('h1')).toHaveText('NonExistingText');
});

