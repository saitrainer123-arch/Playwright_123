export class TV3 {

    // Variable to store TV brand
    brand: string;
    color: string;
    readonly model_no: number;



    // Constructor receives value during object creation
    constructor(brand: string, model_no: number,color: string) {

        // Assigning value to current object
        this.brand = brand;
        this.model_no = model_no;
        this.color=color;
    }

    // Method to display TV brand
    showTV() {
        console.log("TV Brand is: " + this.brand);
        console.log("Tv Model number is " + this.model_no+" and the color is "+this.color);
    }


}

// Creating object and passing value

const b = new TV3("Sony", 65655665,"Blue ");

b.color="red"


//we can change the value
//b.brand = "vivo"
//readonly con not change the value
//b.model_no=55566

// Calling method
b.showTV();

