export declare class EmployeeManager {
    employees: any;
    constructor();
    addEmployee(id: number, name: string, address: string, age: number, email: string, phone: string): void;
    findEmployee(id: number): number;
    deleteEmployee(id: number): void;
    updateEmployee(id: number, name: string, age: number, address: string, email: string, phone: string): void;
    detailEmployee(id: number): object;
}
