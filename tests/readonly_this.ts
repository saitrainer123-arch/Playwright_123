class Student {

  readonly name: string;

  constructor(name: string) {
    this.name = name;
  }
}

const st = new Student("Sai");

console.log(st.name)
st.name = "amoju"
console.log(st.name)


//console.log(student.name); // Sai

// student.name = "Ravi"; // ❌ Error: Cannot assign to 'name' because it is a read-only property.