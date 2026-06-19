import { Page, expect } from '@playwright/test';
import { readJSON } from '../utils/jsonHelper';

const dashboardLocators = readJSON('./locators/dashboardLocators.json');

export class DashboardPage {

    constructor(private page: Page) {}

    async verifyDashboardVisible() {

    await expect(this.page.locator(dashboardLocators.dashboardText)).toBeVisible();
    }

    async clickProfileIcon() {

        await this.page.click(dashboardLocators.profileIcon);
    }
}