
// -------------------------------------------------------------
// CHALLENGE 1
// Rename with meaningful name :  function name
// -------------------------------------------------------------
function sum(numbers: number[]): number {
  let result = 0;
  for (let n of numbers) {
    result += n;
  }
  return result;
}


// -------------------------------------------------------------
// CHALLENGE 2
// Rename with meaningful name :  function name
// -------------------------------------------------------------
function getNumberOfTwos(numbers: number[]): number {
  let count = 0;
  for (let value of numbers) {
    if (value == 2) {
      count++;
    }
  }
  return count;
}

// -------------------------------------------------------------
// CHALLENGE 3
// Rename with mean full names :  z1, z2 and  the function name
// -------------------------------------------------------------
function containsRonanSovanda(words: string[]): boolean {
  let ronan = false;
  let sovanda = false;
  for (let word of words) {
    if (word === "ronan") {
      ronan = true;
    }
    if (word === "sovanda") {
      sovanda = true;
    }
  }
  return ronan && sovanda;
}

// -------------------------------------------------------------
// CHALLENGE 4
// Rename with mean full names :   the function name
// -------------------------------------------------------------
class Employee {
  isSenior!: boolean;
  name!: string;
}

function getSeniorEmployees(employees: Employee[]): Employee[] {
  let result: Employee[] = [];
  for (let employee of employees) {
    if (employee.isSenior) {
      result.push(employee);
    }
  }
  return result;
}

	

// -------------------------------------------------------------
// CHALLENGE 5
// Create a function to remove duplicated code
// -------------------------------------------------------------

function isHasEvenNumber(lists: number[]):boolean{
  let hasEven: boolean = false
  for (let n of lists) {
    if (n % 2 == 0) {
      hasEven=true
    }
  }
  return hasEven
}

let list1 = [1, 5, 9, 8, 7, 10, 12];
console.log(isHasEvenNumber(list1) ? "list1 has even numbers" : "list1 has NO even numbers");


let list2 = [2, 5, 8, 4, 9, 10];
console.log(isHasEvenNumber(list2) ? "list2 has even numbers" : "list2 has NO even numbers");

let list3 = [1, 5, 9, 8, 7, 6, 8];
console.log(isHasEvenNumber(list3) ? "list3 has even numbers" : "list3 has NO even numbers");


//-------------------------------------------------------

console.log(isHasEvenNumber(list1)? 'The list1 has even number':'The list1 has NO even number');



// -------------------------------------------------------------
// CHALLENGE 6
//  Add a GOOD comments instead of the todos
// -------------------------------------------------------------

/**
 * A password is valid is it contains at least 8 characters and 1 uppercase 
 * @param   the password
 * @return  true if the password is valid
 */
function isValidPassword(password : string) : boolean{
	let hasUpperCase = false;
	for(let char of password) {
		if (char === char.toUpperCase() ) {
			hasUpperCase = true;
		}
	}	
  return password.length > 7 && hasUpperCase;
}

let mypass = 'helloworld'
console.log(isValidPassword(mypass));



// -------------------------------------------------------------
// CHALLENGE 7
//  - Rename with meaningful name :  aaa  , zzzz
//  - Add a GOOD comments instead of the todos
// -------------------------------------------------------------

/**
 * @param   the  word
 * @return  true if the word contains 2 lowercases or more
 */
function containsAtLeast2LowerCase(word: string): boolean {
  let nbLowerCases = 0;
  for (let char of word) {
    if (char === char.toLowerCase()) {
      nbLowerCases++;
    }
  }
  return nbLowerCases >= 2;
}

