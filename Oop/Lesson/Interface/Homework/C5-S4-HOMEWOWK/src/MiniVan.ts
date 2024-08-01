import { Vehicle } from "./Vehicle";

export class MiniVan extends Vehicle{
    private numberCustomers:number
    private numberLuggage:number
    constructor(plateID:string, weight:number, numberCustoemr:number, numberLuggage){
        super(plateID, weight)
        this.numberCustomers = numberCustoemr
        this.numberLuggage = numberLuggage
    }
    getSpeedOfVic(){
        return this.getSpeedOfVic()
    }
}