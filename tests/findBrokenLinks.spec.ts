import {test, expect, request} from '@playwright/test';
import {isLinkBroken} from '../utils/brokenLinkChecker';

test('Check for broken links on the page', async ({page}) => {

    await page.goto('https://testautomationpractice.blogspot.com/');
    await page.waitForLoadState();
    const links = await page.locator('a').all();
    const urlList: string[] = [];
    // const brokenLinksList: string[] = [];
    // const validLinksList: string[] = [];

    for (const link of links) {
        const href = await link.getAttribute('href');
        if (href && href.trim() !=='' && !href.startsWith('#')) {
           const absoluteURL=new URL(href, page.url()); // Validate URL format
            urlList.push(absoluteURL.href);
        }
    }

    const requestContext = await request.newContext();
    const results = await Promise.all(
        urlList.map( async (url)=> {
            const isBroken = await isLinkBroken(requestContext, url);
            return {url, isBroken};
        })
    )

    const brokenLinks = results.filter(result => result.isBroken).map(result => result.url);
    const validLinks = results.filter(result => !result.isBroken).map(result => result.url);
    console.log('\n============Results Summary============');
    console.log(`Total links found: ${urlList.length}`);
    console.log(`Broken links: ${brokenLinks.length}`);
    console.log(`Valid links: ${validLinks.length}`);

    console.log('\nBroken Links: ', brokenLinks);
    console.log('\nValid Links: ', validLinks);


})