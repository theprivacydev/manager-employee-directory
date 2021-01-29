const inquirer = require('inquirer');
const fs = require('fs');
const generateHTML = require('./src/generateHTML.js');
const Employee = require('./lib/employee');
const Engineer = require('./lib/engineer.js');
const Intern = require('./lib/intern.js');
const Manager = require('./lib/manager.js');

// Prompts user for which employee to add to start building team
const startQuestion = [
{
    type: 'list',
    message: 'Which employee would you like to add to build your team?',
    name: 'addEmployee',
    choices: [
        'Manager',
        'Engineer',
        'Intern',
        'I\'m done adding employees.',
    ],
}
]

// Prompts user for manager information if selected
const managerQuestions = [
    {
        type: 'input',
        message: 'What is the Manager\'s name?',
        name: 'name',
    },
    {
        type: 'number',
        message: 'What is the manager\'s employee id?',
        name: 'id',
    },
    {
        type: 'input',
        message: 'What is the manager\'s email address?',
        name: 'email',
    },
    {
        type: 'number',
        message: 'What is the managers office number?',
        name: 'officeNumber',
    },
]

// Prompts user for engineer information if selected
const engineerQuestions = [
    {
        type: 'input',
        message: 'What is the Engineer\'s name?',
        name: 'name',
    },
    {
        type: 'number',
        message: 'What is the Engineer\'s employee ID?',
        name: 'id',
    },
    {
        type: 'input',
        message: 'What is the Engineer\'s email?',
        name: 'email',
    },
    {
        type: 'input',
        message: 'What is the Engineer\'s GitHub username?',
        name: 'github',
    },
]

// Prompts user for intern information if selected
const internQuestions = [
    {
        type: 'input',
        message: 'What is the Intern\'s name?',
        name: 'name',
    },
    {
        type: 'number',
        message: 'What is the Intern\'s employee ID?',
        name: 'id',
    },
    {
        type: 'input',
        message: 'What is the Intern\'s email?',
        name: 'email',
    },
    {
        type: 'input',
        message: 'What is the Intern\'s school?',
        name: 'school',
    },
]

// Creates the html file and calls the function to start the questions
function initializeApp() {
    // Create the html fileName
    writeToFile('./dist/generatedHTML.html',  generateHTML());
    //Prompt inquirer questions
    promptUserForTeam();
}

// Calls the startQuestion inquirer prompt
function promptUserForTeam() {
    inquirer.prompt(startQuestion).then(handleResponse)
}

// Handles the users responses depending on which employee they selected to add
function handleResponse( response ) {
        switch( response.addEmployee ) {
            case 'Manager':
                inquirer.prompt( managerQuestions ).then( response => {
                    const newManager = new Manager( response.name, response.id, response.email, response.officeNumber );
                   fs.appendFileSync('./dist/generatedHTML.html', newManager.buildManagerHTML());
                   inquirer.prompt(startQuestion).then(handleResponse);
                });
                break;


            case 'Engineer':
                inquirer.prompt(engineerQuestions).then((response) => { 
                    const newEngineer = new Engineer( response.name, response.id, response.email, response.github );
                   fs.appendFileSync('./dist/generatedHTML.html', newEngineer.buildEngineerHTML());
                   inquirer.prompt(startQuestion).then(handleResponse);
                });
                break;
    
            case 'Intern':
                inquirer.prompt(internQuestions).then((response) => {
                    const newIntern = new Intern( response.name, response.id, response.email, response.school );
                    fs.appendFileSync('./dist/generatedHTML.html', newIntern.buildInternHTML());
                    inquirer.prompt(startQuestion).then(handleResponse);
                });
                break;
    
            case 'I\'m done adding employees.':
                fs.appendFileSync('./dist/generatedHTML.html', closeHTMLTags());
                console.log('Your team\'s info is save to the file! Check for the generatedHTML in the \'dist\' folder!')
                break;
    
            default:
                console.log('in default', response);
                const newManager = new Manager((response.name, response.id, response.email, response.officeNumber));
                fs.appendFileSync('./dist/generatedHTML.html', response.buildManagerHTML());
        }
}

// Adds the closing html tags to complete the document (called when the user chooses that they are done adding employees)
function closeHTMLTags () {
    return `    <!-- End row -->
                </div>
            <body>
            <html>`
}


// Writes HTML File
function writeToFile(fileName, data) {
    console.log(data); 
    fs.writeFile(fileName, data, err => {
        err ? console.error(err) 
        : console.log('Your HTML file has been generated! Please answer the following questions to populate it with your team\'s info!')
    });
}

initializeApp();