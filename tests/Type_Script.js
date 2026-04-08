/***********************************************************************
        TYPESCRIPT BASICS FOR PLAYWRIGHT (TRAINER VERSION)
-----------------------------------------------------------------------
TypeScript = JavaScript + Data Types + OOP + Safety

WHY TYPESCRIPT?
----------------
JavaScript allows mistakes during runtime.
TypeScript catches mistakes BEFORE execution.

Playwright uses TypeScript because:
✔ Better auto suggestions
✔ Less automation errors
✔ Clean framework structure
✔ Similar to Java OOP

IMPORTANT:
You only need BASIC TypeScript for Playwright.
***********************************************************************/
/***********************************************************************
1️⃣ VARIABLES & TYPES
-----------------------------------------------------------------------
USE:
Defines what type of data a variable can store.
Prevents wrong data usage.
***********************************************************************/
// Without TypeScript (JavaScript)
let usernameJS = "Sai";
usernameJS = 100; // allowed → dangerous
// With TypeScript
let username = "Sai"; // only string allowed
let age = 25;
let isActive = true;
/*
USE IN PLAYWRIGHT:
------------------
Storing test data, URLs, usernames, counts, flags.
*/
/***********************************************************************
2️⃣ ARRAYS
-----------------------------------------------------------------------
USE:
Store multiple values of SAME TYPE.
***********************************************************************/
let users = ["standard_user", "locked_out_user"];
let ids = [1, 2, 3];
/*
USE IN PLAYWRIGHT:
------------------
Data-driven testing.
Multiple login users.
*/
/***********************************************************************
3️⃣ FUNCTIONS
-----------------------------------------------------------------------
USE:
Reusable logic. Avoid repeating code.
***********************************************************************/
function add(a, b) {
    return a + b;
}
/*
USE IN PLAYWRIGHT:
------------------
Reusable actions like:
login()
searchProduct()
logout()
*/
/***********************************************************************
4️⃣ ARROW FUNCTIONS
-----------------------------------------------------------------------
USE:
Shorter function syntax.
Used heavily in Playwright tests.
***********************************************************************/
const multiply = (x, y) => x * y;
/*
PLAYWRIGHT EXAMPLE:
test('login test', async ({ page }) => {})
*/
/***********************************************************************
5️⃣ OPTIONAL PARAMETERS
-----------------------------------------------------------------------
USE:
Parameter may or may not be passed.
***********************************************************************/
function greet(name, city) {
    console.log(name, city);
}
const user1 = {
    username: "standard_user",
    password: "secret_sauce"
};
/*
USE IN PLAYWRIGHT:
------------------
Test data models.
API response validation.
*/
/***********************************************************************
7️⃣ CLASS (OOP CONCEPT) ⭐⭐⭐⭐⭐
-----------------------------------------------------------------------
USE:
Create reusable object templates.

VERY IMPORTANT FOR POM.
***********************************************************************/
class Student {
    name;
    constructor(name) {
        this.name = name;
    }
    show() {
        console.log(this.name);
    }
}
/*
USE IN PLAYWRIGHT:
------------------
Page Object Model (POM)

LoginPage
HomePage
CartPage
*/
/***********************************************************************
8️⃣ CONSTRUCTOR
-----------------------------------------------------------------------
USE:
Runs automatically when object is created.
Used to initialize values.
***********************************************************************/
class Example {
    constructor() {
        console.log("Object created");
    }
}
new Example();
/*
PLAYWRIGHT USE:
constructor(page: Page)
Stores browser page reference.
*/
/***********************************************************************
9️⃣ ACCESS MODIFIERS
-----------------------------------------------------------------------
USE:
Controls visibility of data.
***********************************************************************/
class Employee {
    name = "Sai"; // accessible everywhere
    salary = 5000; // inside class only
}
/*
PLAYWRIGHT USE:
Protect locators or internal methods.
*/
/***********************************************************************
🔟 ASYNC / AWAIT ⭐⭐⭐⭐⭐ MOST IMPORTANT
-----------------------------------------------------------------------
USE:
Wait for operations that take time.

Browser actions are NOT instant.
***********************************************************************/
async function getData() {
    return "Loaded";
}
async function run() {
    const result = await getData();
    console.log(result);
}
run();
/*
PLAYWRIGHT USE:
----------------
await page.goto()
await page.click()
await page.fill()

Without await → test fails.
*/
/***********************************************************************
11️⃣ PROMISE
-----------------------------------------------------------------------
USE:
Represents future result.

async/await works on promises.
***********************************************************************/
function examplePromise() {
    return new Promise(resolve => resolve("Done"));
}
/***********************************************************************
12️⃣ EXPORT & IMPORT ⭐⭐⭐⭐
-----------------------------------------------------------------------
USE:
Share code between files.
***********************************************************************/
// Export
export class LoginPage {
    login() {
        console.log("Login");
    }
}
// Import (another file)
// import { LoginPage } from '../pages/LoginPage';
/*
PLAYWRIGHT USE:
----------------
Separate:
LoginPage.ts
Test file.ts
*/
/***********************************************************************
13️⃣ ENUM
-----------------------------------------------------------------------
USE:
Fixed set of values.
***********************************************************************/
var Browser;
(function (Browser) {
    Browser[Browser["Chrome"] = 0] = "Chrome";
    Browser[Browser["Firefox"] = 1] = "Firefox";
    Browser[Browser["Webkit"] = 2] = "Webkit";
})(Browser || (Browser = {}));
let userId = 101;
/***********************************************************************
15️⃣ WHY TYPESCRIPT HELPS PLAYWRIGHT
-----------------------------------------------------------------------

WITHOUT TYPESCRIPT:
❌ runtime errors
❌ wrong arguments
❌ weak autocomplete

WITH TYPESCRIPT:
✅ auto suggestions
✅ early error detection
✅ strong framework design
*/
/***********************************************************************
✅ HOW MUCH TYPESCRIPT REQUIRED FOR PLAYWRIGHT?
-----------------------------------------------------------------------

YOU NEED ONLY:

⭐⭐⭐⭐⭐ async / await
⭐⭐⭐⭐ classes (POM)
⭐⭐⭐⭐ import/export
⭐⭐⭐ functions
⭐⭐⭐ variables & types
⭐⭐ interfaces (basic)

YOU DO NOT NEED:
❌ Advanced generics
❌ Complex typing
❌ Functional programming
❌ Deep TypeScript theory
*/
/***********************************************************************
FINAL MESSAGE FOR ASPIRANTS
-----------------------------------------------------------------------

TypeScript is NOT the goal.
Automation is the goal.

Learn TypeScript ONLY as much as required
to write Playwright automation.
***********************************************************************/
console.log("TypeScript for Playwright Completed ✅");
