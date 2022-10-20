//Creating a const for inquirer and fs and using the require function to have them within my script. 
//Attaching the path for the generateMarkdown.js in order to send information that way once the questions are answered. 
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
//The const of questions includes all of the questions that will be asked by the terminal to the user in order to generate the README

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

//This function uses the data that the user has inputed and creates a README file. 
function writeToFile(fileName, data) {

    fs.writeFile(`./assets/${fileName}`, data, (err) =>
        err ? console.log(err) : console.log('Success!')
    );

}


// This function sends the information to the generateMarkdown.js in order to write it in the proper format of a README file. 
function init() {
    inquirer
        .prompt(questions)
        .then((data) => {
            const fileName = `README.md`
            const markdownContent = generateMarkdown(data);
            writeToFile(fileName, markdownContent);
        }
        )
}

init();
