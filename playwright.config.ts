import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',

  // Each action (click, fill, etc.) must complete within 5 s.
  // This is intentional: performance_glitch_user triggers timeouts,
  // which is the expected signal that the slow-login bug exists.
  use: {
    baseURL: 'https://www.saucedemo.com',
    actionTimeout: 5000,
    trace: 'on',
  },

  reporter: [['html', { open: 'never' }]],
});
