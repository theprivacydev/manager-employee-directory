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



// function createEmployeeCards (data) {

//     console.log('we are in generatehtml:', data);
//     const newManager = new Manager(data.managerName, data.managerId, data.managerEmail, data.officeNumber);
//     const newEngineer = new Engineer(data.engineerName, data.engineerId, data.engineerEmail, data.github);
//     const newIntern = new Intern(data.internName, data.internId, data.internEmail, data.internSchool);
    
//     const team = []
//     const managerCard = 
//         `<div class="col">
//             <div class="card manager" id="manager-card" style="width: 18rem;">
//                 <div class="card-body">
//                     <!-- Name Appends here -->
//                 <h5 class="card-title">${newManager.getName()}</h5> 
//                 <h6 class="card-subtitle mb-2 text-muted">Manager</h6>
//                 <ul class="list-group list-group-flush">
//                     <li class="list-group-item" id="manager-id">ID: ${newManager.getId()}</li>
//                     <li class="list-group-item" id="manager-email">Email: ${newManager.getEmail()}</li>
//                     <li class="list-group-item" id="manager-officeNumber">Office Number: ${newManager.getOfficeNumber()}</li>
//                 </ul>
//                 </div>
//             </div>
//         <!-- End column -->
//         </div>`

//     const engineerCard = 
//             `<div class="col">
//                 <div class="card engineer" id="engineer-card" style="width: 18rem;">
//                     <div class="card-body">
//                         <!-- Name appends here -->
//                     <h5 class="card-title">${newEngineer.getName()}</h5> 
//                     <h6 class="card-subtitle mb-2 text-muted">Engineer</h6>
//                     <ul class="list-group list-group-flush">
//                         <li class="list-group-item" id="manager-id">ID: ${newEngineer.getId()}</li>
//                         <li class="list-group-item" id="manager-email">Email: ${newEngineer.getEmail()}</li>
//                         <li class="list-group-item" id="manager-officeNumber">Github: ${newEngineer.getGithub()}</li>
//                     </ul>
//                     </div>
//                 </div>
//             <!-- End column -->
//             </div>`

//     const internCard = 
//         `<div class="col">
//             <div class="card engineer" id="engineer-card" style="width: 18rem;">
//                 <div class="card-body">
//                     <!-- Name appends here -->
//                 <h5 class="card-title">${newIntern.getName()}</h5> 
//                 <h6 class="card-subtitle mb-2 text-muted">intern</h6>
//                 <ul class="list-group list-group-flush">
//                     <li class="list-group-item" id="manager-id">ID: ${newIntern.getId()}</li>
//                     <li class="list-group-item" id="manager-email">Email: ${newIntern.getEmail()}</li>
//                     <li class="list-group-item" id="manager-officeNumber">School: ${newIntern.getSchool()}</li>
//                 </ul>
//                 </div>
//             </div>
//         <!-- End column -->
//         </div>`
// }

module.exports = generateHTML;