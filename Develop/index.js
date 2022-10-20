// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown= require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input

const questions = [
    {
        type: 'input',
        name: 'github',
        message: 'What is your gitHub username?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
    },
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?'

    },
    {
        type: 'input',
        name: 'description',
        message: 'Write a short description of your project',
    },
    {
        type: 'list',
        name: 'license',
        message: 'What kind of license does your project need?',
        choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None'],
    },
    {
        type: 'input',
        name: 'dependencies',
        message: 'What command should be run to install dependencies?',
        default: 'npm i',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'What command should be run to run tests?',
        default: 'npm test',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What does the user need to know about using this repo?',
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'What does the user need to know about contributing to this repo?'


    }

]

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

    fs.writeFile(`./assets/${fileName}`, data, (err) =>
        err ? console.log(err) : console.log('Success!')
    );

}


// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((data) => {
            console.log(data);
            const fileName= `README.md`
            const markdownContent= generateMarkdown(data);
            writeToFile(fileName, markdownContent);
        }
        )
}

// Function call to initialize app
init();
