import {test,expect} from '@playwright/test';

test('Assert Simple Alert dialog', async ({page})=>{
    await page.goto('https://www.leafground.com/');
    await page.locator('//*[@id="menuform"]/ul[1]/li[2]/a[1]').click();
    await page.locator('//*[@id="menuform"]/ul/li[2]/ul/li[1]/a').click();
    page.on('dialog',async dialog=>{
        dialog.accept();
        console.log("Alert Text: "+dialog.message());
    })
    await page.locator('(//div[@class="card"]/button[1])[1]').click();
    const alertText = await page.locator("//div[@class='card']/span[@id='simple_result']").textContent();
    expect(alertText).toBe('You have successfully clicked an alert');

})

test('Assert Confirm Alert dialog', async ({page})=>{
    await page.goto('https://www.leafground.com/');
    await page.locator('//*[@id="menuform"]/ul[1]/li[2]/a[1]').click();
    await page.locator('//*[@id="menuform"]/ul/li[2]/ul/li[1]/a').click();
    page.on('dialog',async dialog=>{
        dialog.accept();
        console.log("Alert Text: "+dialog.message());
    })
    await page.locator('(//div[@class="card"]/button[1])[2]').click();
    const alertText = await page.locator("//div[@class='card']/span[@id='result']").textContent();
    expect(alertText).toBe('User Clicked : OK');

})

test('Assert Sweet Alert dialog', async ({page})=>{
    await page.goto('https://www.leafground.com/');
    await page.locator('//*[@id="menuform"]/ul[1]/li[2]/a[1]').click();
    await page.locator('//*[@id="menuform"]/ul/li[2]/ul/li[1]/a').click();
    page.on('dialog',async dialog=>{
        dialog.accept();
        console.log("Alert Text: "+dialog.message());
    })
    await page.locator('(//div[@class="card"]/button[1])[3]').click();

})

test('Assert Sweet Modal Alert dialog', async ({page})=>{
    await page.goto('https://www.leafground.com/');
    await page.locator('//*[@id="menuform"]/ul[1]/li[2]/a[1]').click();
    await page.locator('//*[@id="menuform"]/ul/li[2]/ul/li[1]/a').click();
    page.on('dialog',async dialog=>{
        dialog.accept();
        console.log("Alert Text: "+dialog.message());
    })
    await page.locator('(//div[@class="card"]/button[1])[4]').click();

})

test('Assert Prompt Alert dialog', async ({page})=>{
    await page.goto('https://www.leafground.com/');
    await page.locator('//*[@id="menuform"]/ul[1]/li[2]/a[1]').click();
    await page.locator('//*[@id="menuform"]/ul/li[2]/ul/li[1]/a').click();
    page.on('dialog',async dialog=>{
        dialog.accept("Mohammed Rasik");
        console.log("Alert Text: "+dialog.message());
    })
    await page.locator('(//div[@class="card"]/button[1])[5]').click();
    const alertText = await page.locator("//div[@class='card']/span[@id='confirm_result']").textContent();
    expect(alertText).toBe('User entered name as: Mohammed Rasik');

})