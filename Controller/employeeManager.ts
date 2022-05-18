import {Employee} from "../Model/employee";

export class EmployeeManager {
    public employees: any = [];

    constructor() {
    }

    addEmployee(employeeId: number, departmentId:number , name: string, address: string, age: number, email: string, phone: string) {
   
        let check = false;
        this.employees.forEach((item:any)=>{
           if(item.id == employeeId){
               check = true;
           }
        })

         if (check) {
           throw new Error("Cant Create Employee");
         } else {
           let employee: Employee = new Employee(
             employeeId,
             departmentId,
             name,
             age,
             address,
             email,
             phone
           );
           this.employees.push(employee);
         }

    }

    findEmployee(id: number) {

        let i = -1;
        this.employees.forEach((employees: any, index: number) => {
            if (employees.id == id) {
                i = index
            }
        })
        return i;
    }
    findEmployeeByDepartmentId(id:number)
    {
        let arr :any = [];
        this.employees.forEach((employee:any )=>{
            if(employee.departmentID === id)
            {
                arr.push(employee)
            }
        });
        return arr
    }

    deleteEmployee(id: number) {
        let deleteEmployeeId = this.findEmployee(id);
        if (deleteEmployeeId !== -1) {
            this.employees.splice(deleteEmployeeId, 1);
        } else {
            throw new Error('Delete fail')
        }

    }

    updateEmployee(id: number, departmentId:number , name: string, age: number, address: string, email: string, phone: string) {
        let updateEmployeeId = this.findEmployee(id)

        console.log(updateEmployeeId);
        
        if (updateEmployeeId !== -1) {
            this.employees[updateEmployeeId].setName(name);
            this.employees[updateEmployeeId].setDepartment(departmentId)
            this.employees[updateEmployeeId].setAddress(address);
            this.employees[updateEmployeeId].setAge(age);
            this.employees[updateEmployeeId].setEmail(email);
            this.employees[updateEmployeeId].setPhone(phone);
        } else {
            throw new Error('update fail');
        }
    }

    detailEmployee(id: number) {
        const result: object = this.employees.find((obj: any) => obj.id == id)
        return result;
    }
}