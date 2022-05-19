import {Department} from "../Model/department";
import {Employee} from "../Model/employee";

export class DepartmentManager {
    public employees: any [] = [];
    public departments: any = [];

    constructor() {
    }

    addDepartment(id: number, name: string, numberOfEmployee: number,) {
        let check = false;
        this.departments.forEach((item : any)=>{
            if(item.id === id)
            {
                check = true
            }
        })
        if(check)
        {
            throw new Error('Can not Create Department')
        }
        else
        {
             let department: Department = new Department(id, name, numberOfEmployee)
        this.departments.push(department)
        }
    
    }
    findDepartment(id: number) {
        let i = -1;
        this.departments.forEach((departments: any, index: number) => {
            if (departments.id === id) {
                i = index
            }
        })
        return i;
    }

    updateDepartment(id: number, name: string, numberOfEmployee: number) {
        let departmentId = this.findDepartment(id);
        if (departmentId !== -1) {
            this.departments[departmentId].setName(name);
            this.departments[departmentId].setNumberOfEmployee(numberOfEmployee);
        }
    }

    detailDepartment(id: number) {
        const result: object = this.departments.find((obj: any) => obj.id == id)
        return result;
    }

    deleteDepartment(id: number) {
        let departmentId = this.findDepartment(id);
        if (departmentId !== -1) {
            this.employees.splice(departmentId, 1);
        } else {
            throw new Error('Delete fail')
        }
    }

}