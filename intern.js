// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require("./employee")

class Intern extends Employee{
  constructor(school){
    super(name, id, email)
    this.school = school
  }
  getSchool(){
    console.log("RIT")
  }
}
printInfo(){
  
}

const jeffrey = new Intern("Jeffrey", 789, "email", school)
jeffrey.printInfo()


