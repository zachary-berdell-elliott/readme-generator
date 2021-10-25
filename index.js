// TODO: Include packages needed for this application
fs = require("fs");
inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

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
        name: 'use'
    },
    {
        type: 'input',
        message: "How should someone contribute to the application?",
        name: 'contribution'
    },
    {
        type: 'input',
        message: "How should someone test the application?",
        name: 'testing'
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateMarkdown, function (err) {
        if (err) throw err;
        console.log('File written.');
      }); 
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((data) => {
        writeToFile("./README.md", data);
    });
        
}

// Function call to initialize app
init();
