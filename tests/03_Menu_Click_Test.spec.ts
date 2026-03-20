import { test, expect } from "playwright/test";

test ('Create Gmail Account Test', async({page})=>{

    await page.goto('https://workspace.google.com/gmail/');
    //await page.getByRole('button', { name: 'I\'m Feeling Lucky' }).click();
    await page.getByLabel('Create an account').click();

    await expect(page.getByRole('menuitem', {name : 'For my personal use'})).toBeVisible();

    await page.getByRole('menuitem', {name : 'For my personal use'}).click();

    await expect(page).toHaveTitle(/Create your Google Account/);

    await page.getByLabel('First name', {exact : true}).fill("DIVI");
    await page.getByLabel('Last name (optional)', {exact : true}).fill("P");
    await page.getByRole('button', { name: 'Next' }).click();

    await page.getByLabel('month').first().click();
    await page.getByRole('option', {name : 'January' }).click();
   

    await page.getByLabel('day').first().click();
    await page.getByLabel('day').fill('1');

    await page.getByLabel('year').first().click();
    await page.getByLabel('year').fill('2000');

    await page.getByLabel('gender').first().click();
    await page.getByRole('option', {name : 'Female' }).click();
    await page.getByRole('button', { name: 'Next' }).click();

   
    await page.getByLabel('Create your own Gmail address').click();
    await page.getByLabel('Create a Gmail address', {exact : true}).fill("testuserPlayWTS01");
    await page.getByRole('button', { name: 'Next' }).click();

    await page.locator('//input[@name="Passwd"]').fill("TrnPlyW@1603");
    await page.locator('//input[@name="PasswdAgain"]').fill("TrnPlyW@1603");
    await page.getByRole('button', { name: 'Next' }).click();


    //let pageTitle = page.title();
   await expect(page).toHaveTitle('Something went wrong Sorry, something went wrong there. Try again.');
   // console.log("Sign UP FAILED!");


});