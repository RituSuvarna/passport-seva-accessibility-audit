# Project Architecture

## Overview

The project is organized as a small client-server application for documenting and reviewing accessibility findings from the Passport Seva website.

## Structure

- `client/` — frontend files
- `server/` — backend API
- `docs/` — project documentation
- `evidence/` — Lighthouse and keyboard-navigation evidence
- `tests/` — accessibility and keyboard test files
- `src/` — project-level supporting files

## Data Flow

Browser → Client → Server API → Accessibility Findings

The frontend requests audit findings from the backend API and displays them for review.