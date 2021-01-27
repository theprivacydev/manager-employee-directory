class Employee {
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
  }

  // if (typeof id !== "number" || isNaN(id) || id < 0) {
  //   throw new Error("The Employee ID must be a non-negative number");
  // }

  // if (name === "" || id === "" || email === "") {
  //   throw new Error("Must enter employee information");
  // };
  
  getName = () => this.name;
  getId = () => this.id;
  getEmail = () => this.email;
  getRole = () => 'Employee';

    // this.buildHtml = function buildHtml() {
    //   console.log(this.name);
    //   console.log(this.id);
    //   console.log(this.role);
    // }
  }

  module.exports = Employee;