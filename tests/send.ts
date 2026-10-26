import { chromium } from 'playwright';
import * as XLSX from 'xlsx';

// Read Excel file
const workbook = XLSX.readFile('Sai.xlsx');

const sheetName = workbook.SheetNames[0];

const sheet = workbook.Sheets[sheetName];

const data = XLSX.utils.sheet_to_json(sheet);

(async () => {

    const browser = await chromium.launch({
        headless: false
    });

    const page = await browser.newPage();

    // Open WhatsApp Web
    await page.goto('https://web.whatsapp.com');

    console.log('Scan QR Code');

    await page.waitForTimeout(20000);

    for (const row of data as any[]) {

        const phone = row.Number;

        const message = 'Hi';

        const url =
            `https://web.whatsapp.com/send?phone=${phone}&text=${encodeURIComponent(message)}`;

        await page.goto(url);

        await page.waitForTimeout(10000);

        try {

            await page.locator('span[data-icon="send"]').click();

            console.log(`Message sent to ${phone}`);

        } catch (error) {

            console.log(`Failed for ${phone}`);

        }

        await page.waitForTimeout(5000);
    }

})();