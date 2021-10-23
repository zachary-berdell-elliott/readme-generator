// TODO: Include packages needed for this application
fs = require("fs");
inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = ["What is the title of your project?", "What license would you like to use?", "Enter a description for the application.", "How is the application installed?", "How is the application used?", "How should someone contribute to the application?", "How should someone test the application?"];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt([
        {
            type: 'input',
            message: questions[0],
            name: 'title'
        },
        {
            type: 'list',
            message: questions[1],
            name: 'license',
            choices: ['GNU', 'MIT', 'Apache', 'BSD']
        },
        {
            type: 'input',
            message: questions[2],
            name: 'description'
        },
        {
            type: 'input',
            message: questions[3],
            name: 'installation'
        },
        {
            type: 'input',
            message: questions[4],
            name: 'use'
        },
        {
            type: 'input',
            message: questions[5],
            name: 'contribution'
        },
        {
            type: 'input',
            message: questions[6],
            name: 'testing'
        }
    ]);
        
}

// Function call to initialize app
init();
