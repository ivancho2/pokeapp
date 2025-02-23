import { test, expect } from "@playwright/test";

test("authenticates user", async ({ page }) => {
  await page.goto("/");
  await expect(page).toHaveTitle("Pocke App");
  await page.fill('input[test-id="username-input"]', "User Test");
  await page.click('button[type="submit"]');
  expect(page.url()).toBe("http://localhost:5173/home");

  const user = await page.evaluate(() => {
    return sessionStorage.getItem("username");
  });
  expect(user).toBe("User Test");
});

test("does not authenticate user redirecting to login", async ({ page }) => {
  await page.goto("/other");
  await expect(page).toHaveTitle("Pocke App");
  expect(page.url()).toBe("http://localhost:5173/login");

  const user = await page.evaluate(() => {
    return sessionStorage.getItem("username");
  });
  expect(user).toBe(null);
});
