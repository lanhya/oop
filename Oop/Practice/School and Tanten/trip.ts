import { bus } from "./bus"

export class trip{
    bus_name:string
    departure_place:string
    arrival_place:string
    customer:string
    constructor(bus_name:string, departure_place:string, arrival_place:string, customer:string) {
        this.bus_name = bus_name
        this.departure_place = departure_place
        this.arrival_place = arrival_place
        this.customer = customer
    }
}