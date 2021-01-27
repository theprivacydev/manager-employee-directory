const fs = require('fs');
const Employee = require('../lib/employee.js');
const Engineer = require('../lib/engineer.js');
const Intern = require('../lib/intern.js');
const Manager = require('../lib/manager.js');

function generateHTML (data) {
    console.log('we are in generatehtml:', data);
    const newManager = new Manager(data.managerName, data.managerId, data.managerEmail, data.officeNumber);
    const newEngineer = new Engineer(data.engineerName, data.engineerId, data.engineerEmail, data.github);
    const newIntern = new Intern(data.internName, data.internId, data.internEmail, 'Intern', data.internSchool)

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
    
        <div class="row" >
            <div class="col">
                <div class="card manager" id="manager-card" style="width: 18rem;">
                    <div class="card-body">
                        <!-- Name Appends here -->
                    <h5 class="card-title">${newManager.name}</h5> 
                    <h6 class="card-subtitle mb-2 text-muted">Manager</h6>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item" id="manager-id">ID: ${newManager.id}</li>
                        <li class="list-group-item" id="manager-email">Email: ${newManager.email}</li>
                        <li class="list-group-item" id="manager-officeNumber">Office Number: ${newManager.officeNumber}</li>
                      </ul>
                    </div>
                </div>
            <!-- End column -->
            </div>

        ${createEngineerCard(newEngineer.name, newEngineer.id, newEngineer.email, newEngineer.github)}
        ${createInternCard(newIntern.name, newIntern.id, newIntern.email, newIntern.school)}


        <!-- End row -->
        </div>
    
    
    
    
        <!-- jQuery CDN -->
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
        <!-- jQuery for bootstrap cdn -->
        <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.5.4/dist/umd/popper.min.js" integrity="sha384-q2kxQ16AaE6UbzuKqyBE9/u/KzioAlnx2maXQHiDX9d4/zp8Ok3f+M7DPm+Ib6IU" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.min.js" integrity="sha384-pQQkAEnwaBkjpqZ8RU1fF1AKtTcHJwFl3pblpTlHXybJjHpMYo79HY3hIi4NKxyj" crossorigin="anonymous"></script>
    
    </body>
    </html>`
}


function createEngineerCard (name, id, email, github) {
    return `<div class="col">
    <div class="card engineer" id="engineer-card" style="width: 18rem;">
        <div class="card-body">
            <!-- Name appends here -->
        <h5 class="card-title">${name}</h5> 
        <h6 class="card-subtitle mb-2 text-muted">Engineer</h6>
        <ul class="list-group list-group-flush">
            <li class="list-group-item" id="manager-id">ID: ${id}</li>
            <li class="list-group-item" id="manager-email">Email: ${email}</li>
            <li class="list-group-item" id="manager-officeNumber">Github: ${github}</li>
          </ul>
        </div>
    </div>
<!-- End column -->
</div>`
}


function createInternCard (name, id, email, school) {
    return `<div class="col">
    <div class="card engineer" id="engineer-card" style="width: 18rem;">
        <div class="card-body">
            <!-- Name appends here -->
        <h5 class="card-title">${name}</h5> 
        <h6 class="card-subtitle mb-2 text-muted">intern</h6>
        <ul class="list-group list-group-flush">
            <li class="list-group-item" id="manager-id">ID: ${id}</li>
            <li class="list-group-item" id="manager-email">Email: ${email}</li>
            <li class="list-group-item" id="manager-officeNumber">School: ${school}</li>
          </ul>
        </div>
    </div>
<!-- End column -->
</div>`
}

module.exports = generateHTML;