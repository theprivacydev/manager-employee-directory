const Employee = require('./employee.js');

function Engineer (name, id, email, role) {
    this.role = role;
    this.github = github;
    this.getGithub = () => this.github;
    this.getRole = () => 'Engineer';
    Employee.call(this, name, id, email);
  }

  module.exports = Engineer;