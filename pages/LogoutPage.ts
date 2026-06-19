import { Page } from '@playwright/test';
import { readJSON } from '../utils/jsonHelper';

const logoutLocators = readJSON('./locators/logoutLocators.json');

export class LogoutPage {

    constructor(private page: Page) {}

    async clickLogout() {

        await this.page.click(logoutLocators.logoutButton);
    }
}