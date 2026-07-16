import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
    testDir: './tests',

    /* ✅ Run tests in parallel safely */
    fullyParallel: false,

    /* ❌ Don’t stop full suite on first failure */
    forbidOnly: !!process.env.CI,

    /* ✅ CI stability */
    retries: process.env.CI ? 1 : 0,

    /* ⚖️ Safe worker count for Jenkins + browsers */
    workers: process.env.CI ? 1 : undefined,

    /* 📊 Reporter (Allure + HTML) */
    reporter: [
        ['html'],
        ['allure-playwright']
    ],

    /* ⏱ Global timeouts */
    timeout: 60000,

    expect: {
        timeout: 10000
    },

    /* 🌐 Browser settings */
    use: {
        baseURL: process.env.BASE_URL || 'https://opensource-demo.orangehrmlive.com',

        /* ✅ IMPORTANT for CI stability */
        actionTimeout: 30000,
        navigationTimeout: 60000,

        trace: 'on-first-retry',
        screenshot: 'only-on-failure',
        video: 'retain-on-failure',

        headless: true,
    },

    /* 🌍 Cross-browser execution */
    projects: [
        {
            name: 'chromium',
            use: { ...devices['Desktop Chrome'] },
        }
            // ,
        // {
        //     name: 'firefox',
        //     use: { ...devices['Desktop Firefox'] },
        // },
        // {
        //     name: 'webkit',
        //     use: { ...devices['Desktop Safari'] },
        // }
    ],

    /* 📁 Output folders */
    outputDir: 'test-results',
});