const Employee = require('./employee.js');

function Manager(name, id, email, officeNumber) {

  // if (typeof id !== "number" || isNaN(id) || id < 0) {
  //   throw new Error("The Manager ID must be a non-negative number");
  // }

  if (name === "" || email === "") {
    throw new Error("Must enter manager information");
  }

  // if (typeof officeNumber !== "number" || isNaN(officeNumber)) {
  //   throw new Error("You must enter a ten digit phone number");
  // }

    this.officeNumber = officeNumber;
    this.getRole = () => 'Manager';
    Employee.call(this, name, id, email);
  }





  module.exports = Manager;