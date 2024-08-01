import { Bus } from "./Bus";

export class Trip{
    name: string;
    bus:Bus[] = [];
    constructor (name: string) {
        this.name = name;
    }
    addBus(bus: Bus){
        this.bus.push(bus)
    }
}