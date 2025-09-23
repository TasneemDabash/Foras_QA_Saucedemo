Sauce Demo (v1) – Mini Test Plan
Scope
End-to-end testing of https://www.saucedemo.com/v1/: authentication, product inventory list (sorting, item details), cart, checkout (step one & two), and logout. Light checks for performance and accessibility. Explicit RTL/i18n risk review (Arabic/Hebrew).
In Scope
Login: valid, invalid, locked account
Inventory list: sorting (A→Z, Z→A, Price low→high, high→low)
Item details
Cart: add/remove items, badges, persistence across pages
Checkout: validation & successful order flow
Logout & session handling
Basic perf/a11y/RTL notes
Out of Scope
Real payments or integrations
Deep load/stress testing
Back-office/analytics
Assumptions
Public demo credentials are available:
standard_user / secret_sauce
locked_out_user / secret_sauce
problem_user / secret_sauce
performance_glitch_user / secret_sauce
Risks
Incorrect error handling on auth
Sorting logic/regression across options
Form validation messages not visible or misaligned
Cart state loss on navigation/refresh
Visual regressions under RTL
Test Data
User accounts above
Checkout:
First Name: "Noor"
Last Name: "Amin"
Postal Code: "91000"
Environments
Web: Chrome (Win/Mac), Firefox (Win), Safari (iOS)
Entry Criteria
Site reachable
Browsers installed
Test data & accounts available
Exit Criteria
10–15 core test cases executed
3–5 bugs logged with repro, evidence, severity
All high-severity bugs retested & verified or triaged
Deliverables
/qa/test_cases.csv
/qa/bugs/*.md with screenshots
/qa/device_matrix.md
/qa/quality_notes.md
/automation/ (Cypress or Playwright) + README
Expected RTL Risks (Arabic/Hebrew)
Concrete places that often break when direction is RTL (dir="rtl"):
Login Error Banner – may overlap inputs when text is right-aligned; check #login_button_container error container for overflow.
Inventory Sorting Dropdown – chevron/menu alignment may not mirror; ensure caret points the correct direction and label aligns right.
Breadcrumb/Back Button on Item Detail – arrow direction must mirror; verify hit-area is on the right in RTL.
Cart Badge – badge might clip when numbers are 2+ digits; ensure it doesn’t overflow right edge.
Checkout Form Labels & Errors – error messages should appear under/near the field, not on the left side; check wrapping & word-break for mixed Hebrew/English.
Mixed-script Names/Prices – product names in Hebrew + USD price can get truncated; verify no clipping when long words are used.
Testing Approach
Manual E2E by feature area
Data-driven auth attempts
Exploratory around sorting/filter/error states
Light perf/a11y inspection (DevTools + keyboard nav)
Smoke automation with Cypress/Playwright
Severity Model
Critical: blocks checkout or login for standard_user
High: corrupts cart or miscalculates totals/sorting
Medium: layout/RTL misalignment affecting readability
Low: spelling/minor visual inconsistencies
EOF
cat > qa/test_cases.csv <<'EOF'
ID,Title,Preconditions,Steps,Expected,Actual,Status,Notes
TC01,Login with valid credentials,On login page,"1. Enter standard_user 2. Enter secret_sauce 3. Click Login",Redirect to /inventory.html with product grid visible,,Not Run,
TC02,Login with invalid credentials,On login page,"1. Enter bad_user 2. Enter bad_pass 3. Click Login","Error message shown: 'Username and password do not match'",,Not Run,"When RTL, verify error alignment"
TC03,Login locked_out_user shows block message,On login page,"1. Enter locked_out_user 2. secret_sauce 3. Login","Error message indicates user is locked out",,Not Run,Assert text content & role=alert
TC04,Inventory sorting A→Z,Logged in as standard_user on /inventory.html,"Open sort dropdown, select Name (A to Z)","Items ordered ascending by name",,Not Run,Capture first/last titles
TC05,Inventory sorting Z→A,Logged in,"Select Name (Z to A)","Items ordered descending by name",,Not Run,
TC06,Inventory sorting by price low→high,Logged in,"Select Price (low to high)","Items ordered by ascending price",,Not Run,Numeric comparison not string
TC07,Add one item to cart updates badge,Logged in,"Click 'ADD TO CART' on first item","Cart badge shows '1'; item button changes to 'REMOVE'",,Not Run,Open cart to verify item present
TC08,Remove from cart decrements badge,Item already added,"Click 'REMOVE'","Cart badge decrements or disappears (0)",,Not Run,
TC09,Cart persists when navigating to details and back,Item in cart,"Open item detail; click back to inventory","Cart badge unchanged; cart contains item",,Not Run,
TC10,Checkout form validation requires first name,At cart with item,"Click Checkout; leave First Name empty; Continue","Error message indicating First Name is required",,Not Run,RTL placement risk
TC11,Successful checkout end-to-end,At cart with 1+ items,"Checkout → Fill First/Last/Postal → Continue → Finish","Thank You / complete order page, order confirmation shown",,Not Run,URL ends with /checkout-complete.html
TC12,Logout ends session,Logged in,"Open menu → Logout","Return to login page; revisit /inventory redirects to login or denies",,Not Run,Check localStorage/session
TC13,Problem user image mismatch,Login as problem_user,"Open inventory and item detail","Visual/image anomalies expected (document as bug if severe)",,Not Run,Known demo quirk
TC14,Performance user slow load,Login as performance_glitch_user,"Navigate inventory and menu","Slower first paint; note perf warnings",,Not Run,Record Load/DOMContent timings
TC15,RTL smoke (manual),"Browser dir forced RTL or extension","Switch to RTL; repeat TC02/TC10 UIs","No clipping/overlap; arrows mirrored; right alignment ok",,Not Run,Document screenshots
EOF
cat > qa/device_matrix.md <<'EOF'
Browser/Device Matrix
Platform	Device	Browser	Version	Result	Notes
Windows 10	Desktop 1920	Chrome	124	Tested	Main run
Windows 10	Desktop 1920	Firefox	126	Tested	Sorting issue candidate
macOS 14.5	MacBook Pro	Chrome	124	Tested	a11y checks
iOS 17	iPhone 14	Safari	Mobile	Tested	Badge clipping (RTL)
Android 14	Pixel 7	Chrome	Mobile	Optional	Spot-check perf
EOF		