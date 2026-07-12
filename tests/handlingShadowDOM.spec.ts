import { test, expect } from '@playwright/test';

test('Handle elements inside Shadow DOM', async ({ page }) => {
    // 1. Navigate to the page
    await page.goto('https://testautomationpractice.blogspot.com/');

    // 2. Playwright automatically pierces the shadow root! 
    // You don't need to locate '#shadow_host' first. Just target the inner elements directly.
    await page.locator('#shadow_host input[type="text"]').fill('Mohammed Rasik');
    
    // 3. Handling the checkbox inside the shadow DOM
    await page.locator('#shadow_host input[type="checkbox"]').check();

    // 4. Handling file upload inside the shadow DOM
    // Playwright has a dedicated method for uploading files cleanly
    await page.locator('#shadow_host input[type="file"]').setInputFiles('C:\\Users\\admin\\Downloads\\sample.txt');
    expect(await page.locator('#shadow_host input[type="file"]').inputValue()).toContain('sample.txt');
    expect(await page.locator('#shadow_host input[type="text"]').inputValue()).toBe('Mohammed Rasik');
});