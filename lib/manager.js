const Employee = require('employee.js');

function Manager(name, id, role, officeNumber) {
    this.role = role;
    this.officeNumber = officeNumber;
    this.getRole = () => 'Manager';
    Employee.call(this, name, id);
  }