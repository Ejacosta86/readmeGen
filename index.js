// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require ("fs");
// const markdown = require("./utils/generateMarkdown");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
       },
       {
        type: 'input',
        name: 'description',
        message: 'Provide a description of your project:',
       },
       {
        type: 'input',
        name: 'install',
        message: 'Provide installtion instructions:',
       },
       {
        type: 'input',
        name:'usage',
        message:'Provide usage information:',
       },
       {
        type: 'input',
        name: 'contribution',
        message: 'list your collaborators. (If N/A, please enter none):',
       },
       {
        type: 'input',
        name: 'test',
        message: 'Provide instrustions for testing your project:',
       },
       {
        type: 'list',
        name: 'license',
        message:'Select license used for this project.',
        choices: ["MIT", "Apache 2.0", "Boost"],
       },
       {
        type: 'input',
        name: 'username',
        message: 'Whats your GitHub username?',
       },
       {
        type: 'input',
        name: 'email',
        message: 'What is your email address?'
       }, 
   
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, () => {
        console.log(`File ${fileName} was saved with data!`)
    });
}

// TODO: Create a function to initialize app
function init() {
    console.log(
        "README Generator!\nPlease answer the following questions..\n"
    );

    inquirer.prompt(questions).then((response) => {
        const markdownText = generateMarkdown(response)
        writeToFile("READMEtemp.md", markdownText);
        });
    }

// Function call to initialize app
init();

