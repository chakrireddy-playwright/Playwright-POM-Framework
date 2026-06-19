# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: endtoend.spec.ts >> OrangeHRM Login Test
- Location: tests\endtoend.spec.ts:9:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: page.waitForLoadState: Test timeout of 30000ms exceeded.
```

# Test source

```ts
  1  | import { Page } from '@playwright/test';
  2  | import { readJSON } from '../utils/jsonHelper';
  3  | 
  4  | const loginLocators = readJSON('./locators/loginLocators.json');
  5  | 
  6  | export class LoginPage {
  7  | 
  8  |     constructor(private page: Page) {}
  9  | 
  10 |     async login(username: string, password: string) {
  11 | 
  12 |         await this.enterUsername(username);
  13 | 
  14 |         await this.enterPassword(password);
  15 | 
  16 |         await this.clickLogin();
  17 | 
  18 |         await this.page.waitForURL('**/dashboard/index');
> 19 |         await this.page.waitForLoadState('networkidle');
     |                         ^ Error: page.waitForLoadState: Test timeout of 30000ms exceeded.
  20 |     }
  21 | 
  22 |     async enterUsername(username: string) {
  23 |         await this.page.fill(loginLocators.usernameInput,username);
  24 |     }
  25 | 
  26 |     async enterPassword(password: string) {
  27 |         await this.page.fill(loginLocators.passwordInput,password);
  28 |     }
  29 | 
  30 |     async clickLogin() {
  31 |         await this.page.click(loginLocators.loginButton);
  32 |     }
  33 | }
```