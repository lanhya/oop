// Activity 3 correction
// -------------------------------------------------------------
// CHALLENGE 1
// Create a function to remove duplicated code
// -------------------------------------------------------------
function count(name, lists) {
    var itemCount = 0;
    for (var _i = 0, lists_1 = lists; _i < lists_1.length; _i++) {
        var item = lists_1[_i];
        if (item === name) {
            itemCount++;
        }
    }
    return itemCount;
}
// count the number of mango
var fruits = ["banana", "banana", "apple", "banana", "mango", "mango"];
console.log('Number of Banana: ', count('banana', fruits));
// count the number of carrot
var vegetables = ["tomato", "potato", "carrot", "tomato", "potato", "tomato"];
console.log('Number of carrot: ', count('carrot', vegetables));
// count the number of rady
var teachers = ["rady", "rith", "rith", "rady", "ronan", "channak"];
console.log('Number of rady: ', count('rady', teachers));
// -------------------------------------------------------------
// CHALLENGE 2
// Refactor the code with a method inside Employee class, to remove duplicated code
// -------------------------------------------------------------
var Employee = /** @class */ (function () {
    function Employee(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    Employee.prototype.printEmployeeInfo = function () {
        return ('First name: ' + this.firstName + ' Last name: ' + this.lastName +
            ' Age : ' + this.age);
    };
    return Employee;
}());
var sopkeak = new Employee("sopeak", "riss", 30);
console.log(sopkeak.printEmployeeInfo());
var rady = new Employee("rady", "y", 27);
console.log(rady.printEmployeeInfo());
var ronan = new Employee("ronan", "ogor", 26);
console.log(ronan.printEmployeeInfo());
