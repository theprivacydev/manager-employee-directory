const Employee = require('./employee.js');

class Intern extends Employee {
  constructor (name, id, email, school) {
    super(name, id, email);
    this.school = school;
  }
    getSchool = () => this.school;
    getRole = () => 'Intern';

    buildInternHTML = () => {
      return  `<div class="col">
      <div class="card engineer" id="engineer-card" style="width: 18rem;">
          <div class="card-body">
              <!-- Name appends here -->
          <h5 class="card-title">${this.name}</h5> 
          <h6 class="card-subtitle mb-2 text-muted">intern</h6>
          <ul class="list-group list-group-flush">
              <li class="list-group-item" id="manager-id">ID: ${this.id}</li>
              <li class="list-group-item" id="manager-email">Email: ${this.email}</li>
              <li class="list-group-item" id="manager-officeNumber">School: ${this.school}</li>
          </ul>
          </div>
      </div>
  <!-- End column -->
  </div>`
    }
  }

  module.exports = Intern;