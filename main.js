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
employeeManager.addEmployee(1, 1, 'Tuan', 'Ha Noi', 24, 'tuan@gmail.com', '01234');
employeeManager.addEmployee(2, 2, 'Minh', 'Ha Noi', 27, 'minh@gmail.com', '01234');
employeeManager.updateEmployee(2, 'Dat', 18, 'HaNoi', 'dat@gmail.com', '0123');
console.log(employeeManager);
console.log(employeeManager.findEmployeeByDepartmentId(2));
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
