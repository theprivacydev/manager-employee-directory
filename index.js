const inquirer = require('inquirer');
const fs = require('fs');
const generateHTML = require('./src/generateHTML.js');
const Employee = require('./lib/employee');
const Engineer = require('./lib/engineer.js');
const Intern = require('./lib/intern.js');
const Manager = require('./lib/manager.js');



const startQuestions = [
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
        name: 'github',
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



inquirer.prompt(startQuestions).then((response) => {
    // console.log('we are in inquirer prompt response:', response);

    switch (response.addEmployee) {
        case 'Engineer':
            console.log('in engineer', response);
            inquirer.prompt(engineerQuestions).then((response) => { 
                writeToFile('./dist/index.html',  generateHTML({...response}));
            });
            break;

        case 'Intern':
            inquirer.prompt(internQuestions).then((response) => { 
                writeToFile('./dist/index.html',  generateHTML({...response}));
            });
            break;

        case 'I\'m done adding employees.':
            writeToFile('./dist/index.html',  generateHTML({...response}));
            break;

        default:
            console.log('in default', response);
            writeToFile('./dist/index.html',  generateHTML({...response}));
    }
});


function writeToFile(fileName, data) {
    console.log(data); 
    fs.writeFile(fileName, data, err => {
        err ? console.error(err) 
        : console.log('Success! File has been generated!')
    });
}