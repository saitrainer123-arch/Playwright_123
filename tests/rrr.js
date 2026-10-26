"use strict";
class Fridge {
    tem;
    constructor(tem) {
        this.tem = tem;
    }
    cooling() {
        console.log("The temperture 5 degrees");
    }
}
const d = new Fridge("10 Degrees");
console.log(d.tem);
d.tem = "20 degrees";
console.log(d.tem);
d.tem = "25 degrees";
console.log(d.tem);
