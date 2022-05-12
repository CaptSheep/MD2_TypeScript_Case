"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var employeeManager_1 = require("./Controller/employeeManager");
var departmentManager_1 = require("./Controller/departmentManager");
var jquery_1 = require("jquery");
var employees = [];
var employeeManager = new employeeManager_1.EmployeeManager();
var departmentManager = new departmentManager_1.DepartmentManager();
window.$ = window.jquery = require('./node_modules/jquery');
window.dt = require('./node_modules/datatables.net')();
window.$('#table').DataTable();
departmentManager.addDepartment(1, 'Dao tao', 10);
employeeManager.addEmployee(1, 'Tuan', 'Ha Noi', 24, 'tuan@gmail.com', '01234');
employeeManager.addEmployee(2, 'Minh', 'Ha Noi', 27, 'minh@gmail.com', '01234');
employeeManager.updateEmployee(2, 'Dat', 18, 'HaNoi', 'dat@gmail.com', '0123');
console.log(employeeManager);
console.log(departmentManager);
$(document).ready(function () {
    $('#table').DataTable({
        data: jquery_1.data,
        column: [
            { data: 'name' },
            { data: 'address' },
            { data: 'age' },
            { data: 'email' },
            { data: 'phone' },
        ]
    });
});
//# sourceMappingURL=main.js.map