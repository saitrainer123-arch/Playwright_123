class Mobile {
    mp; //declaire
    mn;
    constructor(mp, mn) {
        this.mp = mp; //intialize
        this.mn = mn;
    }
    iphone() {
        console.log("This is iphone 14");
        console.log("Model price :" + this.mp);
        console.log("Model Name :" + this.mn);
    }
}
const m = new Mobile(123456, "Sumsung");
m.iphone();
export {};
