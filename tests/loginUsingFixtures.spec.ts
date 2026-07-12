import {test} from "../baseTest";
import {expect} from '@playwright/test';

test('Verify user lands on Inventory page - Logged in using fixtures',
     async ({loginLogoutFixture})=>{
    await expect(loginLogoutFixture).toHaveURL(/inventory\.html/);
});    


test('Verify Add to Cart button is visible',
    async ({ loginLogoutFixture }) => {

    await expect(
        loginLogoutFixture.locator('#add-to-cart-sauce-labs-backpack')
    ).toBeVisible();
});

test('Verify Shopping Cart icon is visible',
    async ({ loginLogoutFixture }) => {

    await expect(
        loginLogoutFixture.locator('.shopping_cart_link')
    ).toBeVisible();
});

test('Verify Hamburger menu can be opened',
    async ({ loginLogoutFixture }) => {

    await loginLogoutFixture
        .locator('#react-burger-menu-btn')
        .click();

    await expect(
        loginLogoutFixture.locator('#logout_sidebar_link')
    ).toBeVisible();
});

test('Verify cart badge after adding item',
    async ({ loginLogoutFixture }) => {

    await loginLogoutFixture
        .locator('#add-to-cart-sauce-labs-backpack')
        .click();

    await expect(
        loginLogoutFixture.locator('.shopping_cart_badge')
    ).toHaveText('1');
});