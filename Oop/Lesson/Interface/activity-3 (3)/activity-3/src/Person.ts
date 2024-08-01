import { Resource } from "./Resource"

export class Person extends Resource implements NameedResource{
    private age:string
    constructor(id:string, age:string){
        super(id)
        this.age = age
    }
    getName():string{
        return null
    }
}