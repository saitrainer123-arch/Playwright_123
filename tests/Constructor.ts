class tv21 {
     readonly Mn: number;
     readonly Bn: string;
    // city: string

    constructor(Mn: number,Bn:string) {
        this.Mn = Mn
        this.Bn = Bn
        // this.city = city
    }

    showTV() {
        console.log("TV Brand Model Number : " + this.Mn);
         console.log("TV Brand Model Name : " + this.Bn);
        // console.log("TV City Name : " + this.city);


    }

}
const r = new tv21(45656,"Sumsung")
r.showTV()




