import { chromium } from "playwright";
import axios from "axios";
import path from "path";

(async () => {

    // ============================================================
    // GOOGLE SHEET
    // ============================================================

    const sheetUrl =
        "https://docs.google.com/spreadsheets/d/11g2JL3JDSOrcWW0odg8oSWBxeuRjCPnoh1wuGZlcYXo/gviz/tq?tqx=out:csv&gid=1002273400";


    // ============================================================
    // WHATSAPP PROFILE
    // ============================================================

    const profilePath = path.resolve("./whatsapp-profile");


    // ============================================================
    // MESSAGE
    // ============================================================

    const message =
`Job Requirement:-

Company : Galaxy IT Solutions
Location : Hyderabad
Role : QA Engineer
Experience : 3+ Years
Package (CTC) : 10 to 18 LPA
Employment : Full Time
Skills : Playwright & TypeScript + AI
HR Name: HR
HR Contact: 6206618144`;


    // ============================================================
    // READ GOOGLE SHEET
    // ============================================================

    console.log("");
    console.log("============================================================");
    console.log("           WHATSAPP AUTOMATION STARTED");
    console.log("============================================================");

    console.log("");
    console.log("📄 Reading Google Sheet...");

    const response = await axios.get(sheetUrl);

    const rows = response.data
        .split("\n")
        .slice(1)
        .map((row: string) =>
            row.replace(/"/g, "").split(",")
        )
        .filter((row: string[]) =>
            row[0]?.trim()
        );

    console.log(`✅ Total Rows: ${rows.length}`);


    // ============================================================
    // START CHROMIUM
    // ============================================================

    console.log("");
    console.log("🚀 Starting Chromium...");
    console.log("👻 HEADLESS MODE: ON");
    console.log(`📁 Profile: ${profilePath}`);


    const context =
        await chromium.launchPersistentContext(
            profilePath,
            {
                headless: true,

                // IMPORTANT
                // Use Chromium's newer headless implementation
                channel: "chromium",

                viewport: {
                    width: 1366,
                    height: 768
                },

                args: [
                    "--disable-blink-features=AutomationControlled",
                    "--disable-dev-shm-usage",
                    "--no-sandbox"
                ]
            }
        );


    // ============================================================
    // PAGE
    // ============================================================

    const page =
        context.pages()[0] ||
        await context.newPage();


    // ============================================================
    // OPEN WHATSAPP
    // ============================================================

    console.log("");
    console.log("🌐 Opening WhatsApp Web...");

    await page.goto(
        "https://web.whatsapp.com",
        {
            waitUntil: "domcontentloaded",
            timeout: 60000
        }
    );

    console.log("⏳ Waiting 15 seconds for WhatsApp...");

    await page.waitForTimeout(15000);

    console.log("✅ WhatsApp loaded.");


    // ============================================================
    // PROCESS NUMBERS
    // ============================================================

    let successCount = 0;
    let failedCount = 0;
    let skippedCount = 0;


    for (let i = 0; i < rows.length; i++) {

        const row = rows[i];


        // --------------------------------------------------------
        // PHONE NUMBER
        // --------------------------------------------------------

        const number =
            String(row[0] || "").trim();


        // --------------------------------------------------------
        // DETAILS
        // --------------------------------------------------------

        const details =
            String(row[1] || "").trim();


        // --------------------------------------------------------
        // EMPTY NUMBER
        // --------------------------------------------------------

        if (!number) {

            skippedCount++;

            console.log("");
            console.log("------------------------------------------------------------");
            console.log(`⚠️ RECORD ${i + 1}`);
            console.log("STATUS : SKIPPED");
            console.log("REASON : Empty phone number");
            console.log("------------------------------------------------------------");

            continue;
        }


        // ========================================================
        // REPORT
        // ========================================================

        console.log("");
        console.log("");
        console.log("============================================================");
        console.log(`📌 RECORD ${i + 1} OF ${rows.length}`);
        console.log("============================================================");
        console.log(`📱 Phone Number : ${number}`);
        console.log(`👤 Details      : ${details || "N/A"}`);
        console.log(`📨 Status       : PROCESSING`);
        console.log("------------------------------------------------------------");


        try {

            // ====================================================
            // WHATSAPP URL
            // ====================================================

            const whatsappUrl =
                `https://web.whatsapp.com/send?phone=91${number}&text=${encodeURIComponent(message)}`;


            console.log("🔄 Opening chat...");


            await page.goto(
                whatsappUrl,
                {
                    waitUntil: "domcontentloaded",
                    timeout: 60000
                }
            );


            console.log("✅ Chat opened.");

            await page.waitForTimeout(6000);


            // ====================================================
            // ORIGINAL SEND BUTTON
            // ====================================================

            console.log("🔍 Looking for Send button...");


            const sendButton =
                page.locator(
                    "[data-testid='wds-ic-send-filled']"
                );


            await sendButton.waitFor({
                state: "visible",
                timeout: 30000
            });


            console.log("✅ Send button found.");


            // ====================================================
            // SEND
            // ====================================================

            await sendButton.click();


            console.log("📤 Send button clicked.");


            // ====================================================
            // WAIT
            // ====================================================

            await page.waitForTimeout(5000);


            // ====================================================
            // SUCCESS
            // ====================================================

            successCount++;

            console.log("");
            console.log("******************** SUCCESS ********************");
            console.log(`📱 Number  : ${number}`);
            console.log(`👤 Details : ${details || "N/A"}`);
            console.log("📨 Status  : MESSAGE SENT");
            console.log("*************************************************");


            console.log("");
            console.log("⏳ Waiting 8 seconds before next number...");

            await page.waitForTimeout(8000);


        } catch (error) {

            failedCount++;

            const errorMessage =
                error instanceof Error
                    ? error.message
                    : String(error);


            console.log("");
            console.log("********************* FAILED ********************");
            console.log(`📱 Number  : ${number}`);
            console.log(`👤 Details : ${details || "N/A"}`);
            console.log("📨 Status  : MESSAGE FAILED");
            console.log(`❌ Reason  : ${errorMessage}`);
            console.log("*************************************************");


            await page.waitForTimeout(10000);
        }
    }


    // ============================================================
    // FINAL REPORT
    // ============================================================

    console.log("");
    console.log("");
    console.log("============================================================");
    console.log("                    FINAL REPORT");
    console.log("============================================================");

    console.log(`📄 Total Records    : ${rows.length}`);
    console.log(`✅ Messages Sent    : ${successCount}`);
    console.log(`❌ Messages Failed  : ${failedCount}`);
    console.log(`⚠️ Records Skipped : ${skippedCount}`);

    console.log("------------------------------------------------------------");

    console.log(
        `📊 Completed         : ${successCount + failedCount + skippedCount} / ${rows.length}`
    );

    console.log("============================================================");

    console.log("");
    console.log("✅ SCRIPT COMPLETED");
    console.log("============================================================");


    await context.close();

})();