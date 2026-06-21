import { Page, expect } from '@playwright/test';
import { readJSON } from '../utils/jsonHelper';

const loginLocators = readJSON('./locators/loginLocators.json');

export class LoginPage {

    constructor(private page: Page) {}

    async login(username: string, password: string) {

        const usernameField = this.page.locator(loginLocators.usernameInput);
        const passwordField = this.page.locator(loginLocators.passwordInput);
        const loginButton = this.page.locator(loginLocators.loginButton);

        // ✅ Playwright auto-wait handles stability across browsers
        await expect(usernameField).toBeVisible({ timeout: 60000 });
        await usernameField.fill(username);

        await expect(passwordField).toBeVisible({ timeout: 60000 });
        await passwordField.fill(password);

        await expect(loginButton).toBeVisible({ timeout: 60000 });
        await loginButton.click();

        // ✅ stable post-login validation (dashboard/header check)
        const dashboardHeader = this.page.locator(
            "//h6[contains(@class,'oxd-topbar-header-breadcrumb-module')]"
        );

        await expect(dashboardHeader).toBeVisible({ timeout: 60000 });
    }

    async enterUsername(username: string) {
        await this.page.locator(loginLocators.usernameInput).fill(username);
    }

    async enterPassword(password: string) {
        await this.page.locator(loginLocators.passwordInput).fill(password);
    }

    async clickLogin() {
        await this.page.locator(loginLocators.loginButton).click();
    }
}