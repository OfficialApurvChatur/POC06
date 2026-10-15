import { test, expect } from "@playwright/test";


const BACKEND_URL = process.env.BACKEND_URL || "https://playwright.dev/";

test("has title", async ({ page }) => {
  await page.goto(BACKEND_URL);
  await expect(page).toHaveTitle(/Playwright/);
});
