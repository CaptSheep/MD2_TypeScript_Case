export declare class DepartmentManager {
    employees: object;
    departments: any;
    constructor();
    addDepartment(id: number, name: string, numberOfEmployee: number): void;
    findDepartment(id: number): number;
    employeeOfDepartment(): void;
    updateDepartment(id: number, name: string, numberOfEmployee: number): void;
    detailDepartment(id: number): object;
    deleteDepartment(id: number): void;
}
