import {test,expect} from '@playwright/test';

const targetMonth = 'June';
const targetYear= 2000;
const targetDate = '10';
const allMonths = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
test('Handle Calendars', async ({page}) => {
    //test.setTimeout(120000);
    await page.goto('https://seleniumpractise.blogspot.com/2016/08/how-to-handle-calendar-in-selenium.html');
    await page.locator('.hasDatepicker').click();
    while(true){
        const currentMonthYear = await page.locator('.ui-datepicker-title').textContent();
        const [currentMonth, currentYear] = currentMonthYear!.split(/\s+/);
        if(currentMonth === targetMonth && Number(currentYear) === targetYear){
            break;
        }else if(Number(currentYear) > targetYear){
            await page.locator('.ui-datepicker-prev').click();
        }else if(Number(currentYear) < targetYear){
            await page.locator('.ui-datepicker-next').click();
        }else{
            if(allMonths.indexOf(currentMonth) > allMonths.indexOf(targetMonth)){
                await page.locator('.ui-datepicker-prev').click();
            }else{
                await page.locator('.ui-datepicker-next').click();
            }
        }
    }
    await page.locator('.ui-datepicker-calendar').
    locator('a', {hasText:targetDate }).click();
    expect(page.locator('.hasDatepicker')).toHaveValue('06/10/2000');
    await page.pause();
});