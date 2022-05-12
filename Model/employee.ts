export class Employee {
    id: number
    departmentID :number;
    name: string;

    age: number;
    address: string;
    email: string;
    phone: string

    constructor(id: number, departmentId:number, name: string, age: number, address: string, email: string, phone: string) {
        this.id = id;
        this.departmentID = departmentId
        this.name = name;
        this.age = age;
        this.address = address;
        this.email = email;
        this.phone = phone;
    }

    setName(name: string) {
        this.name = name;
    }

    setAge(age: number) {
        this.age = age;
    }

    setAddress(address: string) {
        this.address = address;
    }

    setEmail(email: string) {
        this.email = email;
    }

    setPhone(phone: string) {
        this.phone = phone;
    }
}
