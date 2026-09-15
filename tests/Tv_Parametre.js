"use strict";
class TV4 {
    // Parameterized method
    changeChannel(channelNumber) {
        console.log("TV changed to channel: " + channelNumber);
    }
}
// Object creation
const r3 = new TV4();
// Calling parameterized method
r3.changeChannel(101);
r3.changeChannel(105);
