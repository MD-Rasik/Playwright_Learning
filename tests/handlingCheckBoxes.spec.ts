import {test,expect} from '@playwright/test';

test('Verify Basic CheckBox is Checked',async({page})=>{
    await page.goto('https://www.leafground.com/select.xhtml');
    await page.locator('//*[@id="menuform"]/ul[1]/li[3]/a[1]').click();
    await page.locator('//*[@id="menuform"]/ul[1]/li[3]//li[4]/a[1]').click();
    const checkBox = page.locator("(//*[@class='card' ]//*[@class='ui-chkbox-box ui-widget ui-corner-all ui-state-default'])[1]");
    await checkBox.click();
    expect(page.locator("(//*[@class='card' ]//input[@type='checkbox'])[1]")).toBeChecked();
});

test('Verify if CheckBox is Disabled',async({page})=>{
    await page.goto('https://www.leafground.com/select.xhtml');
    await page.locator('//*[@id="menuform"]/ul[1]/li[3]/a[1]').click();
    await page.locator('//*[@id="menuform"]/ul[1]/li[3]//li[4]/a[1]').click();
    await expect(page.locator("(//*[@class='card' ]//input[@type='checkbox'])[9]")).toBeDisabled();
});

test('Verify toggle switch is enabled',async({page})=>{
    await page.goto('https://www.leafground.com/select.xhtml');
    await page.locator('//*[@id="menuform"]/ul[1]/li[3]/a[1]').click();
    await page.locator('//*[@id="menuform"]/ul[1]/li[3]//li[4]/a[1]').click();
    await page.locator("//*[@class='card' ]//*[@class='ui-toggleswitch ui-widget']").click();
    await expect(page.locator("(//*[@class='card' ]//input[@type='checkbox'])[8]")).toBeEnabled();
});

test('Select Multiple CheckBoxes',async({page})=>{
    await page.goto('https://www.leafground.com/select.xhtml');
    await page.locator('//*[@id="menuform"]/ul[1]/li[3]/a[1]').click();
    await page.locator('//*[@id="menuform"]/ul[1]/li[3]//li[4]/a[1]').click();
    await page.locator("//*[contains(@class, 'ui-selectcheckboxmenu-trigger')]").click();
    const valuesToSelect = ['London', 'Paris', 'Rome'];
    for (const value of valuesToSelect) {
        await page
        // locator(`//*[@data-item-value='${value}']`)
        // .locator('.ui-chkbox.ui-widget')
        .locator(`[data-item-value='${value}'] .ui-chkbox.ui-widget`)
        .click();
    }
});

test('Verify the alert is notified when CheckBox is clicked',async({page})=>{
    await page.goto('https://www.leafground.com/select.xhtml');
    await page.locator('//*[@id="menuform"]/ul[1]/li[3]/a[1]').click(); 
    await page.locator('//*[@id="menuform"]/ul[1]/li[3]//li[4]/a[1]').click();
    page.on('dialog', async dialog => {
        expect(dialog.message()).toContain('Checked');
        await dialog.accept();
    });
    await page
          .locator('.card .ui-chkbox-box.ui-widget.ui-corner-all.ui-state-default')
          .nth(1)
          .click();
})