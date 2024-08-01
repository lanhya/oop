import { Vehicle } from "./Vehicle";

export class tukTuc extends Vehicle{
    numberCustoemr:string
    numberLuggage:string
    constructor(plateID:string, weight:number, numberCostomer:string, numberLuggage:string){
        super(plateID, weight)
        this.numberCustoemr = numberCostomer
        this.numberLuggage = numberLuggage

    }
    getSpeedOfVic(){
        return this.getSpeedOfVic();
    }
}