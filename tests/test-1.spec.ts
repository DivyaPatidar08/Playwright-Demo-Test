import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://workspace.google.com/gmail/');
  await page.getByTestId('Create an account').getByText('Create an account').click();
  await page.getByRole('menuitem', { name: 'Open the Gmail - For my personal use page in a new tab' }).click();
});