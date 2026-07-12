import{test,expect} from '@playwright/test';

test('Verify user lands on Inventory page - Logged in using storage state', async ({page})=>{
    await page.goto('https://www.saucedemo.com/inventory.html');
    await expect(page.locator('.title')).toHaveText('Products');
});
test('Verify Add to Cart button', async ({ page }) => {

    await page.goto('https://www.saucedemo.com/inventory.html');

    await expect(
        page.locator('#add-to-cart-sauce-labs-backpack')
    ).toBeVisible();
});

test('Verify Cart Icon', async ({ page }) => {

    await page.goto('https://www.saucedemo.com/inventory.html');

    await expect(
        page.locator('.shopping_cart_link')
    ).toBeVisible();
});

test('Verify Hamburger Menu', async ({ page }) => {

    await page.goto('https://www.saucedemo.com/inventory.html');

    await page.locator('#react-burger-menu-btn').click();

    await expect(
        page.locator('#logout_sidebar_link')
    ).toBeVisible();
});