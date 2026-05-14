# Test Design

## What was tested

| Area | Test file | User |
|---|---|---|
| Login — happy path and locked-out error | `login.spec.ts` | `standard_user`, `locked_out_user` |
| Full checkout — button states, form validation, order confirmation | `checkout.spec.ts` | `standard_user` |
| Cart — persistence across sorting and navigation, item removal | `cart.spec.ts` | `standard_user` |
| Product data — image uniqueness, text integrity, layout | `product-integrity.spec.ts` | `problem_user` |
| Visual stability — price consistency, navigation chrome | `visual-integrity.spec.ts` | `visual_user` |

## Why these areas

**Login** is the entry point for every user flow. A broken login blocks everything downstream, so it is the highest-value single test.

**Checkout** covers the revenue-critical path end to end. It also verifies interactive button state changes (Add → Remove → Add) and server-side form validation, which are common regression points.

**Cart** verifies that client-side state is not silently reset by unrelated actions (sorting, external navigation). Silent cart loss is a high-severity UX bug that is easy to miss without explicit cross-navigation assertions.

**Product integrity** targets `problem_user`, who is known to receive corrupted data from the backend — duplicate images and method-call strings leaking into product text. These assertions define what correct data looks like so regressions are caught automatically.

**Visual integrity** targets `visual_user`, who experiences price mutation on navigation. Collecting prices before and after each navigation and comparing them with deep equality makes the bug unambiguous and reproducible.

## How the suite is structured

- **Page Object Model** — all selectors and interactions live in `pages/`. Tests never touch raw locators.
- **Custom fixtures** (`fixtures/fixtures.ts`) — inject page object instances into every test. Login is performed in each test's `beforeEach` so the acting user is visible at a glance.
- **`TEST_USER` env var** — integrity tests read `process.env.TEST_USER` via `getActiveUser()`, making it possible to run the same test file against any user from the command line without touching code.
- **No fixed sleeps** — every wait is driven by Playwright's built-in retry-until mechanisms (`toBeVisible`, `toHaveText`, `toHaveURL`).
- **`actionTimeout: 5000`** — deliberately low. `performance_glitch_user` exceeds this on login, which surfaces the slow-response bug as a timeout failure rather than a slow-but-passing test.
- **Failing tests = bug reports** — tests for `problem_user` and `visual_user` are written against a healthy-site contract. A test failure is a structured, reproducible bug report, not a test error.
