// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require ("fs");
const markdown = require("./utils/generateMarkdown");
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
        message: 'Provide a description of your project.',
       },
       {
        type: 'input',
        name: 'install',
        message: 'Provide installtion instructions',
       },
       {
        type: 'input',
        name:'usage',
        message:'Provide usage information',
       },
       {
        type: 'input',
        name: 'contribution',
        message: 'list your collaborators. If none, please enter N/A.',
       },
       {
        type: 'input',
        name: 'test',
        message: 'Provide instrustions for testing your project',
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
    fs.writeFile(fileName, data, (error) => error ? console.error(error) : console.log('Writing File'))
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((response) => {
        const markdownText = generateMarkdown(response)
        writeToFile("README.md", markdownText)
            console.log("The file has been created!")
        });
    }

// Function call to initialize app
init();

//need to get the badges to show for lic
//need to get the email to show in the section needed
//github need to show in section needed with link
//check the link of Table of cont.