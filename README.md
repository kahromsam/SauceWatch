# SauceWatch

Playwright (TypeScript) end-to-end test suite for [saucedemo.com](https://www.saucedemo.com).

---

## Prerequisites

- **Node.js 18 or later** — [nodejs.org](https://nodejs.org)
- **npm** — included with Node.js
- No `.env` file is needed. All users are defined in [`test-data/users.ts`](test-data/users.ts).

---

## Setup

```bash
# 1. Clone the repository
git clone <repo-url>
cd SauceWatch

# 2. Install dependencies
npm install

# 3. Install Playwright browsers
npx playwright install
```

---

## Running tests

### Run the full suite
```bash
npx playwright test
```

### Run a specific test file
```bash
npx playwright test tests/01-login.spec.ts
npx playwright test tests/02-checkout.spec.ts
npx playwright test tests/03-cart.spec.ts
npx playwright test tests/04-product-integrity.spec.ts
npx playwright test tests/05-visual-integrity.spec.ts
```

### Run integrity tests as a specific user

The `TEST_USER` environment variable selects which user logs in for the integrity tests.
Valid values: `standard_user`, `locked_out_user`, `problem_user`, `visual_user`, `performance_glitch_user`.

**Windows (PowerShell):**
```powershell
$env:TEST_USER="problem_user"; npx playwright test tests/04-product-integrity.spec.ts
$env:TEST_USER="visual_user";  npx playwright test tests/05-visual-integrity.spec.ts
```

**macOS / Linux:**
```bash
TEST_USER=problem_user npx playwright test tests/04-product-integrity.spec.ts
TEST_USER=visual_user  npx playwright test tests/05-visual-integrity.spec.ts
```

### Open the interactive UI
```bash
npx playwright test --ui
```

### View the HTML report
```bash
npx playwright show-report
```

---

## Expected results

| Test file | User | Expected outcome |
|---|---|---|
| `01-login.spec.ts` | `standard_user` / `locked_out_user` | All pass |
| `02-checkout.spec.ts` | `standard_user` | All pass |
| `03-cart.spec.ts` | `standard_user` | All pass |
| `04-product-integrity.spec.ts` | `problem_user` | Fails — exposes image and data bugs |
| `05-visual-integrity.spec.ts` | `visual_user` | Fails — exposes price mutation, cart icon displacement, and burger icon rotation bugs |

Failing tests for buggy users are **intentional** — a failing test is a bug report.
