const Employee = require('../lib/employee.js');
const Intern = require('../lib/Intern.js');

describe('Intern', () => {
    describe('Initialization', () => {
        it("should create an object with the properties of 'name', 'id', and 'email' which are inherited from employee as well as the 'school'", () => {
            const intern = new Intern( "Bella", 62, "bella@gmail.com", 'University of Oregon' );
          
            expect(typeof(intern)).toBe( 'object' );
            expect(intern.name).toEqual( "Bella" );
            expect(intern.id).toEqual( 62 );
            expect(intern.email).toEqual( "bella@gmail.com" );
            expect(intern.school).toEqual( 'University of Oregon' );
          });
  
      });
  
  });