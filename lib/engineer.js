const Employee = require('employee.js');

function Engineer (name, id, role) {
    this.role = role;
    this.github = github;
    this.getGithub = () => this.github;
    this.getRole = () => 'Engineer';
    Employee.call(this, name, id);
  }