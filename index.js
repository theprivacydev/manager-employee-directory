const inquirer = require('inquirer');
const fs = require('fs');
const generateHTML = require('./src/generateHTML');

const questions = [
    {
        type: 'input',
        message: 'Hello! Please enter the Team Manager\'s name to begin!',
        name: 'managerName',
    },
    {
        type: 'input',
        message: 'What is the manager\'s employee id?',
        name: 'managerId',
    },
    {
        type: 'input',
        message: 'What is the manager\'s email address?',
        name: 'managerEmail',
    },
    {
        type: 'input',
        message: 'What is the managers office number?',
        name: 'officeNumber',
    },
    {
        type: 'list',
        message: 'Which employee would you like to add to finish building your team?',
        name: 'addEmployee',
        choices: [
            'Engineer',
            'Intern',
            'I\'m done adding employees.',
        ],
    },
]

const engineerQuestions = [
    {
        type: 'input',
        message: 'What is the Engineer\'s name?',
        name: 'engineerName',
    },
    {
        type: 'input',
        message: 'What is the Engineer\'s employee ID?',
        name: 'engineerId',
    },
    {
        type: 'input',
        message: 'What is the Engineer\'s email?',
        name: 'engineerEmail',
    },
    {
        type: 'input',
        message: 'What is the Engineer\'s GitHub username?',
        name: 'engineerGithub',
    },
]


const internQuestions = [
    {
        type: 'input',
        message: 'What is the Intern\'s name?',
        name: 'internName',
    },
    {
        type: 'input',
        message: 'What is the Intern\'s employee ID?',
        name: 'internId',
    },
    {
        type: 'input',
        message: 'What is the Intern\'s email?',
        name: 'internEmail',
    },
    {
        type: 'input',
        message: 'What is the Intern\'s school?',
        name: 'internSchool',
    },
]



inquirer.prompt(questions).then((response) => {
    console.log(response);
    switch (response) {
        case (response.addEmployee === 'Engineer'):
            inquirer.prompt(engineerQuestions);
            break;

        case (response.addEmployee === 'Intern'):
            inquirer.prompt(internQuestions);
            break;

        case (response.addEmployee === 'I\'m done adding employees.'):
            generateHTML
            break;

        default:
            generateHTML
    }
});