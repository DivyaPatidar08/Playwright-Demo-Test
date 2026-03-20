
import { test, expect } from "playwright/test";

test('Test Locators', async ({ page }) => {

    await page.goto('https://playwright.dev/');
    // a) By Role
    // Example: await page.getByRole('link', {name: 'value'}).click()
    // await page.getByRole('link', {name:'Get started'}).click();
    // await expect(page).toHaveTitle(`Installation | Playwright`);


    // b) By Label
    // Example: await page.getByLabel('value', {exact : true}).fill('value');
    // await page.getByLabel('GitHub repository', {exact : true}).click();
    // await expect(page).toHaveURL('https://github.com/microsoft/playwright');
    //await expect(page).toHaveTitle(`GitHub - microsoft/playwright: Playwright is a framework for Web Testing and Automation. It allows testing Chromium, Firefox and WebKit with a single API. · GitHubt`);


    // c) By Alt Attribute - For images
    // Example: await page.getByAltText('alt attribute value').click();
    // await page.getByAltText('Bing').click();
    //await expect(page).toHaveTitle(`Search - Microsoft Bing`);


    // d) By Test Id - For Custom Attributes
    // Example: await page.getByTestId('value').fill('testers talk');
    // await page.getByTestId("Discord server").click();


    // e) By Text
    // Example: await page.getByText('any text').click(); //partial
    // Example: await page.getByText('any text', {exact :true}).click();
    // await page.getByText("Docs", {exact :true}).first().click();


    // f) By Placeholder / XPath/ CSS selector
    // Example: await page.getByPlaceholder('value').click();
    // await page.getByText("Search").click();
    // await page.getByPlaceholder("Search docs").fill("Locators");
    //await page.getByPlaceholder("Search docs").press('Enter');
    //await page.locator('//input[@id="docsearch-input"]').fill("Locators");
    //await page.locator('input[id="docsearch-input"]').fill("Locators");


    // f) By title 
    //await page.getByTitle("").click();

});