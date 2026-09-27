# Accessibility Audit Report

## Executive Summary

An accessibility audit was performed on the public Passport Seva website using Lighthouse and keyboard-only navigation.

The audit identified five evidence-based accessibility findings.

## Audit Scope

- Public-facing Passport Seva pages
- Lighthouse accessibility audit
- Keyboard-only navigation review
- Selected journey: Check Appointment Availability → Bengaluru → PSK Mangaluru

## Findings Summary

| ID | Finding | Severity |
|---|---|---|
| WEB-003 | Select elements do not have associated label elements | Medium |
| WEB-004 | Buttons do not have an accessible name | Medium |
| WEB-005 | Image elements do not have alt attributes | Medium |
| WEB-006 | ARIA attributes do not match their roles | Medium |
| WEB-007 | Lists do not contain only list elements and script supporting elements | Low |

## Evidence

Lighthouse evidence screenshots are stored under:

`evidence/lighthouse/screenshots/`

Keyboard navigation documentation is stored under:

`evidence/keyboard/`

## Recommended Remediation

The recommended fixes focus on:

- Adding accessible labels to form controls
- Providing accessible names for buttons
- Adding appropriate alternative text to images
- Correcting invalid ARIA usage
- Maintaining correct semantic list structure

## Safety Boundary

The audit did not involve login, personal/passport information, payment, appointment booking, CAPTCHA submission, or bypassing security controls.