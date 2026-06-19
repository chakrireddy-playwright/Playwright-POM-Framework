# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: endtoend.spec.ts >> OrangeHRM Login Test
- Location: tests\endtoend.spec.ts:9:5

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator('//h6[text()=\'Dashboard\']')
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for locator('//h6[text()=\'Dashboard\']')
    - waiting for navigation to finish...
    - navigated to "https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index"

```

# Test source

```ts
  1  | import { Page, expect } from '@playwright/test';
  2  | import { readJSON } from '../utils/jsonHelper';
  3  | 
  4  | const dashboardLocators = readJSON('./locators/dashboardLocators.json');
  5  | 
  6  | export class DashboardPage {
  7  | 
  8  |     constructor(private page: Page) {}
  9  | 
  10 |     async verifyDashboardVisible() {
  11 | 
> 12 |     await expect(this.page.locator(dashboardLocators.dashboardText)).toBeVisible();
     |                                                                      ^ Error: expect(locator).toBeVisible() failed
  13 |     }
  14 | 
  15 |     async clickProfileIcon() {
  16 | 
  17 |         await this.page.click(dashboardLocators.profileIcon);
  18 |     }
  19 | }
```