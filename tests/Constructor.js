"use strict";
class tv21 {
    Mn;
    Bn;
    // city: string
    constructor(Mn, Bn) {
        this.Mn = Mn;
        this.Bn = Bn;
        // this.city = city
    }
    showTV() {
        console.log("TV Brand Model Number : " + this.Mn);
        console.log("TV Brand Model Name : " + this.Bn);
        // console.log("TV City Name : " + this.city);
    }
}
const r = new tv21(45656, "Sumsung");
r.Mn = 55555;
r.showTV();
r.Bn = "Sony";
r.showTV();
