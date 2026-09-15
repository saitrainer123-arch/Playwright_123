import { chromium } from 'playwright';
import * as XLSX from 'xlsx';

(async () => {

    const workbook = XLSX.readFile(
        'C:/Users/konda/OneDrive/Desktop/For_selenium.xlsx'
    );

    const sheet = workbook.Sheets[workbook.SheetNames[0]];

    const rows = XLSX.utils.sheet_to_json(sheet, {
        header: 1
    });

    const imagePath =
        'C:/Users/konda/OneDrive/Pictures/Screenshots/Facebook_Login_Image.png';

    const context = await chromium.launchPersistentContext(
        './whatsapp-profile',
        {
            headless: false
        }
    );

    const page = context.pages()[0] || await context.newPage();

    await page.goto('https://web.whatsapp.com');

    console.log('WhatsApp Ready');

    await page.waitForTimeout(10000);

    for (const row of rows as any[]) {

        const number = String(row[0] || '').trim();

        if (!number) {
            continue;
        }

        console.log(`Opening Chat : ${number}`);

        await page.goto(
            `https://web.whatsapp.com/send?phone=91${number}`
        );

        try {

            await page.waitForTimeout(8000);

            // Attach button
            await page.locator("[data-testid='plus-rounded']").click();

            await page.waitForTimeout(2000);

            // Upload image
            await page.locator('input[type="file"]').first()
                .setInputFiles(imagePath);

            console.log('Image Uploaded');

            await page.waitForTimeout(5000);

            // Caption
            const captionBox =
                page.locator('[contenteditable="true"]').last();

            await captionBox.click();

            await captionBox.fill(`Company : Career Net

Location : Hyderabad

Role : QA Engineer

Experience : 3+ Years

Package (CTC) : 10 LPA+

Employment : Full Time

Skills : Playwright & TypeScript

HR Name : Sanghamitra

HR Contact : +91 6379054930`);

            console.log('Caption Entered');

            await page.waitForTimeout(3000);

            // Try Send Method 1
            try {
                await page.locator("[data-testid='wds-ic-send-filled']").click();
            } catch {

                // Try Send Method 4
                await captionBox.click();
                await page.keyboard.press('Enter');
            }



            console.log(
                `Image and Message Sent : ${number}`
            );

        } catch (error) {

            console.log(`Failed : ${number}`);
            console.log(error);
        }

        await page.waitForTimeout(5000);
    }

    console.log('All Messages Completed');

})();