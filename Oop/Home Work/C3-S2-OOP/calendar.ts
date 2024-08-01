import { Person } from "./Person"

export class Calendar {
    private currentYear: number
    constructor(currentYear: number) {
        this.currentYear = currentYear
    }
    getAge(person:Person):number{
        return this.currentYear
    }
}