# Bug 04 – Checkout postal code error misaligned

CHECKOUT POSTAL CODE ERROR

**Environment**  
- URL: https://www.saucedemo.com/v1/checkout-step-one.html  
- Browser: Chrome 127, Windows 11  
- Locale: Hebrew  

**Steps to Reproduce**  
1. Login with `standard_user`.  
2. Add product to cart and proceed to checkout.  
3. Leave Postal Code field blank.  
4. Click Continue.  

**Expected Result**  
Validation message appears directly below the Postal Code field, aligned with RTL direction.  

**Actual Result**  
Message floats to the left, overlapping with unrelated text in RTL mode.  

**Evidence**  
Screenshot: `screenshots/bug04-postal-validation.png`  

**Severity**  
Medium (form usability issue for RTL users).  

**Suspected Area**  
Form validation UI (`.error-message-container`) misaligned in RTL.
