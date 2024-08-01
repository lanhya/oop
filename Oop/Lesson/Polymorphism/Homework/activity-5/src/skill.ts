import { Salaray } from "./salary";

export class Skill implements Salaray{
    private position:string
    private salary:number
    getSalary():number{
        return this.salary;
    }
    getPosition():string{
        return this.position
    }
}