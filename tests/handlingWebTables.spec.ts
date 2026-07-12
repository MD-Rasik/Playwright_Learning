import {test,expect} from '@playwright/test';

test('Find Highest Priced Book from Static WebTable', async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com');
   // const rows = page.locator("//table[@name='BookTable']//tr[position() > 1]"); // xpath way
    const rows = page.locator("table[name='BookTable'] tr:nth-child(n+2)"); // css way
    const rowCount = await rows.count();
    let highestPrice = 0;
    let highestPriceBookName = '';

    for(let i=0; i<rowCount; i++){
        const cells = rows.nth(i).locator('td');
        const bookName = await cells.nth(0).textContent();
        const bookPrice = Number(await cells.nth(3).textContent());
        if(bookPrice > highestPrice){
            highestPrice = bookPrice;
            highestPriceBookName = bookName!;
        }
    }
    console.log(`Highest Price Book is ${highestPriceBookName} with price ${highestPrice}`);
    expect(highestPriceBookName).toBe('Master In Selenium');
    expect(highestPrice).toBe(3000);
    
});

test('Find the input values from Dynamic WebTable and compare with output values', async({page})=>{
    let CPUValue:string | null = null;;
    let outputValue:string | null = null;
    await page.goto('https://testautomationpractice.blogspot.com');
    const rows=page.locator("#taskTable tbody tr");
    const rowCount = await rows.count();
    for(let i=0;i< rowCount;i++){
       const cells= rows.nth(i).locator('td');
       const chromeValue=await cells.nth(0).textContent();
       if(chromeValue === 'Chrome'){
            CPUValue = await rows.nth(i).locator('td').filter({ hasText: /%/}).textContent();
            outputValue = await page.locator('.chrome-cpu').first().textContent();
            if(outputValue === CPUValue){
                console.log(`CPU Value: ${CPUValue}`);
                console.log(`Output Value: ${outputValue}`);
                console.log('CPU Value matches with Output Value');
            }else{
                console.log('CPU Value not matches with Output Value');
            }
            break;
       }
    }
    expect(CPUValue).toBe(outputValue);
});

test('Find the multiple data values of Dynamic table by combined Locator', async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com');
    const rows=page.locator("#taskTable tbody tr");
    await page.locator("#taskTable").scrollIntoViewIfNeeded();
    const locator1 =rows.filter({ hasText: 'Chrome'}).locator('td').filter({ hasText: '%'});
    const locator2 =rows.last().locator('td').nth(1);
    const locator3 =rows.first().locator('td').nth(4);
    const combinedLocator = locator1.or(locator2).or(locator3);
    const values = await combinedLocator.allTextContents();
    console.log('Combined Locator Values:', values);
    await page.waitForTimeout(9000);
})