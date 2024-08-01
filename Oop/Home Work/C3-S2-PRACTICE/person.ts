class Person{
    private name: string
    private yearOfBirth: number
    constructor(name: string, yearOfBirth: number) {
        this.name = name;
        this.yearOfBirth = yearOfBirth;
    }
    getName() {
        return this.name;
    }
    getYearOfBirth() {
        return this.yearOfBirth;
    }
}