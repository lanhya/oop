
// -------------------------------------------------------------
// CHALLENGE 1
// Rename with meaningful name :  function name
// -------------------------------------------------------------
function increasValueNumber(numbers: number[]): number {
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
function increasvalueNumberOfTwo(numbers: number[]): number {
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
function isNameValid(words: string[]): boolean {
  let z1 = false;
  let z2 = false;
  for (let word of words) {
    if (word === "ronan") {
      z1 = true;
    }
    if (word === "sovanda") {
      z2 = true;
    }
  }
  return z1 && z2;
}

// -------------------------------------------------------------
// CHALLENGE 4
// Rename with mean full names :   the function name
// -------------------------------------------------------------
class Employee {
  isSenior: boolean;
  name: string;
}

function addSeniorToResult(employees: Employee[]): Employee[] {
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
function isValueArrNumValid(numbers: number[]): boolean{
 
  for (let n of numbers) {
    if (n % 2 == 0) {
      listHasEven = true;
    }
  }
  return listHasEven;

}
let listHasEven = false;
let list1 = [1, 5, 9, 8, 7, 6, 8];
let list2 = [2, 5, 8, 4, 9, 10];
let list3 = [1, 5, 9, 8, 7, 6, 8];
console.log(isValueArrNumValid(list1) ? "list1 has even numbers" : "list1 has NO even numbers");
console.log(isValueArrNumValid(list2) ? "list2 has even numbers" : "list2 has NO even numbers");
console.log(isValueArrNumValid(list3) ? "list3 has even numbers" : "list3 has NO even numbers");






// -------------------------------------------------------------
// CHALLENGE 6
//  Add a GOOD comments instead of the todos
// -------------------------------------------------------------

/**
 * To find uppercase character in the password
 * @param   store character of password
 * @return  length of password greater than 7 and it is uppercase character
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




// -------------------------------------------------------------
// CHALLENGE 7
//  - Rename with meaningful name :  aaa  , zzzz
//  - Add a GOOD comments instead of the todos
// -------------------------------------------------------------


/**
 * to find if lower case is valid 
 * @param   store character
 * @return  number greater than or equal to two
 */
function isValidChar(word: string): boolean {
  let sumLowerCha = 0;
  for (let char of word) {
    if (char === char.toLowerCase()) {
      sumLowerCha++;
    }
  }
  return sumLowerCha >= 2;
}