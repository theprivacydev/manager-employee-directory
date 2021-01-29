const fs = require('fs');
const Employee = require('../lib/employee.js');
const Engineer = require('../lib/engineer.js');
const Intern = require('../lib/intern.js');
const Manager = require('../lib/manager.js');

function generateHTML () {

    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Employee Directory</title>
        <!-- Bootstrap CDN -->
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" crossorigin="anonymous">
        <!-- Style.css -->
        <link rel="stylesheet" href="style.css">
    </head>
    <body>
        <header class="hero">
            <h1 class="employeeDirTitle">Employee Directory</h1>
        </header>
    
        <div class="row" >`
}




module.exports = generateHTML;