import {test,expect} from '../baseTest';
import {getJSONTestData} from '../utils/jsonReader';

const testDataJSON = getJSONTestData('multipleTestData.json');

test('Verify the browser launched without Incognito mode',async({persistentPage})=>{

    await persistentPage.goto('https://www.saucedemo.com');
    await persistentPage.fill('#user-name',testDataJSON.username);
    await persistentPage.fill('#password',testDataJSON.password);
    expect(persistentPage).toHaveTitle('Swag Labs');

});
