"use strict";
exports.__esModule = true;
exports.EmployeeManager = void 0;
var employee_1 = require("../Model/employee");
var EmployeeManager = /** @class */ (function () {
    function EmployeeManager() {
        this.employees = [];
    }
    EmployeeManager.prototype.addEmployee = function (employeeId, departmentId, name, address, age, email, phone) {
        var employee = new employee_1.Employee(employeeId, departmentId, name, age, address, email, phone);
        this.employees.push(employee);
    };
    EmployeeManager.prototype.findEmployee = function (id) {
        var i = -1;
        this.employees.forEach(function (employees, index) {
            if (employees.id == id) {
                i = index;
            }
        });
        return i;
    };
    EmployeeManager.prototype.findEmployeeByDepartmentId = function (id) {
        var arr = [];
        this.employees.forEach(function (employee) {
            if (employee.departmentID === id) {
                arr.push(employee);
            }
        });
        return arr;
    };
    EmployeeManager.prototype.deleteEmployee = function (id) {
        var deleteEmployeeId = this.findEmployee(id);
        if (deleteEmployeeId !== -1) {
            this.employees.splice(deleteEmployeeId, 1);
        }
        else {
            throw new Error('Delete fail');
        }
    };
    EmployeeManager.prototype.updateEmployee = function (id, name, age, address, email, phone) {
        var updateEmployeeId = this.findEmployee(id);
        if (updateEmployeeId !== -1) {
            this.employees[updateEmployeeId].setName(name);
            this.employees[updateEmployeeId].setAddress(address);
            this.employees[updateEmployeeId].setAge(age);
            this.employees[updateEmployeeId].setEmail(email);
            this.employees[updateEmployeeId].setPhone(phone);
        }
        else {
            throw new Error('update fail');
        }
    };
    EmployeeManager.prototype.detailEmployee = function (id) {
        var result = this.employees.find(function (obj) { return obj.id == id; });
        return result;
    };
    return EmployeeManager;
}());
exports.EmployeeManager = EmployeeManager;
