import { test, expect } from "@playwright/test";


const FRONTEND_URL = process.env.FRONTEND_URL || "https://playwright.dev/";

test("has title", async ({ page }) => {
  await page.goto(FRONTEND_URL);
  await expect(page).toHaveTitle(/Playwright/);
});
