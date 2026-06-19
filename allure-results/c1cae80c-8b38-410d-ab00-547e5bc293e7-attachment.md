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
Error: page.waitForURL: Test timeout of 30000ms exceeded.
=========================== logs ===========================
waiting for navigation to "**/dashboard/index" until "load"
============================================================
```

# Page snapshot

```yaml
- generic [ref=e4]:
  - generic [ref=e6]:
    - img "company-branding" [ref=e8]
    - generic [ref=e9]:
      - heading "Login" [level=5] [ref=e10]
      - generic [ref=e11]:
        - generic [ref=e13]:
          - paragraph [ref=e14]: "Username : Admin"
          - paragraph [ref=e15]: "Password : admin123"
        - generic [ref=e16]:
          - generic [ref=e18]:
            - generic [ref=e19]:
              - generic [ref=e20]: 
              - generic [ref=e21]: Username
            - textbox "Username" [ref=e23]: Admin
          - generic [ref=e25]:
            - generic [ref=e26]:
              - generic [ref=e27]: 
              - generic [ref=e28]: Password
            - textbox "Password" [ref=e30]: admin123
          - button "Login" [ref=e32] [cursor=pointer]
          - paragraph [ref=e34] [cursor=pointer]: Forgot your password?
        - separator [ref=e35]
        - paragraph [ref=e37]: Or login with
        - generic "123541&" [ref=e39] [cursor=pointer]:
          - paragraph [ref=e40]: 123541&
      - generic [ref=e41]:
        - generic [ref=e42]:
          - link [ref=e43]:
            - /url: https://www.linkedin.com/company/orangehrm/mycompany/
          - link [ref=e46]:
            - /url: https://www.facebook.com/OrangeHRM/
          - link [ref=e49]:
            - /url: https://twitter.com/orangehrm?lang=en
          - link [ref=e52]:
            - /url: https://www.youtube.com/c/OrangeHRMInc
        - generic [ref=e55]:
          - paragraph [ref=e56]: OrangeHRM OS 5.8
          - paragraph [ref=e57]:
            - text: © 2005 - 2026
            - link "OrangeHRM, Inc" [ref=e58]:
              - /url: http://www.orangehrm.com
            - text: . All rights reserved.
  - img "orangehrm-logo" [ref=e60]
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
> 18 |         await this.page.waitForURL('**/dashboard/index');
     |                         ^ Error: page.waitForURL: Test timeout of 30000ms exceeded.
  19 |         await this.page.waitForLoadState('networkidle');
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