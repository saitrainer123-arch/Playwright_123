
import { chromium } from 'playwright';
import * as XLSX from 'xlsx';

(async () => {

    // Read Excel File
    const workbook = XLSX.readFile(
        'C:/Users/konda/OneDrive/Desktop/For_selenium.xlsx'
    );

    //to Change the Sheet
    const sheet = workbook.Sheets[workbook.SheetNames[0]];

    const rows = XLSX.utils.sheet_to_json(sheet, {
        header: 1
    });

    // Launch Browser with saved WhatsApp session
    const context = await chromium.launchPersistentContext(
        './whatsapp-profile',
        {
            headless: false
        }
    );

    const page = context.pages()[0] || await context.newPage();

    await page.goto('https://web.whatsapp.com');

    console.log('WhatsApp Ready');

    // Give time for WhatsApp to load
    await page.waitForTimeout(10000);

    for (const row of rows as any[]) {

        // Column A
        const number = String(row[0] || '').trim();

        if (!number) {
            continue;
        }
        const message = `Company :  D-Link Technologies
Location : Hyderabad
Role : QA Engineer
Experience : 3+ Years
Package (CTC) : 10 LPA+
Employment : Full Time
Skills : Playwright & TypeScript
HR Name : Bhumi
HR Contact : +918265966776`;

        const url =
            `https://web.whatsapp.com/send?phone=91${number}&text=${encodeURIComponent(message)}`;

        //   console.log(`Opening chat for ${number}`);

        await page.goto(url);

        try {

            // Wait for Send Button
            const sendButton = page.locator("[data-testid='wds-ic-send-filled']");

            await sendButton.waitFor({
                timeout: 30000
            });

            await sendButton.click();

            console.log(`Message sent to ${number}`);

        } catch (error) {

            console.log(`Failed for ${number}`);

        }

        // Wait before next message
        await page.waitForTimeout(5000);
    }

    console.log('All messages completed');

})();