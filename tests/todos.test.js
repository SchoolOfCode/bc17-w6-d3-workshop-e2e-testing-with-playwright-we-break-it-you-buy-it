import { test, expect } from "@playwright/test";

test("practice test should pass", async ({ page }) => {
  await page.goto(`http://localhost:3000`);
  // get the text box
  await page.getByRole("textbox", { name: "New Todo" }).click();
  await page
    .getByRole("textbox", { name: "New Todo" })
    .fill("Wash the other car");
  // assertion that the input's value is the todo text that you added
  await expect(page.getByRole("textbox", { name: "New Todo" })).toHaveValue(
    "Wash the other car"
  );
});

test("End to end user flow test", async ({ page }) => {
  await page.goto(`http://localhost:3000`);
  //   See the todo list app heading
  await expect(
    page.getByRole("heading", { name: "Todo List App" })
  ).toBeVisible();
});
