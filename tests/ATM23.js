"use strict";
class Megastrar {
    gold;
    constructor(gold) {
        this.gold = gold;
    }
    land() {
        console.log("100 acaers land " + this.gold);
    }
}
const mm = new Megastrar("5 kgs");
mm.land();
