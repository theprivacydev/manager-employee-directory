const inquirer = require('inquirer');
const fs = require('fs');

const questions = [
    {
        type: 'input',
        message: 'What is your user name?',
        name: 'username',
    },
    {
        type: 'input',
        message: 'What is your user name?',
        name: 'username',
    },
    {
        type: 'input',
        message: 'What is your user name?',
        name: 'username',
    },
    {
        type: 'input',
        message: 'What is your user name?',
        name: 'username',
    },
]

inquirer.prompt(questions).then((response) => {
    console.log(response);
});