// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee")

class Engineer extends Employee{
  constructor(githubUsername){
    super(name, id, email)
    this.githubUsername = githubUsername
  }
  getRole(){

  }
}

const tori = new Engineer("Tori", 456, "email", "toriGithub")