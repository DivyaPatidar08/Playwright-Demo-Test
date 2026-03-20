import { text } from "node:stream/consumers";
import { test, expect } from "playwright/test";


test.beforeEach(async ({ page }) => {
  await page.goto('https://practicesoftwaretesting.com/');
  await expect(page).toHaveTitle('Practice Software Testing - Toolshop - v5.0'); 
});



test ('Check Page Navigation menu', async({page}) =>{

    await page.getByRole('button', {name : 'Categories' }).click();
    await expect(page.locator('//ul[@class ="dropdown-menu show"]')).toBeVisible();
     //await page.getByRole('button', {name : 'Close chat' }).click();
});


test ('Check Drop Down values', async({page}) =>{

 
   //await page.getByRole('button', {name : 'EN' }).click();]
   await page.locator('//button[@id="language"]').click();
   await expect(page.locator('//ul[@class="dropdown-menu dropdown-menu-right show"]')).toBeVisible();

  const availableListItem = page.locator('//ul[@class="dropdown-menu dropdown-menu-right show"]//a[@class="dropdown-item"]');
  const allOptionsText = await availableListItem.allInnerTexts();
  console.log('All available Countries:', allOptionsText);

  //const NumberOfItem = availableListItem.count();
  //console.log('Numer of item available in language dropdown', NumberOfItem);


});


test ('Navigate to page from Menu', async({page}) =>{

    await page.getByRole('button', {name : 'Categories' }).click();
    await expect(page.locator('//ul[@class ="dropdown-menu show"]')).toBeVisible();
   // await page.locator('//ul[@class ="dropdown-menu show"]//a[@class="dropdown-item"]');
   await page.locator('a:has-text("Power Tools")').click();

});


test ('Sort the Products on CLP', async({page}) => {

  await page.getByLabel('sort').click();
  await page.locator('//select[@aria-label ="sort"]').selectOption("price,asc");

});


test ('Select Product Category from CLP', async({page})=>{

  await page.getByLabel(' Hammer ', {exact : true}).check();
  await expect(page.getByLabel(' Hammer ')).toBeChecked();

});

test ('Get Filtered product list', async({page})=>{

  await page.getByLabel(' Hammer ', {exact : true}).check();
  await expect(page.getByLabel(' Hammer ')).toBeChecked();
  const productLocator = await page.$$('//a[@class="card"]//h5[@class="card-title"]');
  //await expect(productLocator).toHaveCount(7); 
 // const numberOfProducts = productLocator.count();
 // console.log('Number of product available : ', numberOfProducts);
 
for(const pL of productLocator){
  const text = await pL.textContent();
  console.log(`The Product Name : ${text}`);

}

});





test ('Filter by Brand', async({page}) =>{

await page.getByLabel(' ForgeFlex Tools', {exact : true}).check();
await expect(page.getByLabel(' ForgeFlex Tools')).toBeChecked();;


})
