"use strict";
// let username: string = " Umir Rank ";
// let Rank: number = 25;
// console.log(username+" is "+Rank)
// //Arrays
// let numbers: number[] = [1,2,3,4,5,6,7];
// let names: string[] = ["Sai","Ram"];
// console.log("These numer are used for Konwlede "+ numbers +" These are Names "+names)
//---------------------------------------------------------------------------------------
// Arthmetical and logical Operations
// function add(a: number, b: number): number {
//   return a/b;
// }
// console.log(add(100, 20));
//this is Interface
// interface User {
//   name: string;
//   age: number;
// }
// let user: User = {
//   name: "Sai",
//   age: 25
// };
// console.log(user)
// Oops In TypeScripts
class TV {
    name;
    constructor(name) {
        this.name = name;
    }
    tvcompany() {
        console.log(this.name);
    }
    display() {
        console.log(this.name);
    }
}
//object  formula----const var = new ("string value")
const s1 = new TV("Sumsung");
s1.tvcompany();
