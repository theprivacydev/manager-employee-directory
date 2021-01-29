const Employee = require('../lib/employee.js');
const Engineer = require('../lib/engineer.js');

describe('Engineer', () => {
    describe('Initialization', () => {
        it("should create an object with the properties of 'name', 'id', and 'email' which are inherited from employee as well as the 'github'", () => {
            const engineer = new Engineer( "Jerry", 520, "Jerry@gmail.com", 'https://github.com/jaymemizelle' );
          
            expect(typeof(engineer)).toBe( 'object' );
            expect(engineer.name).toEqual( "Jerry" );
            expect(engineer.id).toEqual( 520 );
            expect(engineer.email).toEqual( "Jerry@gmail.com" );
            expect(engineer.github).toEqual( 'https://github.com/jaymemizelle' );
          });
  
      });
  
  });
  