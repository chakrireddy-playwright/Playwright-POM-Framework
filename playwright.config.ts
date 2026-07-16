import { defineConfig, devices } from '@playwright/test';

export default defineConfig({

    testDir: './tests',

    // Run tests one by one
    fullyParallel: false,

    // Prevent accidental test.only in CI
    forbidOnly: !!process.env.CI,

    // IMPORTANT: Disable retries to avoid duplicate Jira tickets
    retries: 0,

    // Run only one worker
    workers: 1,

    // Reports
    reporter: [
        ['html'],
        ['allure-playwright']
    ],

    // Global timeout
    timeout: 60000,

    expect: {
        timeout: 10000
    },

    use: {
        baseURL: process.env.BASE_URL || 'https://opensource-demo.orangehrmlive.com',

        actionTimeout: 30000,
        navigationTimeout: 60000,

        // No retry means no trace on retry
        trace: 'off',

        screenshot: 'only-on-failure',
        video: 'retain-on-failure',

        headless: true,
    },

    // Run only Chromium
    projects: [
        {
            name: 'chromium',
            use: {
                ...devices['Desktop Chrome']
            }
        }
    ],

    outputDir: 'test-results',

});