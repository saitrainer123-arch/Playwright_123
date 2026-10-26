class Fridge {

    readonly tem:string; //declaire

    constructor(tem:string){

    this.tem=tem;//intialize
    }

    cooling() {

        console.log("The temperture 5 degrees")
    }

}

const d=new Fridge("10 Degrees");
console.log(d.tem)
d.tem="20 degrees"
console.log(d.tem)
d.tem="25 degrees"
console.log(d.tem)