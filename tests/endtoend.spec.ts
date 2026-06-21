import { test,expect  } from '@playwright/test';

import { LoginPage } from '../pages/LoginPage';
import { DashboardPage } from '../pages/DashboardPage';
import { LogoutPage } from '../pages/LogoutPage';

import { ENV } from '../utils/env';

test('OrangeHRM Login Test', async ({ page }) => {

    await page.goto(ENV.BASE_URL);

    const loginPage = new LoginPage(page);

    const dashboardPage = new DashboardPage(page);

    const logoutPage = new LogoutPage(page);

    await loginPage.login(ENV.HRM_USERNAME,ENV.HRM_PASSWORD);

    await dashboardPage.verifyDashboardVisible();

    await dashboardPage.clickProfileIcon();

    await logoutPage.clickLogout();
});

test('Demo failure for screenshot', async ({ page }) => {

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');

    // real failure (UI mismatch simulation)
    await expect(page.locator('h1')).toHaveText('NonExistingText');
});

