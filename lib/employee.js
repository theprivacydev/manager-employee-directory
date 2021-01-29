class Employee {
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;

  
    if (name === "" || id === "" || email === "") {
      throw new Error("Must enter employee information");
    };
  
  }
  
    getName = () => this.name;
    getId = () => this.id;
    getEmail = () => this.email;
    getRole = () => 'Employee';
  }

  module.exports = Employee;