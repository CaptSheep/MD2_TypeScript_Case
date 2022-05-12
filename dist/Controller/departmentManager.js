"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DepartmentManager = void 0;
var department_1 = require("../Model/department");
var DepartmentManager = (function () {
    function DepartmentManager() {
        this.departments = [];
    }
    DepartmentManager.prototype.addDepartment = function (id, name, numberOfEmployee) {
        var department = new department_1.Department(id, name, numberOfEmployee);
        this.departments.push(department);
    };
    DepartmentManager.prototype.findDepartment = function (id) {
        var _this = this;
        var i = -1;
        this.departments.forEach(function (departments, index) {
            if (_this.departments.id === id) {
                i = index;
            }
        });
        return i;
    };
    DepartmentManager.prototype.employeeOfDepartment = function () {
    };
    DepartmentManager.prototype.updateDepartment = function (id, name, numberOfEmployee) {
        var departmentId = this.findDepartment(id);
        if (departmentId !== -1) {
            this.departments[departmentId].setName(name);
            this.departments[departmentId].setNumberOfEmployee(numberOfEmployee);
        }
    };
    DepartmentManager.prototype.detailDepartment = function (id) {
        var result = this.departments.find(function (obj) { return obj.id == id; });
        return result;
    };
    DepartmentManager.prototype.deleteDepartment = function (id) {
        var departmentId = this.findDepartment(id);
        this.departments.splice(departmentId);
    };
    return DepartmentManager;
}());
exports.DepartmentManager = DepartmentManager;
//# sourceMappingURL=departmentManager.js.map