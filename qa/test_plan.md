# Mini Test Plan: Sauce Demo

## Scope
Testing the **SauceDemo e-commerce demo site** focusing on:
- Authentication (login/logout).
- Product listing & sorting.
- Cart & checkout flow.
- Error handling and validation.
- RTL/i18n awareness for Arabic/Hebrew.

## Out of Scope
- Payment gateway integrations.
- Backend API/database testing.
- Visual pixel-perfect design validation beyond functional QA.

## Entry Criteria
- Application is accessible at https://www.saucedemo.com/v1/.
- Test accounts available (standard_user, locked_out_user, etc.).
- Browsers/devices listed in Device Matrix are available.

## Exit Criteria
- All planned test cases executed.
- No **Critical/High severity** bugs remain open.
- Reports (test cases, bug reports, device matrix, quality notes) completed.

## Risks
- Limited RTL support may cause layout breakages.
- Performance glitches in `performance_glitch_user`.
- Sorting/filtering reliability.

## Test Data
- Demo users (standard_user, locked_out_user, problem_user, performance_glitch_user).
- Example checkout data (name, postal codes).

## Expected RTL Risks
1. Login error messages may overlap in Arabic/Hebrew.  
2. Cart badge misaligned for 2-digit counts in RTL.  
3. Breadcrumb/arrow directions reversed.  
4. Sorting dropdown text clipped in RTL.  
5. Mixed English terms with Hebrew/Arabic cause layout shift.  
6. Form validation messages not aligned properly in RTL.
