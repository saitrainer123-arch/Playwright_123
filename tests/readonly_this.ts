class User {
  userId: number;
  name: string;

  constructor(userId: number, name: string) {
    this.userId = userId;
    this.name = name;
  }
}

const user1 = new User(112, "Suresh");

user1.name= "Ganesh"
user1.name = "Ramesh";   // ✅ allowed


user1.userId = 2;        // ❌ not allowed