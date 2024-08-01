import { Salaray } from "./salary";

export class Constract implements Salaray{
    private position: string
    private salary:number
    getSalary():number{
        return this.salary;
    }
    getPosition():string{
        return this.position
    }
}