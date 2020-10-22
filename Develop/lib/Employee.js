// TODO: Write code to define and export the Employee class
class Employee{
  constructor(name, id, email){
    this.name = name
    this.id = id
    this.email = email
   
    
  }

  getName() {
    console.log(`Your name is ${this.name}.`)
  }
  getId(){
    console.log(`your id number is ${this.id}`)
  }
  getEmail(){
    console.log(`your email is ${this.email}`)

  }

  getRole(){
    console.log()
  }
}

module.exports = Employee
