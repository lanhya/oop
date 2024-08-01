class Person {
  name: string;
  address: string;
  dateBirth: string;
  constructor(name: string, address: string, dateBirth: string) {
    this.name = name;
    this.address = address;
    this.dateBirth = dateBirth;
  }
}

class Employee extends Person{
  salary: number;

  constructor(
    name: string,
    address: string,
    dateBirth: string,
    salary: number
  ) {
    super(name, address,dateBirth)
    this.salary = salary;
  }
}

class Doctor extends Employee{
  medicalBranch: string;

  constructor(
    name: string,
    address: string,
    dateBirth: string,
    salary: number,
    medicalBranch: string
  ) {
    super(name, address, dateBirth, salary)
    this.medicalBranch = medicalBranch;
  }
}

let Lorn = new Person('Lorn', 'PVH', '1770');
let LanhEmploy = new Employee('Lanh', 'PVH', '1998-09-06',150);
let PhallaDoctor = new Doctor('Phalla', 'PVH', '1878-06-06',500,'UTMB');

console.log(Lorn);
console.log(LanhEmploy);
console.log(PhallaDoctor);