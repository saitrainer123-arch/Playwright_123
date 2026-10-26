
//variable

let stname: string = 'sai'

let stnum: number = 45

let attendace: boolean = true

let marks: any = "Five hundred"

marks = 500
marks = [20, 655]

let username:null =null;




function add(a: number, b: number) {

    return a % b;

}
console.log(add(20, 30))



// void

function greet():void{

    console.log("Hi")
}


function greet_(stn?:string,Rn?:number){

    console.log(stn,Rn)

}

greet_("Anil",56)
greet_("Sai")


function Brand(brand:string){

console.log(`Brand name ${brand}`)

}

Brand("Sumsung")


//default function
function brand(bn:string="Lg"){

    console.log(bn)

}
brand()
brand("Sony")


function brands():string[]{

    return["sai","Kumar","Anil"]

}

console.log(brands())




