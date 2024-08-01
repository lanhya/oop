import { Vehicle } from "./Vehicle";

export class BatMobile extends Vehicle{
    private isBatmanHere: boolean
    constructor(plateID:string, weight:number, isBatmanHere:boolean){
        super(plateID, weight)
        this.isBatmanHere = isBatmanHere
    }
    getSpeedOfVic():number{
        if (this.isBatmanHere) {
            return 5000;
        };
}