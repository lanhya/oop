import { Address } from "./address";
import { Bus } from "./Bus";
import { Customer } from "./customer";
import { Trip } from "./Trip";

let mytrip = new Trip("Trip Khmer");

let addressDeparture1 = new Address("Phnom Penh","Cambodia");
let addressArrival1 = new Address("Kampot", "Cambodia");
let addressDeparture2 = new Address("Phnom Penh", "Cambodia");
let addressArrival2 = new Address("Phnom Penh", "Sieam Reap");


let customerA = new Customer("Him", "Hey", false);
let customerB = new Customer("Sovanda", "Chib", true);
let customerC = new Customer("Ronan", "Ogor", true);

let bus1 = new Bus("KAKA Bus");
let bus2 = new Bus("LYHOR Express");
bus1.addAddress(addressDeparture1);
bus1.addAddress(addressArrival1);
bus1.addCustomer(customerB);
bus1.addCustomer(customerC);

bus2.addAddress(addressDeparture2);
bus2.addAddress(addressArrival2);
bus2.addCustomer(customerA);
bus2.addCustomer(customerB);
bus2.addCustomer(customerC);

mytrip.addBus(bus1);
mytrip.addBus(bus2);
mytrip.bus.forEach(item=>{
    console.log(item.name)
})
