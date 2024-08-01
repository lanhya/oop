// -------------------------------------------------------------
// CHALLENGE 1
// Create a function to void udplication of code
// -------------------------------------------------------------

function getLargestNumber(Number1:number,Number2:number):string{
  let result = ''
  if(Number1>=Number2){
    result = "The largest number is "+ Number1;
  }
  else{
    result = "The largest number is "+ Number2;
  }
  return result;
}

let a = 40;
let b = 50;
// if (a >= b) {
//   console.log("The largest number is " + a);
// } else {
//   console.log("The largest number is " + b);
// }

let c = 10;
let d = 5;
// if (c >= d) {
//   console.log("The largest number is " + c);
// } else {
//   console.log("The largest number is " + d);
// }

let e = 10;
let f = 5;
// if (e >= f) {
//   console.log("The largest number is " + e);
// } else {
//   console.log("The largest number is " + f);
// }
// console.log(getLargestNumber(a,b));
// console.log(getLargestNumber(c,d));
// console.log(getLargestNumber(e,f));
// -------------------------------------------------------------
// CHALLENGE 2
//  Rename with meaningful name :  function name
// -------------------------------------------------------------
function toReverseString(words: string[]): string[] {
  let result: string[] = [];
  for (let i = words.length - 1; i >= 0; i--) {
    result.push(words[i]);
  }
  return result;
}

// console.log(toReverseWords(['hello','hi','bye bye']))

// -------------------------------------------------------------
// CHALLENGE 3
//  Rename with meaningful name :  function name
// -------------------------------------------------------------
function toCheckNegativeNumber(numbers: number[]): boolean {
  let result = false;
  for (let number of numbers) {
    if (number < 0) {
      result = true;
    }
  }
  return result;
}
// console.log(f_3([1,2,3,4,0]));

// -------------------------------------------------------------
// CHALLENGE 4
//  Rename with meaningful name :  function name and a, b, c , d , e, f, g
// -------------------------------------------------------------
function isDayOfTheWeek(word: string): boolean {
  let isMonday = word === "MONDAY";
  let isTuesday = word === "TUESDAY";
  let isWednesday = word === "WEDNESDAY";
  let isThurday = word === "THURDAY";
  let isFriday = word === "FRIDAY";
  let isSaturday = word === "SATURDAY";
  let isSunday = word === "SUNDAY";
  return isMonday || isTuesday || isWednesday || isThurday || isFriday || isSaturday || isSunday;
}
console.log(oneDayOfTheWeek('MONDAY'));

// -------------------------------------------------------------
// CHALLENGE 5
//  Change the code to have ONLY ONE return at the end
// -------------------------------------------------------------
function getEmployeeSalary(age: number): number {
  let salary = 0;
  if (age <= 20) {
    salary = 200;
  }
  if (age > 20 && age <= 40) {
    salary = 400;
	
  } else {
    salary = 600;
  }
  return salary;
}

// -------------------------------------------------------------
// CHALLENGE 6
// Change the code  by creating a class Student and an array of Students, instead of 3 arrays of data
// -------------------------------------------------------------

class Student{
  studentName: string
  studentYearOfBirth: number
  studentProvince: string
  constructor(name: string, yob: number, province: string) {
    this.studentName = name
    this.studentYearOfBirth = yob
    this.studentProvince=province
  }
  getStudentName(): string{
    return this.studentName
  }
  getStudentYearofBirth(): number{
    return this.studentYearOfBirth
  }
  getStudentProvince(): string{
    return this.studentProvince
  }
}

let lanh = new Student('Lanh', 2000, 'Prey Veng');
let thon = new Student('Thon', 2001, 'PP');
let som = new Student('Som', 1990, 'Kandal');
console.log('Lanh name: ' + lanh.getStudentName() + ' Year of Birth: ' +
 lanh.getStudentYearofBirth()+ ' Age: '+ lanh.getStudentProvince());