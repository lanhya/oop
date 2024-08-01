import { Customer } from "./customer"


export class Feedback{
    comment: string
    evaluate: number
    author: Customer
    constructor(comment: string, evaluate: number, author: Customer) {
        this.comment = comment
        this.evaluate = evaluate
        this.author = author
    }
    addCustomer(customer: Customer){
        this.author  = customer
    }
}