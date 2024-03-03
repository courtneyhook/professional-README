// TODO: Include packages needed for this application
//require fs and inquirer
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const fs = require("fs");

// TODO: Create a function to initialize app
function init() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is your GitHUb username?",
        name: "username",
      },
      {
        type: "input",
        message: "What is your email address?",
        name: "email",
      },
      {
        type: "input",
        message: "What is your project's name?",
        name: "projectName",
      },
      {
        type: "input",
        message: "Write a short description of your project.",
        name: "projectDescription",
      },
      {
        type: "list",
        message: "What kind of license should your project have?",
        name: "license",
        choices: ["MIT", "APACHE_2.0", "GPL_3.0", "BSD_3", "none"],
      },
      {
        type: "input",
        message: "What command should be run to install dependencies?",
        name: "dependencies",
        default: "npm i",
      },
      {
        type: "input",
        message: "What command should be run to run tests?",
        name: "tests",
        default: "npm test",
      },
      {
        type: "input",
        message: "What does the user need to know about using the repo?",
        name: "usage",
      },
      {
        type: "input",
        message:
          "What does the user need to know about contributing to the repo?",
        name: "contributing",
      },
      {
        type: "input",
        message:
          "List your collaborators, third-party assets, or tutorials you used for the project.",
        name: "credits",
      },
    ])
    .then((response) => {
      const readmeContent = generateMarkdown(response);
      fs.writeFile("README.md", readmeContent, (err) =>
        err ? console.error(err) : console.log("Success")
      );
    });
}

// Function call to initialize app
init();
