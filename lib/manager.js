const Employee = require('./employee.js');

class Manager extends Employee {
  constructor (name, id, email, officeNumber) {
    super(name, id, email);
    this.officeNumber = officeNumber;
  }
  // if (typeof id !== "number" || isNaN(id) || id < 0) {
  //   throw new Error("The Manager ID must be a non-negative number");
  // }

  // if (name === "" || email === "") {
  //   throw new Error("Must enter manager information");
  // }

  // if (typeof officeNumber !== "number" || isNaN(officeNumber)) {
  //   throw new Error("You must enter a ten digit phone number");
  // }

    getRole = () => 'Manager';
    getOfficeNumber = () => this.officeNumber;
  }





  module.exports = Manager;