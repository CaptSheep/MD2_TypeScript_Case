"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Employee = void 0;
var Employee = (function () {
    function Employee(id, name, age, address, email, phone) {
        this.id = id;
        this.name = name;
        this.age = age;
        this.address = address;
        this.email = email;
        this.phone = phone;
    }
    Employee.prototype.setName = function (name) {
        this.name = name;
    };
    Employee.prototype.setAge = function (age) {
        this.age = age;
    };
    Employee.prototype.setAddress = function (address) {
        this.address = address;
    };
    Employee.prototype.setEmail = function (email) {
        this.email = email;
    };
    Employee.prototype.setPhone = function (phone) {
        this.phone = phone;
    };
    return Employee;
}());
exports.Employee = Employee;
//# sourceMappingURL=employee.js.map