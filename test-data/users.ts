// All saucedemo.com users share the same password.
// Credentials are public and documented on the login page.
const SHARED_PASSWORD = 'secret_sauce';

export const users = {
  standard_user: {
    username: 'standard_user',
    password: SHARED_PASSWORD,
  },
  locked_out_user: {
    username: 'locked_out_user',
    password: SHARED_PASSWORD,
  },
  problem_user: {
    username: 'problem_user',
    password: SHARED_PASSWORD,
  },
  visual_user: {
    username: 'visual_user',
    password: SHARED_PASSWORD,
  },
  performance_glitch_user: {
    username: 'performance_glitch_user',
    password: SHARED_PASSWORD,
  },
} as const;

export type UserKey = keyof typeof users;

/**
 * Returns the user selected by the TEST_USER env var, falling back to standard_user.
 * Usage: TEST_USER=problem_user npx playwright test
 */
export function getActiveUser() {
  const key = (process.env.TEST_USER ?? 'standard_user') as UserKey;
  if (!(key in users)) {
    throw new Error(
      `Unknown TEST_USER="${key}". Valid values: ${Object.keys(users).join(', ')}`
    );
  }
  return users[key];
}
