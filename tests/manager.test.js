const Employee = require('../lib/employee.js');
const Manager = require('../lib/manager.js');

describe('Manager', () => {
    describe('Initialization', () => {
        it("should create an object with the properties of 'name', 'id', and 'email' which are inherited from employee as well as the 'officeNumber'", () => {
          const manager = new Manager("Alisa", 234, "Alisa@gmail.com", 845-657-9876);
          
          expect(typeof(manager)).toBe('object');
          expect(manager.name).toEqual("Alisa");
          expect(manager.id).toEqual(234);
          expect(manager.email).toEqual("Alisa@gmail.com");
          expect(manager.officeNumber).toEqual(845-657-9876);
        });
        

        // it("should throw an error if the 'officeNumber' argument is not a number", () => {
        //     const wrongManager = () => new Manager("John", 34, "not a number");
        //     const error = new Error("You must enter a ten digit phone number");
      
        //     expect(wrongManager).toThrowError(error);
        // });

    });

});
