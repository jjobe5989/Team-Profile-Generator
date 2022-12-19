const inquirer = require("inquirer");
const fs = require("fs");

// Profiles
const manager = require("./lib/manager");
const engineer = require("./lib/engineer");
const intern = require("./lib/intern");

// html generator
const genHtml = require("");

// team
const teamArray = [];

// add manager
const addManager = ()=>{
    return inquirer.createPromptModule([
        {
            type:"input",
            name:"name",
            message:"Enter Managers Name:",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log ('Enter Managers Name:');
                    return false;
                }
            }
        },
        {
            type:"input",
            name:"id",
            message:"Enter Managers ID:",
            validate: nameInput => {
                if (isNaN(nameInput)) {
                    console.log ('Enter Managers ID')
                    return false;
                } else {
                    return true;
                }
            }
        },
        {
            type:"input",
            name:"email",
            message:"Enter Managers Email:",
            validate: nameInput => {
                if (isNaN(nameInput)) {
                    console.log ('Enter Managers Email:')
                    return false;
                } else {
                    return true;
                }
            }
        },
        {
            type:"input",
            name:"officeNumber",
            message:"Enter office number:",
            validate: nameInput => {
                if (isNaN(nameInput)) {
                    console.log ('Enter office number:')
                    return false;
                } else {
                    return true;
                }
            }
        },
    ])
    .then(managerInput => {
        const { name, id, email, officeNumber } = managerInput;
        const manager = new Manager (name, id, email, officeNumber);

        teamArray.push(manager);
        console.log(manager);
    })
};

const addEmployee = () => {
    console.log(`
    = = = = = = = = = = = =
    Welcoming New Employee
    = = = = = = = = = = = =
    `);

    return inquirer.prompt ([
        {
            type: 'list',
            name: 'role',
            message: "Please choose your employee's role",
            choices: ['Engineer', 'Intern']
        },
        {
            type:"input",
            name:"name",
            message:"Enter Employee's name:",
            validate: nameInput => {
                if (isNaN(nameInput)) {
                    console.log ('Please Enter The Name of Your Employee:')
                    return false;
                } else {
                    return true;
                }
            }
        },
        {
            type:"input",
            name:"id",
            message:"Enter Employee's ID:",
            validate: nameInput => {
                if (isNaN(nameInput)) {
                    console.log ('Please Enter The Employees ID:')
                    return false;
                } else {
                    return true;
                }
            }
        },
        {
            type:"input",
            name:"email",
            message:"Enter Employee's Email:",
            validate: nameInput => {
                if (isNaN(nameInput)) {
                    console.log ('Please Enter Employees Email')
                    return false;
                } else {
                    return true;
                }
            }
        },
        {
            type:"input",
            name:"github",
            message:"Enter Employee's GitHub Username:",
            validate: nameInput => {
                if (isNaN(nameInput)) {
                    console.log ('Please Enter Employees GitHub Username:')
                    return false;
                } else {
                    return true;
                }
            }
        },
        {
            type:"input",
            name:"school",
            message:"Enter Employee's School:",
            validate: nameInput => {
                if (isNaN(nameInput)) {
                    console.log ('Please Enter The Name of Your Employee School:')
                    return false;
                } else {
                    return true;
                }
            }
        },
        {
        type: 'confirm',
        name: 'confirmEmployee',
        message: 'Would you like to add another employee?',
        default: false
        }
    ])
    .then(employeeData => {
        // data for employees 

        let { name, id, email, role, github, school, confirmEmployee } = employeeData; 
        let employee; 

        if (role === "Engineer") {
            employee = new Engineer (name, id, email, github);

            console.log(employee);

        } else if (role === "Intern") {
            employee = new Intern (name, id, email, school);

            console.log(employee);
        }

        teamArray.push(employee); 

        if (confirmEmployee) {
            return addEmployee(teamArray); 
        } else {
            return teamArray;
        }
    })

};

const writeFile = data => {
    fs.writeFile('./dist/index.html', data, err => {
        // if there is an error 
        if (err) {
            console.log(err);
            return;
        // when the profile has been created 
        } else {
            console.log("Your team profile has been successfully created! Please check out the index.html")
        }
    })
}; 

const writeFile = data => {
    fs.writeFile('./dist/index.html', data, err => { 
        if (err) {
            console.log(err);
            return; 
        } else {
            console.log("Your team profile has been successfully created! Please check out the index.html")
        }
    })
}; 

addManager()
  .then(addEmployee)
  .then(teamArray => {
    return generateHTML(teamArray);
  })
  .then(pageHTML => {
    return writeFile(pageHTML);
  })
  .catch(err => {
 console.log(err);
  });
