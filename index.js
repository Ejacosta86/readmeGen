const inquirer = require("inquirer");
const fs = require ("fs");


// TODO: Include packages needed for this application
inquirer
.prompt([
   {
    type: 'input',
    name: 'title',
    message: 'What is the title of your project?',
   },
   {
    type: 'input',
    name: 'description',
    message: 'type description of your project',
   },
   {
    type: 'input',
    name: 'installation',
    message: 'eneter installtion instructions',
   },
   {
    type: 'input',
    name:'usage',
    message:'What will this project use for?',
   },
   {
    type: 'input',
    name: 'credits',
    message: 'list your collaborators?',
   },
   {
    type: 'input',
    name: 'test',
    message: 'Does this project include test?',
   },
//    {
//     type: 'list',
//     name: 'license',
//     message:'License used for this project?',
//     choices:
//    } 
//make sure you listen to paula and finish this part!
])
.then((answers) => {
    console.log("I suck");
})
// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (error) => error ? console.error(error) : console.log('Writing File'))
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((inquirerResponse) => {
        const CreateMarkdown = `# ${response.title}
        
        #Description
        ${response.description}
        #Table of Contents
        1. [Installation](#installation)
        2. [Usage](#usage)
        3. [Credits](#credits)
        4. [License](#license)

        ## Installation <a name="installation"></a>
        ${response.installation}
        ## Usage < a name="usage"></a>
        ${response.usage}
        ## Credits <a name="credits'></a>
        ${response.credits} 
        ## License <a name="license"></a>
        ${response.license}`;


        fs.writeFile("generatedReadMe.md", createMarkdown, (err) => {
            if (err) throw err;
            console.log("The file has been created!")
        });
    });
}

// Function call to initialize app
init();

