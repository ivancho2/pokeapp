import { test, expect } from "@playwright/test";

test("home page", async ({ page }) => {
  await page.goto("/login");
  await page.evaluate(() => {
    sessionStorage.setItem("username", "User Test");
  });

  await page.goto("/home");
  await expect(page).toHaveTitle("Pocke App");
  await expect(page).toHaveURL("http://localhost:5173/home");

  const title = await page.textContent("h1");
  expect(title).toBe("Pokédex Home");

  await page.fill('input[placeholder="Buscar Pokémon..."]', "bulbasaur");
  await page.keyboard.press("Enter");
  await page.waitForSelector(".pokemon-card");

  const pokemon = await page.textContent(".pokemon-card");
  expect(pokemon).toBe("bulbasaur");
});

test("logout", async ({ page }) => {
  await page.goto("/login");
  await page.evaluate(() => {
    sessionStorage.setItem("username", "User Test");
  });

  await page.goto("/home");
  await page.click("text=User Test");
  await page.click("text=Cerrar sesión");
  await expect(page).toHaveTitle("Pocke App");
  await expect(page).toHaveURL("http://localhost:5173/login");

  const user = await page.evaluate(() => {
    return sessionStorage.getItem("username");
  });
  expect(user).toBe(null);

  const title = await page.textContent("h1");
  expect(title).toBe("Pokédex Login");
});
