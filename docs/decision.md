# Decision 001 - Use Node 16 During Recovery

## Context

The project was built with React 16 and Create React App.

## Decision

Use Node 16 instead of Node 22 during the recovery phase.

## Reason

The priority is to get the legacy application running before upgrading dependencies.

## Future Plan

Upgrade to a modern Node version after:
- Understanding the codebase
- Refactoring the application
- Modernizing dependencies

## Status

Accepted

# User Experience

## Intentional Discovery

The user already knows what they want.

The application should help them reach it quickly.

Examples:
- Search
- Genre
- Director
- Year
- Runtime

---

## Exploratory Discovery

The user does not know what they want.

The application should provide a starting point.

Examples:
- Banner
- Curated collections
- Recommendations
- Random discovery
