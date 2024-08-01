
/*
 INSTRUCTIONS
	1 -  Create a type  `Person` with the following properties:
         - name			(string)
         - nationality	(string)
         - salary			(string)

	2 -  For all the functions : add the parameter types and return type

	3 -  Create 2 objects of type personn (like you want) and  test the 3 functions

*/
type Person = {name: string; nationality:string; salary: number};
function getName(person: Person):string {
  return person.name;
}

function sumSalaries(person1: Person, person2: Person):number {
  return person1.salary + person2.salary;
}

type Persons = {name: string; nationality: string; salary: number};
 
function isFrench(person: Person):boolean {
  return person.nationality == "French";
}
let data1 = {name: "Ra", nationality: "Khmer", salary: 500};
let data2 = {name: "Ro", nationality: "French", salary: 550};