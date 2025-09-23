# Bug 03 – Cart badge clips in RTL

CART BADGE CLIPS ERROR

**Environment**  
- URL: https://www.saucedemo.com/v1/inventory.html  
- Browser: Safari 17, iOS 17  
- Locale: Arabic (RTL)  

**Steps to Reproduce**  
1. Login with `standard_user`.  
2. Add 10+ items to the cart.  
3. Observe cart badge.  

**Expected Result**  
Badge should expand gracefully and display all digits clearly.  

**Actual Result**  
Badge text clips the second digit in RTL view.  

**Evidence**  
Screenshot: `screenshots/bug03-cart-badge-rtl.png`  

**Severity**  
Medium (UI issue, user cannot see full count).  

**Suspected Area**  
Cart badge CSS (`.shopping_cart_badge`) lacks padding for RTL mode.
