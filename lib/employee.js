function Employee(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;

    this.getName = () => {
        console.log(this.name);
    }

    this.getId = () => {
        console.log(this.id);
    }

    this.getEmail = () => {
        console.log(this.email);
    }

    this.getRole = () => 'Employee';

    this.buildHtml = function buildHtml() {
      console.log(this.name);
      console.log(this.id);
      console.log(this.role);
    }


  }

  module.exports = Employee;