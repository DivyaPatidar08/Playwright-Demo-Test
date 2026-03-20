
import { test, expect } from "playwright/test";

test ('My First Manual Code Script', async({page})=>{

    await page.goto('https://playwright.dev/');
    //await page.getByRole('button', { name: 'I\'m Feeling Lucky' }).click();
    await page.getByRole('button', { name: 'Search (Ctrl+K)' }).click();
    await page.getByRole('searchbox', { name: 'Search' }).fill('configuration');
    await page.getByRole('searchbox', { name: 'Search' }).press('Enter');
    await expect(page).toHaveTitle(/Configuration | Playwright/);

});

test ('Successful Login', async({page})=>{
    

});