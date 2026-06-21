import { Page } from '@playwright/test';
import { readJSON } from '../utils/jsonHelper';

const loginLocators = readJSON('./locators/loginLocators.json');

export class LoginPage {

    constructor(private page: Page) {}

    async login(username: string, password: string) {

        await this.enterUsername(username);
        await this.enterPassword(password);

        await this.clickLogin();

    }

    async enterUsername(username: string) {
        await this.page.waitForSelector(loginLocators.usernameInput, { timeout: 30000 });
        await this.page.fill(loginLocators.usernameInput, username);
    }

    async enterPassword(password: string) {
        await this.page.fill(loginLocators.passwordInput, password);
    }

    async clickLogin() {
        await this.page.click(loginLocators.loginButton);
    }
}