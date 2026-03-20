import { describe } from "node:test";
import { test, expect } from "playwright/test";

test.beforeEach(async ({ page }) => {
    await page.goto('https://www.amazon.in/');
    await expect(page).toHaveTitle('Online Shopping site in India: Shop Online for Mobiles, Books, Watches, Shoes and More - Amazon.in');
});

test('Search products', async ({ page }) => {
    await page.getByPlaceholder('Search Amazon.in').click();
    await page.getByPlaceholder("Search Amazon.in").fill("cup");
    await page.locator('//input[@id="nav-search-submit-button"]').click();
    const SerchedElement = page.locator('//h2[@class="a-size-medium-plus a-spacing-none a-color-base a-text-bold"]').first();
    await expect(SerchedElement).toBeVisible();

});



test('Navigate to PDP from PLP', async ({ page }) => {

    await page.goto("https://www.amazon.in/s/ref=mega_elec_s23_1_2_1_4?rh=i%3Aelectronics%2Cn%3A4363159031&ie=UTF8&bbn=976419031");
    //By Lable
    // await page.getByLabel("Samsung Galaxy M07 Mobile (Black, 4GB RAM, 64GB Storage) | MediaTek Helio G99 | AnTuTu 624K | IP54| 50MP Camera | 7.6mm Slim | 5000mAh Battery | 25W Fast Charging | 6 Gen OS Upgrades | Without Charger").first().click();

    //By partial Text
    await page.locator('//span[@class="a-declarative"]')
        .filter({ hasText: 'Samsung Galaxy M07 Mobile (Black, 4GB RAM, 64GB Storage) ' })
        .locator('//a[@class="a-link-normal s-line-clamp-4 s-link-style a-text-normal"]')
        .click();

    await expect(page.locator('//span[@class="a-size-large product-title-word-break"]')).toBeVisible();
    const ProductTitle = page.locator('//span[@id="productTitle"]').first().textContent();
    console.log(ProductTitle);

});


test('Add Product to cart', async ({ page }) => {

    await page.goto("https://www.amazon.in/Samsung-Moonlight-Storage-Upgrades-Lag-free/dp/B0FN7TJYDK/ref=lp_4363159031_1_10?pf_rd_p=9e034799-55e2-4ab2-b0d0-eb42f95b2d05&pf_rd_r=78XE1H0Z4TP38Q3F0SCA&sbo=RZvfv%2F%2FHxDF%2BO5021pAnSA%3D%3D&th=1");
    let ProductPrice = await page.locator('//div[@id="corePriceDisplay_desktop_feature_div"]//span[@class="a-price-whole"]').textContent();
    console.log(ProductPrice);

    await page.getByRole('button', {name : "Add to Cart"}).click();
    await page.locator('//a[@id="nav-cart"]').click();

    await expect(page.locator('#sc-active-items-header')).toHaveText("Shopping Cart");
    const cartPageHEading = page.locator('id=sc-active-items-header').textContent();
    //page.getByTestId("sc-active-items-header").textContent();
    //page.locator('#sc-active-items-header').textContent();
    console.log(cartPageHEading);

});