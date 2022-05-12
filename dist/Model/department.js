"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Department = void 0;
var Department = (function () {
    function Department(id, name, numberOfEmployee) {
        this.id = id;
        this.name = name;
        this.numberOfEmployee = numberOfEmployee;
    }
    Department.prototype.setName = function (name) {
        this.name = name;
    };
    Department.prototype.setNumberOfEmployee = function (numberOfEmployee) {
        this.numberOfEmployee = numberOfEmployee;
    };
    return Department;
}());
exports.Department = Department;
//# sourceMappingURL=department.js.map