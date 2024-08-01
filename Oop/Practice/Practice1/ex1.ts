// Instructions:
// 1 -  Create a type  `Person` with the following properties:
//         - name
//         - nationality
//         - salary
//
// 2 - Type the function parameters  with this new type
//
// 3- Type the return of each functions

type Person = {name: string; nationality: string; salary: number};
function getName(person: Person){
  return person.name;
}
let p = {name: "Lanh", nationality: "Khmer", salary: 5000};
console.log(getName(p));


type Person2 = {name: string; nationality: string; salary: number};
type Person1 = {name: string; nationality: string; salary: number};

function sumSalary(person1: Person1, person2: Person2): number {
  let result = person1.salary + person2.salary;
  return result;
}
let p1 = {name: "Phalla", nationality: "Khmer", salary: 8000};
let p2 = {name: "Phorn", nationality: "Khmer", salary: 8000};
console.log(sumSalary(p1, p2));






//3
type Person3 = {name: string; nationality: string; salary: number}:number {};
function isFrench(person: Person3): boolean {
  return person.nationality == "French";
}
