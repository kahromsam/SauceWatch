# AI Usage

I used Claude (claude.ai) for test planning and Claude Code (VS Code extension) for TypeScript implementation.

**What I did:**
- Manually explored saucedemo.com across all 6 user types and documented every bug and behavioral difference
- Defined the entire test scope — which users, features, and risks to cover and why
- Made all architectural decisions: Page Object Model, custom fixtures, TEST_USER pattern, intentional 5s actionTimeout to expose the performance bug
- Directed Claude Code step by step, caught incorrect implementations, and specified fixes
- Ran every test in Playwright UI mode and visually verified results against expected behavior
- Wrote the test plan based on my own observations

**What AI did:**
- Translated my decisions and specifications into TypeScript syntax
- Provided Playwright API knowledge during implementation
