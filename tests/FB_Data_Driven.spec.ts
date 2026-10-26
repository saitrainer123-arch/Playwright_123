import { test } from '@playwright/test';
import * as XLSX from 'xlsx';


// Read Excel file
const workbook = XLSX.readFile('C:\\Users\\konda\\AppData\\Roaming\\Microsoft\\Windows\\Network Shortcuts\\Playwright_Excel.xlsx');

// Get first sheet
const sheetName = workbook.SheetNames[1];
const worksheet = workbook.Sheets[sheetName];

// Convert Excel data into JSON
const testData = XLSX.utils.sheet_to_json(worksheet);


for (const data of testData as any[]) {

    test(`Enter mobile number - ${data.MobileNumber}`, async ({ page }) => {

        await page.goto('https://www.facebook.com/reg/?entry_point=login');

        await page
            .getByRole('textbox', {
                name: 'Mobile number or email address'
            })
            .fill(String(data.MobileNumber));

        await page.waitForTimeout(2000);
    });
}