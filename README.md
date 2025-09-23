# Foras – QA SauceDemo

THIS IS A QA submission REPO for **Foras Task 1** (Arabic/Hebrew context).  
It includes:
- Test Plan (`qa/test_plan.md`)  
- Test Cases (`qa/test_cases.csv`)  
- Bug Reports (`qa/bugs/*.md` + screenshots)  
- Device/Browser Matrix (`qa/device_matrix.md`)  
- Accessibility & Performance Notes (`qa/quality_notes.md`)  
- Automation with **Cypress** and **Playwright**

---

## Target
- **URL:** https://www.saucedemo.com/v1/
- **Demo users:**  
  - `standard_user` / `secret_sauce`  
  - `locked_out_user` / `secret_sauce`  
  - `problem_user` / `secret_sauce`  
  - `performance_glitch_user` / `secret_sauce`

---
## How to Run

## Cypress Section
```bash
cd automation
npm i
npm run open     
npm test        
npm run smoke   
```

---

## Playwright Section
```bash
cd automation-playwright
npm i
npx playwright install
npm test
```

---

## Repository Structure
```
Foras_QA_Saucedemo/
├── README.md
├── .gitignore
├── qa/
│   ├── test_plan.md
│   ├── test_cases.csv
│   ├── device_matrix.md
│   ├── quality_notes.md
│   └── bugs/
│       ├── bug01-rtl-login-error-overlap.md
│       ├── bug02-sorting-z-to-a-incorrect-order.md
│       ├── bug03-cart-badge-clips-2digits-rtl.md
│       ├── bug04-checkout-postal-validation-message-misaligned.md
│       └── screenshots/
├── automation/ (Cypress)
│   ├── package.json
│   ├── cypress.config.js
│   └── cypress/
│       ├── support/e2e.js
│       └── e2e/
│           ├── 01_login.cy.js
│           ├── 02_cart_checkout.cy.js
│           ├── 03_sorting.cy.js
│           └── 04_logout.cy.js
└── automation-playwright
    ├── package.json
    ├── playwright.config.ts
    └── tests/smoke.spec.ts
```

---

## Deliverables
- **Manual QA:** documented plan, test cases, bug reports, device matrix, accessibility & performance notes.  
- **Automation QA:** runnable smoke and regression tests with Cypress and Playwright.  
- **RTL/i18n Focus:** validation of R2L layouts for Arabic/Hebrew users.

---
