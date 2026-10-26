import { test, expect } from '@playwright/test';
import * as XLSX from 'xlsx';

const workbook = XLSX.readFile(
    'C:\\Users\\konda\\AppData\\Roaming\\Microsoft\\Windows\\Network Shortcuts\\Playwright_Excel.xlsx'
);

// Select "sai" sheet
const sheet = workbook.Sheets['sai'];
//By index

//const sheet = workbook.Sheets[workbook.SheetNames[0]];

const testData = XLSX.utils.sheet_to_json(sheet);


for (const data of testData as any[]) {

    // excel sheet headings Username and Password
    test(`Login - ${data.Username} - ${data.Password}`, async ({ page }) => {

        await page.goto('https://www.saucedemo.com/');

        await page.getByPlaceholder('Username').fill(data.Username);

        await page.getByPlaceholder('Password').fill(data.Password);

        await page.getByRole('button', { name: 'Login' }).click();

        await expect(page).toHaveURL(/inventory/);
    });
}