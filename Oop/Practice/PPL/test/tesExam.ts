class Employee {
    name: string;
    city: string;
    yearIncompany : number = 0;
    constructor(name: string, city: string) {
        this.name = name;
        this.city = city;

    }

}

let employee = new Employee("Lanh", "PP");
