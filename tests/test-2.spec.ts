import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.google.com/?zx=1773303469425&no_sw_cr=1');
  await page.getByRole('combobox', { name: 'Search' }).click();
  await page.getByRole('combobox', { name: 'Search' }).fill('playwright');
  await page.goto('https://www.google.com/sorry/index?continue=https://www.google.com/search%3Fq%3Dplaywright%26sca_esv%3Dd26a96fc0b0910e2%26source%3Dhp%26ei%3DrXayaYDiNvXf2roPqI-q8QY%26iflsig%3DAFdpzrgAAAAAabKEvbzx51IAXX8jDn7_0upmgVdztUWh%26ved%3D0ahUKEwjA7Jub9pmTAxX1r1YBHaiHKm4Q4dUDCBY%26uact%3D5%26oq%3Dplaywright%26gs_lp%3DEgdnd3Mtd2l6IgpwbGF5d3JpZ2h0MgsQABiABBixAxiDATIIEAAYgAQYsQMyCBAAGIAEGLEDMgsQABiABBixAxiDATIFEAAYgAQyCxAAGIAEGLEDGIMBMggQABiABBixAzIIEAAYgAQYsQMyCxAAGIAEGLEDGIoFMgUQABiABEj9K1DZCVj1JXABeACQAQCYAYcBoAHZCKoBAzEuObgBA8gBAPgBAZgCC6AC-AioAgrCAgoQLhgDGOoCGI8BwgIKEAAYAxjqAhiPAcICDhAAGIAEGLEDGIMBGIoFwgIIEC4YgAQYsQPCAgsQABiABBiSAxiKBcICCBAAGIAEGMkDwgILEC4YgAQYsQMY5QSYAwbxBdeQjbOAxQDykgcDMi45oAf9OrIHAzEuObgH8QjCBwUwLjkuMsgHGYAIAA%26sclient%3Dgws-wiz%26sei%3Dtnayaff_OufX5OUPtq6TsAM&q=EhAkAuKAPgwChkgkteJDacQfGLjtyc0GIjB9YurobwcnP6s-pKp9TG3ZKTMb2Jix-QuPcdePSXB95neDr_aep3AAwqAKOiyIYOIyAVJaAUM');

  await page.locator('iframe[name="c-osbljdoqbucw"]').contentFrame().getByRole('button', { name: 'Verify' }).click();
  await page.getByRole('link', { name: 'Playwright: Fast and reliable' }).click();
});