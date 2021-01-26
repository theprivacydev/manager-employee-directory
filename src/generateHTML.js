const fs = require('fs');
const Employee = require('../lib/employee.js');
const Engineer = require('../lib/engineer.js');
const Intern = require('../lib/intern.js');
const Manager = require('../lib/manager.js');





function generateHTML (data) {
    console.log('we are in generatehtml:', data);
    const newManager = new Manager(data.managerName, data.managerId, data.managerEmail, 'Manager', data.officeNumber);
    const newEngineer = new Engineer(data.engineerName, data.engineerid, data.engineerEmail, 'Engineer', data.engineerGithub);
    const newIntern = new Intern(data.internName, data.internId, data.internEmail, 'Intern', data.internSchool)
}





module.exports = generateHTML;