import {test,expect} from '@playwright/test';

test('Click and Confirm new Window Opens', async ({page,context})=>{
    await page.goto('https://www.leafground.com/');
    await page.locator('//*[@id="menuform"]/ul[1]/li[2]/a[1]').click();
    await page.locator('//*[@id="menuform"]/ul/li[2]/ul/li[3]/a').click();
    await page.waitForLoadState();
    const primaryTab = page;
    const primaryTabTitle = await page.title();
    const [newTab]=await Promise.all([
        context.waitForEvent('page'),
        await page.locator('//*[@class="grid button-demo"]/div[1]/div[1]/button').click()   
    ])
    await newTab.waitForLoadState();
    expect(await newTab.title()).not.toBe(primaryTabTitle);
    console.log("Primary Tab Title: "+primaryTabTitle);
    console.log("New Tab Title: "+await newTab.title());
    console.log(page.viewportSize());
});

test('Find the number of opened tabs', async ({page,context})=>{
    await page.goto('https://www.leafground.com/');
    await page.locator('//*[@id="menuform"]/ul[1]/li[2]/a[1]').click();     
    await page.locator('//*[@id="menuform"]/ul/li[2]/ul/li[3]/a').click();
    await page.waitForLoadState();
    const [newTab] = await Promise.all([
        context.waitForEvent('page'),
        await page.locator('//*[@class="grid button-demo"]/div[1]/div[2]/button').click()   
    ])  
    await newTab.waitForLoadState();
    const allTabs = context.pages();
    console.log("Number of opened tabs: "+allTabs.length);
    
});

test('Close all tabs except Primary', async ({page,context})=>{
    await page.goto('https://www.leafground.com/');
    await page.locator('//*[@id="menuform"]/ul[1]/li[2]/a[1]').click();
    await page.locator('//*[@id="menuform"]/ul/li[2]/ul/li[3]/a').click();
    await page.waitForLoadState();
    const primaryTab = page;
    const [newTab] = await Promise.all([
        context.waitForEvent('page'),
        await page.locator('//*[@class="grid button-demo"]/div[2]/div[1]/button').click()
    ])
    const allTabs = context.pages();
    for(const tab of allTabs){
        if(tab!==primaryTab){
            await tab.close();
        }
    }
    expect(context.pages().length).toBe(1);
});

test('Wait for 2 new tabs to open',async ({page,context})=>{
    await page.goto('https://www.leafground.com/');
    await page.locator('//*[@id="menuform"]/ul[1]/li[2]/a[1]').click();
    await page.locator('//*[@id="menuform"]/ul/li[2]/ul/li[3]/a').click();  
    await page.waitForLoadState();
    const [newTab]=await Promise.all([
        context.waitForEvent('page'),
        await page.locator('//*[@class="grid button-demo"]/div[2]/div[2]/button').click()
    ])
    const allTabs = context.pages();
    expect(allTabs.length).toBe(3);
})