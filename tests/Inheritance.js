"use strict";
class Chiranjivi {
    name = "Property of ";
    House() {
        console.log(this.name + "5 houses");
    }
    cash() {
        console.log(this.name + "100 cores");
    }
}
class Ram extends Chiranjivi {
    Land() {
        console.log("10 acreas");
    }
    Gold() {
        console.log("50 kg gold");
    }
}
class klikar extends Ram {
    Books() {
        console.log("20 books");
    }
}
const s = new klikar();
s.Books();
s.Gold();
s.House();
s.Land();
s.cash();
