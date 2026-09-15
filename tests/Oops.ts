// OOPs in TypeScript example

// Creating a class named TV (Blueprint / Template)
class TV {

    // Property (variable) to store TV name
    name: string;

    // Constructor → runs automatically when object is created
    // Used to initialize values
    constructor(name: string) {
        this.name = name;   // Assign passed value to class variable
    }

    // Method (function inside class)
    // Prints TV company name
    tvcompany() {
        console.log(this.name)
    }
    
}

// Object creation
// Formula: const variable = new ClassName("value");

// Creating object s1 and passing "Samsung" to constructor
const s1 = new TV("Lg");


// Calling class method using object
s1.tvcompany();   // Output: Sumsung
