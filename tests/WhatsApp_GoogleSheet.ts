import { chromium } from "playwright";
import axios from "axios";


(async () => {


    // 🔴 GOOGLE SHEET URL  {"cYXo/edit?gid=1893531657#gid=1893531657  to cYXo/gviz/tq?tqx=out:csv&gid=1893531657  --> when ever you change you should add 'csv' like this"}
    const sheetUrl =
        "https://docs.google.com/spreadsheets/d/11g2JL3JDSOrcWW0odg8oSWBxeuRjCPnoh1wuGZlcYXo/gviz/tq?tqx=out:csv&gid=1002273400";

    // Read Google Sheet
    const response = await axios.get(sheetUrl);



    const rows = response.data
        .split("\n")
        .slice(1)
        .map((row: string) =>
            row.replace(/"/g, "").split(",")
        );



    console.log("Total Rows:", rows.length);



    // WhatsApp Login Session
    const context = await chromium.launchPersistentContext(
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
        "Open WhatsApp and scan QR if required"
    );



    await page.waitForTimeout(15000);



    for (const row of rows) {



        // Column A - Phone Number
        const number =
            String(row[0] || "").trim();



        // Column B - Complete Details
        const details =
            row[1] ? row[1].trim() : "";


        if (!number)
            continue;


        // console.log(
        //     "Number:",
        //     number,
        //     "\nDetails:",
        //     details
        // );


        const message =
            `Job Requirement:-

Company :  EPAM
Location : Hyderabad
Role : QA Engineer
Experience : 3+ Years
Package (CTC) : 10 to 18 LPA
Employment : Full Time 
Skills : Playwright & TypeScript +AI
HR Name: HR
HR Contact: 8317326250

interview mode: Virtual

`;



        const whatsappUrl =
            `https://web.whatsapp.com/send?phone=91${number}&text=${encodeURIComponent(message)}`;



        await page.goto(
            whatsappUrl
        );



        await page.waitForTimeout(7000);



        try {



            const sendButton =
                page.locator(
                    "[data-testid='wds-ic-send-filled']"
                );



            await sendButton.click();



            console.log(

                "✅Message Sent to- " + number + ":-" + "-> " + details
            );



        }
        catch (e) {



            console.log(
                "❌Failed: ",
                number,
                details
            );



        }



        await page.waitForTimeout(5000);



    }



    console.log(
        "Completed"
    );


})();