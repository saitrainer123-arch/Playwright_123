"use strict";
class Tv5 {
    Ch_Num; //Declaire
    constructor(Ch_Num) {
        this.Ch_Num = Ch_Num; //intialize
        console.log("Channel name:  " + Ch_Num);
    }
}
const Rm = new Tv5(105);
// console.log(Rm.Ch_Num)
// Rm.Ch_Num = 112
// console.log(Rm.Ch_Num)
// Rm.Ch_Num =55
// console.log(Rm.Ch_Num)
// class Student {
//    readonly name: string;
//   constructor(name: string) {
//     this.name = name;
//   }
// }
// const st = new Student("Sai");
// console.log(st.name)
// st.name = "amoju"
// console.log(st.name)
// st.name="sai"
// class TV4{
//     // Parameterized method
//     changeChannel(channelNumber: number) {
//         console.log("TV changed to channel: " + channelNumber);
//     }
// }
// // Object creation
// const r3 = new TV4();
// // Calling parameterized method
// r3.changeChannel(101,);
// r3.changeChannel(105);
// r3.changeChannel(106)
