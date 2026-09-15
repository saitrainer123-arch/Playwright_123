import { chromium } from "playwright";
import axios from "axios";

(async () => {

    // 🔴 GOOGLE SHEET URL
    const sheetUrl =
        "https://docs.google.com/spreadsheets/d/11g2JL3JDSOrcWW0odg8oSWBxeuRjCPnoh1wuGZlcYXo/gviz/tq?tqx=out:csv&gid=1002273400";


    // 🔴 EXCEL FILE PATH
    const excelPath =
        "C:\\Users\\konda\\OneDrive\\Desktop\\Interview_QA\\Hyd_StartUps_on_QA.xlsx";


    // Read Google Sheet
    const response = await axios.get(sheetUrl);

    const rows = response.data
        .split("\n")
        .slice(1)
        .map((row: string) =>
            row.replace(/"/g, "").split(",")
        );


    console.log(
        "Total Rows:",
        rows.length
    );


    // WhatsApp Session
    const context =
        await chromium.launchPersistentContext(
            "./whatsapp-profile",
            {
                headless: false
            }
        );


    const page =
        context.pages()[0] ||
        await context.newPage();


    await page.goto(
        "https://web.whatsapp.com",
        {
            waitUntil: "domcontentloaded",
            timeout: 60000
        }
    );


    console.log(
        "Login WhatsApp..."
    );


    await page.waitForTimeout(15000);


    for (const row of rows) {

        // Column A - Phone Number
        const number =
            String(row[0] || "").trim();


        // Column B - Details
        const details =
            String(row[1] || "").trim();


        if (!number)
            continue;


        console.log(
            "\nProcessing:",
            number,
            ":-",
            details
        );


        // Open WhatsApp chat
        await page.goto(
            `https://web.whatsapp.com/send?phone=91${number}`,
            {
                waitUntil: "domcontentloaded",
                timeout: 60000
            }
        );


        await page.waitForTimeout(7000);


        try {

            // ==========================================
            // 1. CLICK ATTACH
            // ==========================================

            const attach =
                page.locator(
                    "[data-icon='plus-rounded']"
                );


            await attach.waitFor({
                state: "visible",
                timeout: 20000
            });


            await attach.click();


            await page.waitForTimeout(1500);


            // ==========================================
            // 2. CLICK DOCUMENT
            // ==========================================

            const documentOption =
                page.getByText(
                    "Document",
                    {
                        exact: true
                    }
                );


            await documentOption.waitFor({
                state: "visible",
                timeout: 10000
            });


            console.log(
                "Document option found"
            );


            // ==========================================
            // 3. FILE CHOOSER
            // ==========================================

            const fileChooserPromise =
                page.waitForEvent(
                    "filechooser"
                );


            await documentOption.click();


            const fileChooser =
                await fileChooserPromise;


            // ==========================================
            // 4. SELECT EXCEL FILE
            // ==========================================

            await fileChooser.setFiles(
                excelPath
            );


            console.log(
                "📊 Excel file selected successfully"
            );


            // ==========================================
            // 5. WAIT FOR PREVIEW
            // ==========================================

            await page.waitForTimeout(7000);


            // ==========================================
            // 6. SEND
            // ==========================================

            await page.keyboard.press(
                "Enter"
            );


            console.log(
                "✅ Excel File Sent:",
                number,
                ":-",
                details
            );


        }
        catch (error) {

            await page.screenshot({
                path: `failed-${number}.png`
            });


            console.log(
                "❌ Failed:",
                number,
                ":-",
                details
            );


            console.log(
                error
            );

        }


        // Wait before next contact
        await page.waitForTimeout(5000);

    }


    console.log(
        "\n========== COMPLETED =========="
    );

})();