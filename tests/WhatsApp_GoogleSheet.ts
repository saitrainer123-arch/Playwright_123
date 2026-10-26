
import { chromium } from "playwright";
import axios from "axios";
import path from "path";

(async () => {
    let context;

    try {
        // ========================================================
        // GOOGLE SHEET
        // ========================================================

        const sheetUrl =
            "https://docs.google.com/spreadsheets/d/11g2JL3JDSOrcWW0odg8oSWBxeuRjCPnoh1wuGZlcYXo/gviz/tq?tqx=out:csv&gid=1002273400";

        console.log("Reading Google Sheet...");

        const response = await axios.get(sheetUrl, {
            timeout: 30000
        });

        if (typeof response.data !== "string" ||
            response.data.trimStart().startsWith("<")) {
            throw new Error(
                "Google returned HTML instead of CSV. Check sheet sharing permissions."
            );
        }

        // Simple CSV parsing retained from your original code.
        const rows = response.data
            .split(/\r?\n/)
            .slice(1)
            .map((row: string) =>
                row.replace(/"/g, "").split(",")
            )
            .filter((row: string[]) => row[0]?.trim());

        console.log("Total rows:", rows.length);

        // ========================================================
        // WHATSAPP SESSION
        // ========================================================

        const profilePath = path.resolve("./whatsapp-profile");

        context = await chromium.launchPersistentContext(
            profilePath,
            {
                headless: false,
                viewport: { width: 1366, height: 768 }
            }
        );

        const page = context.pages()[0] || await context.newPage();

        await page.goto("https://web.whatsapp.com", {
            waitUntil: "domcontentloaded",
            timeout: 60000
        });

        console.log(
            "Check WhatsApp login. Scan the QR code if requested."
        );

        // Allow time for login and initial loading.
        await page.waitForTimeout(15000);

        // ========================================================
        // MESSAGE
        // ========================================================

        const message = `Job Requirement:-

Company : AWS America
Location : Hyderabad (Remote)
Role : QA Engineer
Experience : 3+ Years
Package (CTC) : 10 to 18 LPA
Employment : Full Time
Skills : Playwright & TypeScript + AI
HR Email: careers.in@awsamerica.com`;

        let sent = 0;
        let failed = 0;
        let skipped = 0;

        // ========================================================
        // PROCESS SHEET
        // ========================================================

        for (let i = 0; i < rows.length; i++) {
            const row = rows[i];
            const number = String(row[0] || "").trim();
            const details = String(row[1] || "").trim();

            if (!number) {
                skipped++;
                continue;
            }

            console.log("\n========================================");
            console.log(`RECORD ${i + 1} OF ${rows.length}`);
            console.log("Phone:", number);
            console.log("Details:", details || "N/A");
            console.log("Status: PROCESSING");
            console.log("========================================");

            try {
                const whatsappUrl =
                    `https://web.whatsapp.com/send?phone=91${number}&text=${encodeURIComponent(message)}`;

                await page.goto(whatsappUrl, {
                    waitUntil: "domcontentloaded",
                    timeout: 60000
                });

                // Wait for chat UI to load.
                await page.waitForTimeout(5000);

                // Try several selectors for the Send button.
                const sendSelectors = [
                    '[data-testid="wds-ic-send-filled"]',
                    'button[aria-label="Send"]',
                    '[aria-label="Send"]',
                    'button[title="Send"]',
                    'span[data-icon="send"]'
                ];

                let clicked = false;

                for (const selector of sendSelectors) {
                    const locator = page.locator(selector).last();

                    try {
                        await locator.waitFor({
                            state: "visible",
                            timeout: 2500
                        });

                        await locator.click({ timeout: 5000 });
                        console.log(
                            `Send button clicked using: ${selector}`
                        );

                        clicked = true;
                        break;
                    } catch {
                        console.log(
                            `Selector not usable: ${selector}`
                        );
                    }
                }

                // If the Send button was not found, stop and
                // capture diagnostics instead of reporting success.
                if (!clicked) {
                    const textboxCount = await page
                        .locator('[contenteditable="true"]')
                        .count()
                        .catch(() => 0);

                    const pageTitle = await page.title().catch(() => "");

                    console.log("Page title:", pageTitle);
                    console.log("Editable elements:", textboxCount);

                    await page.screenshot({
                        path: `whatsapp-failure-${number}.png`,
                        fullPage: false
                    });

                    throw new Error(
                        "Could not find a clickable Send button. " +
                        "A screenshot was saved for diagnosis."
                    );
                }

                // Allow WhatsApp time to process the send.
                await page.waitForTimeout(5000);

                // Note: clicking Send alone does not prove delivery.
                sent++;

                console.log("Send action completed for:", number);

                // Wait before the next contact.
                await page.waitForTimeout(8000);

            } catch (error) {
                failed++;

                console.log("FAILED:", number);
                console.log(
                    "Reason:",
                    error instanceof Error
                        ? error.message
                        : String(error)
                );

                await page.waitForTimeout(5000);
            }
        }

        // ========================================================
        // FINAL REPORT
        // ========================================================

        console.log("\n========================================");
        console.log("FINAL REPORT");
        console.log("========================================");
        console.log("Total records:", rows.length);
        console.log("Send actions completed:", sent);
        console.log("Failed:", failed);
        console.log("Skipped:", skipped);
        console.log("========================================");

    } catch (error) {
        console.error("\nSCRIPT ERROR:");
        console.error(
            error instanceof Error ? error.message : error
        );
    } finally {
        if (context) {
            await context.close();
        }
    }
})();
