const { toBindingIdentifierName } = require('@babel/types');
const { expect } = require('@jest/globals');
const { describe } = require('yargs');
const Employee = require('../lib/employee.js');

describe('Employee', () => {
    describe('Initialization', () => {
        it("should create an object with the properties of name, id, and email and methods for each which return the appopriate info", () => {
          const employee = new Employee("James", 450, "james@gmail.com");
          
          expect(typeof(employee)).toBe('object');
          expect(employee.name).toEqual("James");
          expect(employee.id).toEqual(450);
          expect(employee.email).toEqual("james@gmail.com");
        });
        
        it("should throw an error if the employee ID is not a number", () => {
            const wrongEmployee = () => new Employee("Mary", "four-sixty", "Mary@gmail.com");

            const error = new Error("The Employee ID must be a non-negative number");
      
            expect(wrongEmployee).toThrowError(error);
          });

        it("should throw an error if 'name' is not a string", () => {
            const wrongEmployee = () => new Employee("", 340, "email@gmail.com");
            const error = new Error("Must enter employee name");
      
            expect(wrongEmployee).toThrowError(error);
        });


        it("should throw an error if provided no arguments", () => {
            const wrongEmployee = () => new Employee();

            const error = new Error("You must provide the name, id, and email of the employee");
      
            expect(wrongEmployee).toThrow(error);
          });

    });

});