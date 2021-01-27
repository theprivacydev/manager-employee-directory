function Employee(name, id, email) {

  // if (typeof id !== "number" || isNaN(id) || id < 0) {
  //   throw new Error("The Employee ID must be a non-negative number");
  // }

  if (name === "" || id === "" || email === "") {
    throw new Error("Must enter employee information");
  }


    this.name = name;
    this.id = id;
    this.email = email;

    this.getName = () => this.name;

    this.getId = () => this.id;

    this.getEmail = () => this.email;
    

    this.getRole = () => 'Employee';

    // this.buildHtml = function buildHtml() {
    //   console.log(this.name);
    //   console.log(this.id);
    //   console.log(this.role);
    // }
  }

  module.exports = Employee;