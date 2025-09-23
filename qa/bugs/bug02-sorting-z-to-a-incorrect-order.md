# Bug 02 – Reverse Sorting incorrect order

SORTING ERROR

**Environment**  
- URL: https://www.saucedemo.com/v1/inventory.html  
- Browser: Chrome 127, Windows 11  

**Steps to Reproduce**  
1. Login with `standard_user`.  
2. Go to Products page.  
3. Open Sort dropdown.  
4. Select “Name (Z to A)”.  

**Expected Result**  
Products should be ordered alphabetically descending (Reverse).  

**Actual Result**  
Order is inconsistent: items “Test.allTheThings() T-Shirt” appears before “Sauce Labs Backpack”.  

**Evidence**  
Screenshot: `screenshots/bug02-sorting-z-to-a.png`  

**Severity**  
High (functional issue, incorrect sorting).  

**Suspected Area**  
Sorting dropdown implementation (`inventory_item_name` JS sorting logic).

