import { Salary } from "../salary";

export class Commercial implements Salary{
    private salary:number;
    constructor(salary:number){
        this.salary = salary
    }
    getSalary(){
        return this.getSalary();
    }
}