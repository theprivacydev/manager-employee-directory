const Employee = require('employee.js');

function Intern (name, id, role) {
    this.role = role;
    this.school = school;
    this.getSchool = () => this.school;
    this.getRole = () => 'Intern';
    Employee.call(this, name, id);
  }