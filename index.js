// TODO: Include packages needed for this application
const fs = require("fs");
const path = require("path")
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
console.log();
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: "What is the title of your project?",
        name: 'title'
    },
    {
        type: 'list',
        message: "What license would you like to use?",
        name: 'license',
        choices: ['GNU', 'MIT', 'Apache', 'BSD']
    },
    {
        type: 'input',
        message: "Enter a description for the application.",
        name: 'description'
    },
    {
        type: 'input',
        message: "How is the application installed?",
        name: 'installation'
    },
    {
        type: 'input',
        message: "How is the application used?",
        name: 'usage'
    },
    {
        type: 'input',
        message: "How should someone contribute to the application?",
        name: 'contribution'
    },
    {
        type: 'input',
        message: "How should someone test the application?",
        name: 'tests'
    },
    {
        type: 'input',
        message: "What is your github username?",
        name: 'githubUser'
    },
    {
        type: 'input',
        message: "What is your email?",
        name: 'email'
    },
    {
        type: 'input',
        message: "what are some frequently asked questions?",
        name: 'questions'
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((data) => {
        fs.writeFileSync("./rendered/README.md", generateMarkdown(data), function (err) {
            if (err) throw err;
            console.log('File written.');
          });
    });
        
}

// Function call to initialize app
init();
