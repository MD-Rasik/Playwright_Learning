import {test as baseTest} from '@playwright/test';
import { Page, chromium, BrowserContext} from '@playwright/test';
import { LoginPage } from "./pages/loginPage";


type MyFixtures = {

    loginLogoutFixture: Page;
    persistentPage: Page;
};

export const test = baseTest.extend<MyFixtures>({
    loginLogoutFixture: async({page}, use) => {
        const loginPage = new LoginPage(page);
        await loginPage.goto();
        await loginPage.login('standard_user','secret_sauce');

        await use(page);
    
    },

    persistentPage: async({}, use) => {
        const context: BrowserContext = 
            await chromium.launchPersistentContext(
                './user-data',
                {
                    headless: false,
                    viewport: null
                }

            )
        const page = context.pages()[0] || await context.newPage();
        await use(page);
        await context.close();
    }

});

export {expect} from '@playwright/test';