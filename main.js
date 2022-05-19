"use strict";
exports.__esModule = true;
var employeeManager_1 = require("./Controller/employeeManager");
var departmentManager_1 = require("./Controller/departmentManager");
var employees = [];
var employeeManager = new employeeManager_1.EmployeeManager();
var departmentManager = new departmentManager_1.DepartmentManager();
// declare var $ :any ;
// declare const window: any;
//
// global.windowVar.$ = global.windowVar.jquery = require('./node_modules/jquery');
// global.windowVar.dt = require('./node_modules/datatables.net')();
// global.windowVar.$('#table').DataTable();
departmentManager.addDepartment(1, 'Dao tao', 10);
// departmentManager.addDepartment(2,'IT',20);
departmentManager.addDepartment(3, 'Tuyen sinh', 20);
departmentManager.updateDepartment(3, 'Ke toan', 10);
departmentManager.addDepartment(4, 'Hanh Chinh', 10);
// departmentManager.deleteDepartment(1);
employeeManager.addEmployee(1, 1, 'Long', 'Ha Noi', 23, 'long@gmail.com', '0123');
employeeManager.updateEmployee(1, 1, 'Jackie', 30, 'China', 'jackie@gmail.com', '123');
employeeManager.addEmployee(2, 1, 'Dat', 'Thai Binh', 18, 'dat@gmail.com', '0123');
employeeManager.addEmployee(3, 2, 'Minh', 'Noi', 22, 'minh@gmail.com', '0123');
employeeManager.deleteEmployee(2);
console.log(employeeManager);
// console.log(employeeManager.findEmployeeByDepartmentId(1));
// console.log(departmentManager)
// $(document).ready(function () {
//     // let data = '';
//     // employees.forEach((arr: any)=>{
//     //     data += `<tr>
//     //                 <td>
//     //                     ${arr.name}
//     //                 </td>
//     //                 <td>${arr.address}</td>
//     //                 <td>${arr.age}</td>
//     //                 <td>${arr.email}</td>
//     //                 <td>${arr.phone}</td>
//     //                 <td></td>
//     //                 <td>
//     //                     <div class="dropdown">
//     //                         <button class="btn btn-sm btn-icon" type="button" id="dropdownMenuButton2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
//     //                             <i class="bx bx-dots-horizontal-rounded" data-toggle="tooltip" data-placement="top"
//     //                                title="Actions"></i>
//     //                         </button>
//     //                         <div class="dropdown-menu" aria-labelledby="dropdownMenuButton2">
//     //                             <a class="dropdown-item" href="#"><i class="bx bxs-pencil mr-2"></i> Edit Profile</a>
//     //                             <a class="dropdown-item text-danger" href="#"><i class="bx bxs-trash mr-2"></i> Remove</a>
//     //                         </div>
//     //                     </div>
//     //                 </td>
//     //             </tr>`
//     // })
//     // $('#table-body').html(data);
//     $('#table').DataTable({
//         data : data,
//         column : [
//             {data :'name'},
//             {data :'address'},
//             {data :'age'},
//             {data :'email'},
//             {data :'phone'},
//         ]
//     });
// });
