import {test as setup, expect} from '@playwright/test';
import {LoginPage} from '../../pages/loginPage';

const authFile='playwright/.auth/user.json';

setup('Login to the application', async ({page})=>{
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('standard_user', 'secret_sauce');
    expect(page).toHaveURL(/inventory\.html/);
    await page.context().storageState({
        path: authFile
    });
});


