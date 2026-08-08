import { defineConfig, devices } from '@playwright/test';

/*
 * 注意: devcontainer のベースイメージが Debian 11 (bullseye) のため、
 * Playwright は 1.58 系が上限。1.60 以降は bullseye のサポートが打ち切られている。
 * Playwright を上げる場合は .devcontainer/Dockerfile を bookworm 以降に上げること。
 */
export default defineConfig({
  testDir: './tests',
  // 性能計測なので並列実行しない。ワーカーが競合するとメインスレッドの計測値が汚れる。
  workers: 1,
  fullyParallel: false,
  forbidOnly: !!process.env.CI,
  retries: 0,
  reporter: process.env.CI ? [['list'], ['html', { open: 'never' }]] : [['list']],

  use: {
    baseURL: 'http://127.0.0.1:5173',
    trace: 'retain-on-failure',
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],

  webServer: {
    command: 'yarn dev --port 5173 --strictPort',
    url: 'http://127.0.0.1:5173/bench.html',
    reuseExistingServer: !process.env.CI,
    timeout: 120_000,
  },
});
