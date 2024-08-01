// Instructions:
// 1 -  Create a type  `Person` with the following properties:
//         - name
//         - nationality
//         - salary
//
// 2 - Type the function parameters  with this new type
//
// 3- Type the return of each functions
function getName(person) {
    return person.name;
}
var p = { name: "Lanh", nationality: "Khmer", salary: 5000 };
console.log(getName(p));
function sumSalary(person1, person2) {
    var result = person1.salary + person2.salary;
    return result;
}
var p1 = { name: "Phalla", nationality: "Khmer", salary: 8000 };
var p2 = { name: "Phorn", nationality: "Khmer", salary: 8000 };
console.log(sumSalary(p1, p2));
//3
function isFrench(person) {
    return person.nationality == "French";
}
