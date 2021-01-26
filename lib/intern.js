const Employee = require('./employee.js');

function Intern (name, id, email, role) {
    this.role = role;
    this.school = school;
    this.getSchool = () => this.school;
    this.getRole = () => 'Intern';
    Employee.call(this, name, id, email);
  }

  module.exports = Intern;