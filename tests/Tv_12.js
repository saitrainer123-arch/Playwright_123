"use strict";
class ATM {
    card; // declaire
    bankname;
    balance;
    constructor(card, bankname, balance) {
        this.card = card; //intialize
        this.bankname = bankname;
        this.balance = balance;
    }
    withdraw() {
        console.log("Succusfully withdraw 5000rs");
        console.log("Card Number : " + this.card);
        console.log("Bank Name : " + this.bankname);
    }
    BalanceEnqire() {
        console.log("Your Available Bal :- " + this.balance);
    }
}
const a = new ATM(545665655665, "ICICI", 25000);
a.BalanceEnqire();
