# Accessibility Findings

## WEB-003 — Select elements do not have associated label elements

- **Page:** Check Appointment Availability
- **WCAG Reference:** 3.3.2 Labels or Instructions
- **Evidence:** Lighthouse identified select elements without associated label elements.
- **Severity:** Medium
- **User Impact:** Screen-reader users may not know what information each dropdown is asking them to select.
- **Recommended Fix:** Associate each select element with a visible label using matching `for` and `id` attributes.
- **Evidence Screenshot:** evidence/lighthouse/screenshots/WEB-003-select-labels.png

## WEB-004 — Buttons do not have an accessible name

- **Page:** Check Appointment Availability
- **WCAG Reference:** 4.1.2 Name, Role, Value
- **Evidence:** Lighthouse identified buttons without accessible names.
- **Severity:** Medium
- **User Impact:** Screen-reader users may not know the purpose of these buttons.
- **Recommended Fix:** Provide a clear accessible name using visible text or an appropriate `aria-label`.

## WEB-005 — Image elements do not have alt attributes

- **Page:** Passport Seva homepage
- **WCAG Reference:** 1.1.1 Non-text Content
- **Evidence:** Lighthouse identified image elements without `alt` attributes.
- **Severity:** Medium
- **User Impact:** Screen-reader users may miss information conveyed by informative images.
- **Recommended Fix:** Add meaningful alternative text to informative images and use empty `alt=""` for decorative images.

## WEB-006 — ARIA attributes do not match their roles

- **Page:** Passport Seva homepage
- **WCAG Reference:** 4.1.2 Name, Role, Value
- **Evidence:** Lighthouse identified ARIA attributes that do not match the roles of their elements.
- **Severity:** Medium
- **User Impact:** Assistive technologies may interpret the interface incorrectly.
- **Recommended Fix:** Use ARIA attributes only with compatible roles and valid role-attribute combinations.

## WEB-007 — Lists do not contain only list elements and script supporting elements

- **Page:** Passport Seva homepage
- **WCAG Reference:** 1.3.1 Info and Relationships
- **Evidence:** Lighthouse identified incorrect list structure.
- **Severity:** Low
- **User Impact:** Screen-reader users may experience incorrect list structure or navigation.
- **Recommended Fix:** Ensure list containers contain appropriate list items and move non-list elements outside the list.