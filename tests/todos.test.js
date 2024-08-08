import {test, expect} from '@playwright/test';

test("practice test should pass", async ({page}) => {
    await page.goto("http://localhost:5432")
    // get the text box
    await page.getByRole('textbox', { name: 'New Todo' }).click()
    await page.getByRole('textbox', { name: 'New Todo' }).fill("Wash the other car")
})