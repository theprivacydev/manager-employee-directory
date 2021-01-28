const inquirer = require('inquirer');
const fs = require('fs');
const generateHTML = require('./src/generateHTML.js');
const Employee = require('./lib/employee');
const Engineer = require('./lib/engineer.js');
const Intern = require('./lib/intern.js');
const Manager = require('./lib/manager.js');

// const userTeam = [];

// Prompts user for manager info to begin building team
const startQuestions = [
    {
        type: 'input',
        message: 'Hello! Please enter the Team Manager\'s name to begin building your team!',
        name: 'managerName',
    },
    {
        type: 'number',
        message: 'What is the manager\'s employee id?',
        name: 'managerId',
    },
    {
        type: 'input',
        message: 'What is the manager\'s email address?',
        name: 'managerEmail',
    },
    {
        type: 'number',
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
            'Manager',
            'I\'m done adding employees.',
        ],
    }
]

// Prompts user for engineer information if selected
const engineerQuestions = [
    {
        type: 'input',
        message: 'What is the Engineer\'s name?',
        name: 'engineerName',
    },
    {
        type: 'number',
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
]

// Prompts user for intern info if selected
const internQuestions = [
    {
        type: 'input',
        message: 'What is the Intern\'s name?',
        name: 'internName',
    },
    {
        type: 'number',
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


function initializeApp() {
    // Create the html fileName
    writeToFile('./dist/generatedHTML.html',  generateHTML());
    //Prompt inquirer questions
    promptUserForTeam();
}

function promptUserForTeam() {
    inquirer.prompt(startQuestions).then(handleResponse)
}

function handleResponse (response) {
        console.log('we are in inquirer prompt response:', response);
    
        switch (response.addEmployee) {
            case 'Engineer':
                console.log('in engineer', response);
                inquirer.prompt(engineerQuestions).then((response) => { 
                    const newEngineer = new Engineer((response.name, response.id, response.email, response.github));
                    console.log(newEngineer);
                   fs.appendFileSync('./dist/generatedHTML.html', newEngineer.buildEngineerHTML());
                   inquirer.prompt(startQuestions.addEmployee);
                });
                break;
    
            case 'Intern':
                inquirer.prompt(internQuestions).then((response) => {
                    const newIntern = new Intern((response.name, response.id, response.email, response.school));
                    fs.appendFileSync('./dist/generatedHTML.html', newIntern.buildInternHTML());
                    inquirer.prompt(startQuestions.addEmployee);
                });
                break;
    
            case 'I\'m done adding employees.':
                fs.appendFileSync('./dist/generatedHTML.html', closeHTMLTags());
                break;
    
            default:
                console.log('in default', response);
                const newManager = new Manager((response.name, response.id, response.email, response.officeNumber));
                fs.appendFileSync('./dist/generatedHTML.html', response.buildManagerHTML());
        }
}


function closeHTMLTags () {
    return `    <!-- End row -->
                </div>
            <body>
            <html>`
}



function writeToFile(fileName, data) {
    console.log(data); 
    fs.writeFile(fileName, data, err => {
        err ? console.error(err) 
        : console.log('Success! File has been generated!')
    });
}

initializeApp();