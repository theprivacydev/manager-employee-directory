const Employee = require('./employee.js');

class Engineer extends Employee {
  constructor (name, id, email, github) {
    super(name, id, email);
    this.github = github;
  }
    getGithub = () => this.github;
    getRole = () => 'Engineer';

    buildEngineerHTML = () => {
      return  `<div class="col">
      <div class="card engineer" id="engineer-card" style="width: 18rem;">
          <div class="card-body">
              <!-- Name appends here -->
          <h5 class="card-title">${this.name}</h5> 
          <h6 class="card-subtitle mb-2 text-muted">Engineer</h6>
          <ul class="list-group list-group-flush">
              <li class="list-group-item" id="manager-id">ID: ${this.id}</li>
              <li class="list-group-item" id="manager-email">Email: ${this.email}</li>
              <li class="list-group-item" id="manager-officeNumber">Github: ${this.github}</li>
          </ul>
          </div>
      </div>
  <!-- End column -->
  </div>`

    }
  }

  module.exports = Engineer;