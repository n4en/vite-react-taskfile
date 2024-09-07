import { test, expect } from "@playwright/test";

test.describe("App E2E Tests", () => {
  test("should load the app and display correct initial state", async ({
    page,
  }) => {
    await page.goto("/"); // Base URL is set in the Playwright config
    const heading = await page.locator("h1");
    await expect(heading).toHaveText("Vite + React");
  });

  test("should increment count when button is clicked", async ({ page }) => {
    await page.goto("/");
    const button = page.locator("button");
    await expect(button).toHaveText("count is 0");
    await button.click();
    await expect(button).toHaveText("count is 1");
  });

  test("should have Vite and React logos linking to correct pages", async ({
    page,
  }) => {
    await page.goto("/");
    const viteLink = page.locator('a[href="https://vitejs.dev"]');
    const reactLink = page.locator('a[href="https://react.dev"]');
    await expect(viteLink).toBeVisible();
    await expect(reactLink).toBeVisible();
  });
});
