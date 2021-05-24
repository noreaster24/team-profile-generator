const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const createPage = require('./lib/renderPage');

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

// prompt user with team questions for all roles
const questions = [
    {
        type: "input",
        name: "name",
        message: "What is your name?",
    },
    {
        type: "input",
        name: "id",
        message: "What is your employee ID?",
    },
    {
        type: "input",
        name: "email",
        message: "What is your employee email address?",
    },
    {
        type: "list",
        name: "role",
        message: "What is your role on the team?",
        choices: ["Manager", "Engineer", "Intern"],
    },
];

// prompt user with role-specific questions
const team = [];
const generateTeam = () => {
    inquirer
        .prompt(questions)
        .then((answers) => {
            inquirer
                .prompt([
                    {
                        when: () => answers.role === "Manager",
                        type: "input",
                        name: "officeNumber",
                        message: "What is their office number?",
                    },
                    {
                        when: () => answers.role === "Engineer",
                        type: "input",
                        name: "github",
                        message: "What is their GitHub username?"
                    },
                    {
                        when: () => answers.role === "Intern",
                        type: "input",
                        name: "school",
                        message: "Where did they go to school?",
                    },
                    {
                        type: "confirm",
                        name: "newMember",
                        message: "Would you like to add another team member?",
                    },
                ])
                .then((answers2) => {
                    if (answers.role === "Manager") {
                        const manager = new Manager(answers.name, answers.id, answers.email, answers.role, answers2.officeNumber);
                        team.push(manager);
                    };

                    if (answers.role === "Engineer") {
                        const engineer = new Engineer(answers.name, answers.id, answers.email, answers.role, answers2.github);
                        team.push(engineer);
                    };

                    if (answers.role === "Intern") {
                        const intern = new Intern(answers.name, answers.id, answers.email, answers.role, answers2.school);
                        team.push(intern);
                    }
                    if (answers2.addMember) {
                        generateTeam();
                    } else {
                        team.forEach((team) => {
                            console.log(team);
                        });
                        fs.writeFile(outputPath, createPage(team), (err) => {
                            if (err) {
                                throw err;
                            }
                            console.log("Success, team HTML is created!");
                        });
                    }
                });
        })
        .catch((err) => {
            if (err) {
                throw err;
            }
        });
};


generateTeam();