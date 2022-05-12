export  class Department
{
    id : number;
    name :string;
    numberOfEmployee : number;
    constructor(id:number, name : string, numberOfEmployee : number) {
        this.id = id;
        this.name = name;
        this.numberOfEmployee = numberOfEmployee
    }
    setName(name : string)
    {
        this.name = name
    }
    setNumberOfEmployee(numberOfEmployee : number)
    {
        this.numberOfEmployee = numberOfEmployee;
    }
}
