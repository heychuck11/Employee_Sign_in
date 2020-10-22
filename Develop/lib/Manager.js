// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require("./Employee")


class Manager extends Employee{
  constructor (officeNumber){
    super(name, id, email)
    this.officeNumber = officeNumber
    
  }
  getRole(){
    console.log("class")
  }
}

const charlie = new Manager("Charlie", 123, "email", 11 )
