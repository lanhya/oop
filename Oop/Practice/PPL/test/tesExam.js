var Employee = /** @class */ (function () {
    function Employee(name, city) {
        this.yearIncompany = 0;
        this.name = name;
        this.city = city;
    }
    return Employee;
}());
var employee = new Employee("Lanh", "PP");
console.log(employee.yearIncompany);
