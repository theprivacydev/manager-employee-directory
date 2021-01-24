const inquirer = require('inquirer');
const fs = require('fs');

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
        ],
    },
]

inquirer.prompt(questions).then((response) => {
    console.log(response);
});