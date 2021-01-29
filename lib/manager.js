const Employee = require('./employee.js');

class Manager extends Employee {
  constructor (name, id, email, officeNumber) {
    super(name, id, email);
    this.officeNumber = officeNumber;

  
    // if (typeof officeNumber !== "number" || isNaN(officeNumber)) {
    //   throw new Error("You must enter a ten digit phone number");
    // }

  }

    getRole = () => 'Manager';
    getOfficeNumber = () => this.officeNumber;

    buildManagerHTML = () => {
      return `<div class="col">
            <div class="card manager" id="manager-card" style="width: 18rem;">
                <div class="card-body">
                    <!-- Name Appends here -->
                <h5 class="card-title">${this.name}</h5> 
                <h6 class="card-subtitle mb-2 text-muted">Manager</h6>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item" id="manager-id">ID: ${this.id}</li>
                    <li class="list-group-item" id="manager-email">Email: ${this.email}</li>
                    <li class="list-group-item" id="manager-officeNumber">Office Number: ${this.officeNumber}</li>
                </ul>
                </div>
            </div>
        <!-- End column -->
        </div>`
    }

  }





  module.exports = Manager;