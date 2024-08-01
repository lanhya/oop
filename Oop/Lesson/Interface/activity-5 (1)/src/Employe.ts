class Contract { }

export abstract class Employee {

    constructor(private name: string) { }
    abstract getEmployeeType(): string;
    abstract getSalary(): number;

}
class Commercial extends Employee{
    private contract: Contract[]
    constructor(name: string, contract: Contract[]) {
        super(name)
        this.contract=contract
    }
    getEmployeeType(): string{
        return 'COMMERCIAL'
    }
    getSalary(): number{
        return this.contract.length * 400
    }
}
class Manager extends Employee{
    private teamMember: Employee[]
    constructor(name: string, team: Employee[]) {
        super(name)
        this.teamMember=team
    }
    getEmployeeType(): string{
        return 'MANAGER'
    }
    getSalary(): number{
        return this.teamMember.length * 600
    }
}
class Developer extends Employee{
    private skills: string[]
    constructor(name: string, skills: string[]) {
        super(name)
        this.skills=skills
    }
    getEmployeeType(): string{
        return 'DEVELOPER'
    }
    getSalary(): number{
        let salary: number = 0
        salary += this.skills.length * 500
        if (this.skills.includes('OOP')) {
            salary+=2000
        }
        return salary
    }
}
