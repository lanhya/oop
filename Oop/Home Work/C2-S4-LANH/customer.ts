export class Customer{
    firstName: string
    lastName: string
    haveAddress: boolean
    constructor( firstName: string, lastName: string, haveAddress: boolean) {
        this.firstName = firstName
        this.lastName = lastName
        this.haveAddress = haveAddress
    }
}