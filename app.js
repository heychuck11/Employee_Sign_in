const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");


let teamMembers= []
let idArr = []

function startQuest(){
  function employeeType(){
    console.log(teamMembers)
    inquirer.prompt({
      type: "list",
      message: "What type of employee would you like to add?",
      name: "empType",
      choices: ["manager", "engineer", "intern", "done"]
    })
    .then(res => {
      console.log(res)
      switch(res.empType){
        case "manager":
          managerQuest()
          break;
          case "engineer":
            engineerQuest()
            break;
            case "intern":
              internQuest()
              break;
              case "done":
              done()
              break;
      }
    })
  }
  function managerQuest(){
    inquirer.prompt([
      {
        type: "input",
        message: "What is the manager's name?",
        name: "managerName"
      },
      {
        type: "input",
        message: "what is your manager id number?",
        name: "managerId"
      },
      {
        type: "input",
        message: "What is your email?",
        name: "managerEmail"

      },
      {
        type: "input",
        message:"What is your office number?",
        name:"managerOffice"
      }
    ])
    .then(res =>{
      console.log(res)
      const manager = new Manager(res.managerName, res.managerId, res.managerEmail, res.managerOffice)
      teamMembers.push(manager)
      idArr.push(res.managerId)
      employeeType()
    })
  }
  function engineerQuest(){
    inquirer.prompt([
      {
        type: "input",
        message: "What is the engineer's name?",
        name: "engineerName"
      },
      {
        type: "input",
        message: "what is your engineer id number?",
        name: "engineerId"
      },
      {
        type: "input",
        message: "What is your email?",
        name: "engineerEmail"

      },
      {
        type: "input",
        message:"What is your github username?",
        name:"engineerUserName"
      }
    ])
    .then(res =>{
      console.log(res)
      const engineer = new Engineer(res.engineerName, res.engineerId, res.engineerEmail, res.engineerUserName)
      teamMembers.push(engineer)
      idArr.push(res.engineerId)
      employeeType()
    })
  }
  function internQuest(){
    inquirer.prompt([
      {
        type: "input",
        message: "What is the intern's name?",
        name: "internName"
      },
      {
        type: "input",
        message: "what is your intern id number?",
        name: "internId"
      },
      {
        type: "input",
        message: "What is your email?",
        name: "internEmail"

      },
      {
        type: "input",
        message:"What is the name of your school?",
        name:"internSchool"
      }
    ])
    .then(res =>{
      console.log(res)
      const intern = new Intern(res.internName, res.internId, res.internEmail, res.internSchool)
      teamMembers.push(intern)
      idArr.push(res.internId)
      employeeType()
    })
  }
  function done(){
    if(!fs.existsSync(OUTPUT_DIR)){
      fs.mkdirSync(OUTPUT_DIR)
    }
    fs.writeFileSync(outputPath, render(teamMembers), "utf-8")
  }
  employeeType()

}
startQuest()




// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
