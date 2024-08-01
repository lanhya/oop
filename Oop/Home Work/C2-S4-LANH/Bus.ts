import { Address } from "./address";
import { Customer } from "./customer";

export class Bus{
    name: string;
    customer:Customer[] = [];
    address:Address[] = [];
    constructor (name: string) {
        this.name = name;
    }
    addCustomer(cus: Customer){
        this.customer.push(cus)
    }
    addAddress(addr: Address){
        this.address.push(addr)
    }
}