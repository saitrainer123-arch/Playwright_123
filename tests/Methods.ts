class Bike  {

    //Declaride as a string
    readonly color: string;
    Bike_Number: number;

    constructor(color: string, Bike_Number: number) {
        //Intializing the string with
        this.color = color;
        this.Bike_Number = Bike_Number;

    }

    showcolor() {
        console.log(this.color + " and the bike number is " + this.Bike_Number)

    }
    showNumber() {
        console.log(this.color + " and the bike number is " + this.Bike_Number)

    }
}
// object formula ------const varible = new Classname("data types")
const c = new Bike("Blue color", 94625)
const c1 = new Bike("Red Color", 6565)

c1.showcolor()
c.showcolor()
c.showcolor











// class Bike {
//     color: string;

//     constructor(color: string) {
//         this.color = color;
//     }

//     showColor() {
//         console.log(this.color);
//     }

// }
// //object  -----const varable= new classname("Data types")
// const b1 = new Bike("Blue")
// const b2 = new Bike("Red")
// b1.showColor();
// b2.showColor()
