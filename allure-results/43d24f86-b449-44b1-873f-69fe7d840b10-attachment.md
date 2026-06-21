# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: endtoend.spec.ts >> Demo failure for screenshot
- Location: tests\endtoend.spec.ts:28:5

# Error details

```
Error: expect(locator).toHaveText(expected) failed

Locator: locator('h1')
Expected: "NonExistingText"
Timeout: 10000ms
Error: element(s) not found

Call log:
  - Expect "toHaveText" with timeout 10000ms
  - waiting for locator('h1')

```

```yaml
- img "company-branding"
- heading "Login" [level=5]
- paragraph: "Username : Admin"
- paragraph: "Password : admin123"
- text:  Username
- textbox "Username"
- text:  Password
- textbox "Password"
- button "Login"
- paragraph: Forgot your password?
- link:
  - /url: https://www.linkedin.com/company/orangehrm/mycompany/
- link:
  - /url: https://www.facebook.com/OrangeHRM/
- link:
  - /url: https://twitter.com/orangehrm?lang=en
- link:
  - /url: https://www.youtube.com/c/OrangeHRMInc
- paragraph: OrangeHRM OS 5.8
- paragraph:
  - text: © 2005 - 2026
  - link "OrangeHRM, Inc":
    - /url: http://www.orangehrm.com
  - text: . All rights reserved.
- img "orangehrm-logo"
```

# Test source

```ts
  1  | import { test,expect  } from '@playwright/test';
  2  | 
  3  | import { LoginPage } from '../pages/LoginPage';
  4  | import { DashboardPage } from '../pages/DashboardPage';
  5  | import { LogoutPage } from '../pages/LogoutPage';
  6  | 
  7  | import { ENV } from '../utils/env';
  8  | 
  9  | test('OrangeHRM Login Test', async ({ page }) => {
  10 | 
  11 |     await page.goto(ENV.BASE_URL);
  12 | 
  13 |     const loginPage = new LoginPage(page);
  14 | 
  15 |     const dashboardPage = new DashboardPage(page);
  16 | 
  17 |     const logoutPage = new LogoutPage(page);
  18 | 
  19 |     await loginPage.login(ENV.HRM_USERNAME,ENV.HRM_PASSWORD);
  20 | 
  21 |     await dashboardPage.verifyDashboardVisible();
  22 | 
  23 |     await dashboardPage.clickProfileIcon();
  24 | 
  25 |     await logoutPage.clickLogout();
  26 | });
  27 | 
  28 | test('Demo failure for screenshot', async ({ page }) => {
  29 | 
  30 |     await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');
  31 | 
  32 |     // real failure (UI mismatch simulation)
> 33 |     await expect(page.locator('h1')).toHaveText('NonExistingText');
     |                                      ^ Error: expect(locator).toHaveText(expected) failed
  34 | });
  35 | 
  36 | 
```