import { chromium } from "playwright";
import axios from "axios";


(async () => {


    // 🔴 GOOGLE SHEET URL
    const sheetUrl =
        "https://docs.google.com/spreadsheets/d/11g2JL3JDSOrcWW0odg8oSWBxeuRjCPnoh1wuGZlcYXo/gviz/tq?tqx=out:csv&gid=1002273400";



    // 🔴 IMAGE PATH
    const imagePath =
        "C:\\Users\\konda\\Downloads\\WhatsApp Image 2026-07-23 at 09.29.55.jpeg";



    // Read Google Sheet

    const response = await axios.get(sheetUrl);



    const rows = response.data
        .split("\n")
        .slice(1)
        .map((row: string) =>
            row.replace(/"/g, "").split(",")
        );



    console.log("Total Rows:", rows.length);



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
        "https://web.whatsapp.com"
    );



    console.log(
        "Login WhatsApp..."
    );



    await page.waitForTimeout(15000);



    for (const row of rows) {



        const number =
            String(row[0] || "").trim();



        const details =
            String(row[1] || "").trim();



        if (!number)
            continue;



        console.log(
            number,
            ":-",
            details
        );



        await page.goto(
            `https://web.whatsapp.com/send?phone=91${number}`
        );



        await page.waitForTimeout(7000);



        try {



            // Click Attach

            const attach =
                page.locator(
                    "[data-icon='plus-rounded']"
                );


            await attach.waitFor({
                timeout: 20000
            });



            await attach.click();



            await page.waitForTimeout(2000);



            // Upload image

            const fileInput =
                page.locator(
                    "input[type='file']"
                ).last();



            await fileInput.setInputFiles(
                imagePath
            );



            console.log(
                "Image selected"
            );



            await page.waitForTimeout(7000);


            await page.keyboard.press('Enter')



            // Caption

            const caption =
                page.locator(
                    "p[class='selectable-text copyable-text x15bjb6t x1n2onr6']"
                )
                    .last();



            await caption.click();



            await caption.fill(
                `yesterday got an offerletter,
                don't delay when the market is good`
            );



            console.log(
                "Caption added"
            );



            await page.waitForTimeout(3000);



            // Send using Enter

            await page.keyboard.press(
                "Enter"
            );



            console.log(
                "✅ Image + Message Sent:",
                number,
                ":-",
                details
            );



        }
        catch (error) {



            await page.screenshot({
                path: "failed.png"
            });



            console.log(
                "❌ Failed:",
                number,
                ":-",
                details
            );



        }



        await page.waitForTimeout(5000);



    }



    console.log(
        "Completed"
    );


})();