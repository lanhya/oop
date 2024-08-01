// Activity 3 correction


 

// -------------------------------------------------------------
// CHALLENGE 1
// Create a function to remove duplicated code
// -------------------------------------------------------------
function count(name: string, lists: string[]): number {
  let itemCount: number = 0
  for (let item of lists) {
    if (item === name) {
      itemCount++
    }
  }
  return itemCount
}

// count the number of mango
let fruits = ["banana", "banana", "apple", "banana", "mango", "mango"];
console.log('Number of Banana: ',count('banana',fruits));


// count the number of carrot
let vegetables = ["tomato", "potato", "carrot", "tomato", "potato", "tomato"];
console.log('Number of carrot: ',count('carrot',vegetables));


// count the number of rady
let teachers = ["rady", "rith", "rith", "rady", "ronan", "channak"];
console.log('Number of rady: ',count('rady',teachers));


// -------------------------------------------------------------
// CHALLENGE 2
// Refactor the code with a method inside Employee class, to remove duplicated code
// -------------------------------------------------------------

class Employee {
  constructor(
    public firstName: string,
    public lastName: string,
    public age: number
  ) { }
  printEmployeeInfo(): string{
    return ('First name: ' + this.firstName + ' Last name: ' + this.lastName +
    ' Age : '+ this.age)
  }
}

let sopkeak = new Employee("sopeak", "riss", 30);
console.log(sopkeak.printEmployeeInfo());

let rady = new Employee("rady", "y", 27);
console.log(rady.printEmployeeInfo());


let ronan = new Employee("ronan", "ogor", 26);
console.log(ronan.printEmployeeInfo());