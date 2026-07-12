import {test, expect} from '@playwright/test';

test('drag and drop', async ({page}) => {
    await page.goto('https://www.leafground.com/drag.xhtml');
    const dragElement = page.locator('[id="form:drag_content"]');
    const dropElement = page.locator('[id="form:drop"]');
    const isDropped = page.locator('[id="form:drop_content"]')
    expect(isDropped).toHaveText('Drop here');

    await dragElement.dragTo(dropElement);
    expect(page.locator('[id="form:drop_content"]')).toHaveText('Dropped!');
});

test('drag and drop 2', async ({page}) => {
    await page.goto('https://www.leafground.com/drag.xhtml');
    const dragElement = page.locator('[id="form:drag_content"]');
    const dropElement = page.locator('[id="form:drop"]');
    const isDropped = page.locator('[id="form:drop_content"]')
    await dragElement.hover();
    await page.mouse.down();
    await dropElement.hover();
    await page.mouse.up();
    expect(isDropped).toHaveText('Dropped!');
});

