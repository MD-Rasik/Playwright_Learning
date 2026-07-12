import {test, expect} from '@playwright/test';

test('handling drop down', async ({page}) => {
    await page.goto('https://www.leafground.com/select.xhtml');
    const uiAutomationToolDropdown = page.locator('.ui-selectonemenu').nth(0);
    await uiAutomationToolDropdown.click();
    await uiAutomationToolDropdown.selectOption({label: 'Puppeteer'});
    expect(uiAutomationToolDropdown).toHaveValue('Puppeteer');

    const countryDropdown = page.locator('.ui-selectonemenu').nth(1);
    await countryDropdown.click();
    await page.locator('.ui-selectonemenu-item').filter({hasText: 'India'}).click();
    expect(countryDropdown.locator('.ui-selectonemenu-label')).toHaveText('India');

    const languageDropdown = page.locator('.ui-selectonemenu').nth(3);
    await languageDropdown.click();
    await page.locator('.ui-selectonemenu-item').filter({hasText: 'Tamil'}).click();
    expect(languageDropdown.locator('.ui-selectonemenu-label')).toHaveText('Tamil');
})
