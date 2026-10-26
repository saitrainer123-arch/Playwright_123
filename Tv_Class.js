"use strict";
class Tv_ {
    maatv() {
        console.log("Playing Bigg Boss ");
    }
    zeetv() {
        console.log("Saalar Movie is showing");
    }
    SonyTv() {
        console.log("Darling Movie is showing");
    }
    Etv() {
        console.log("saho Saalar Movie is showing");
    }
}
class big_tv1 extends Tv_ {
    mtv() {
        console.log("Rodies is showing");
    }
}
const r1 = new big_tv1();
r1.mtv();
r1.maatv();
//Object Creation
//const r = new Tv_()
//r.SonyTv();
