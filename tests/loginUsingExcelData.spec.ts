import {expect,test} from '@playwright/test';
import {getExcelData} from '../utils/excelReader';
import * as path from 'path';

const excelFilePath = path.join(process.cwd(), 'testData.xlsx');
const sheetName = 'Sheet1';

test('Login tests using Excel data driven approach', async ({ page }) => {
    // Read the data INSIDE the async test block (safe from CommonJS errors)
    const testData = await getExcelData(excelFilePath, sheetName);

    for (const [Username, Password] of testData) {
        // Wrap your steps in test.step for clean reporting layout
        await test.step(`Testing with user: ${Username}`, async () => {
            await page.goto('https://www.saucedemo.com');
            await page.getByTestId('username').fill(Username);
            await page.getByTestId('password').fill(Password);
            await page.getByTestId('login-button').click();
            expect(page).toHaveTitle('Swag Labs')
            // Add your assertion here
        });
    }
});

