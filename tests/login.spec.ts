import {test,expect} from '@playwright/test';
import { LoginPage } from "../pages/loginPage"; 
import {getJSONTestData} from '../utils/jsonReader';
import {getCSVTestData} from '../utils/csvReader';


//const testData = getJSONTestData('multipleTestData.json');
const testDataCSV = getCSVTestData('testData.csv');
for(const data of testDataCSV){
    test(`Verify user lands on Inventory page - Logged in with ${data.username}`, async ({page})=>{
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login(data.username,data.password);
    await expect(page).toHaveURL(/inventory\.html/);
})
}


const testDataJSON = getJSONTestData('testData.json');
test('Verify user lands on Inventory page - Logged in with testData.json', async ({page})=>{
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login(testDataJSON.username,testDataJSON.password);
    await expect(page).toHaveURL(/inventory\.html/);
});
