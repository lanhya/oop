import { Salaray } from "./salary";

class TeamMember implements Salaray{
    private name:string
    private salary:number
    getSalary():number{
        return this.salary;

    }
    getName():string
}