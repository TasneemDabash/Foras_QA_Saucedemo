# Bug 01 – RTL: Login error overlaps inputs

LOGIN ERROR

**Environment**  
- URL: https://www.saucedemo.com/v1/  
- Browser: Chrome 127, macOS Sonoma  
- Locale: Hebrew (RTL)

**Steps to Reproduce**  
1. Open the login page.  
2. Switch UI direction to RTL.  
3. Enter `locked_out_user / secret_sauce`.  
4. Click **Login**.  

**Expected Result**  
Error message appears under input fields, aligned properly without overlapping.  

**Actual Result**  
Error message overlaps with input box border in RTL mode.  

**Evidence**  
See screenshot: `screenshots/bug01-rtl-login-error.png`  

**Severity**  
Medium (UI readability issue for RTL users).  

**Suspected Area**  
Login form CSS alignment (`.error-message-container` with RTL).


