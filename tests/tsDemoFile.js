"use strict";
class Chiranjeevi_ {
    lands() {
        console.log("50 acres");
    }
    Gold() {
        console.log("10KG GOLD");
    }
}
class RC_ extends Chiranjeevi_ {
    Cars() {
        console.log("100 cars");
    }
}
class RC_son extends RC_ {
    books() {
        console.log("8 Books");
    }
}
const rs = new RC_son();
rs.Cars();
rs.Gold();
rs.books();
rs.lands();
