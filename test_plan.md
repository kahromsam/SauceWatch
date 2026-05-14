# Test Plan — Bug Report

All bugs below were discovered by running the automated test suite against saucedemo.com.
Priority labels: **Critical** · **High** · **Medium** · **Low**

| # | Bug | Affected user(s) | Detected by | Priority |
|---|---|---|---|---|
| 1 | Product prices change to random values after navigating to the cart and back | `visual_user` | `visual-integrity.spec.ts` — price stability | **Critical** |
| 2 | Login is blocked with "locked out" error; no session is created | `locked_out_user` | `login.spec.ts` — locked out user | **High** |
| 3 | All 6 product images display the same asset (backpack image repeated) | `problem_user` | `product-integrity.spec.ts` — image uniqueness | **High** |
| 4 | Login response time exceeds 5 s action timeout; request eventually times out | `performance_glitch_user` | `playwright.config.ts` `actionTimeout: 5000` | **High** |
| 5 | Product titles contain method-call syntax (`Test.allTheThings()`) — code artifact in product data | all users | `product-integrity.spec.ts` — title code artefacts | **Medium** |
| 6 | Product descriptions contain method-call syntax (`carry.allTheThings()`) — code artifact in product data | all users | `product-integrity.spec.ts` — description code artefacts | **Medium** |
| 7 | Product title text is right-aligned (`text-align: right` via class `align_right`) for "Sauce Labs Bolt T-Shirt" and "Sauce Labs Fleece Jacket" | `visual_user` | `product-integrity.spec.ts` — title alignment | **Medium** |
| 9 | Add-to-cart button for "Sauce Labs Bolt T-Shirt" (card 3) does not increment the cart badge — item is not added | `problem_user` | `product-integrity.spec.ts` — button functionality | **High** |
| 10 | Add-to-cart button for "Test.allTheThings() T-Shirt (Red)" (card 6) renders outside its product card boundaries | `visual_user` | `product-integrity.spec.ts` — button overflow | **Medium** |
| 11 | Cart icon is positioned outside the page header (`.primary_header`) — element exists but is displaced from its intended container | `visual_user` | `visual-integrity.spec.ts` — cart icon in header | **High** |
| 12 | Burger menu icon (`img.bm-icon`) is rotated ~3° via CSS `transform` (`sin ≈ 0.0523`) — visually tilted relative to expected upright orientation | `visual_user` | `visual-integrity.spec.ts` — burger icon rotation | **Medium** |
| 8 | Page title ("Products", "Checkout: Overview") rendered as `<span>` with no heading role — fails accessibility standards | all users | Discovered during locator implementation | **Low** |

---

## Notes

- Bugs 5 and 6 affect all users including `standard_user`, suggesting the data issue originates in the shared product catalogue rather than a per-user rendering layer.
- Bug 4 (`performance_glitch_user`) is surfaced by the intentionally low `actionTimeout: 5000` in `playwright.config.ts`. On a relaxed timeout the test would pass slowly, masking the performance regression.
- Creating GitHub Issues from this table is out of scope for the automated suite.
