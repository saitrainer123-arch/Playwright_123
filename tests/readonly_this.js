"use strict";
class User {
    userId;
    name;
    constructor(userId, name) {
        this.userId = userId;
        this.name = name;
    }
}
const user1 = new User(1, "Suresh");
user1.name = "Ramesh"; // ✅ allowed
user1.userId = 2; // ❌ not allowed
