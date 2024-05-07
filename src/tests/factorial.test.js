const factorial = require('../factorial');

describe ('Factorial', () =>{
     it('should get a factorial of a positive number', () => {
        expect(factorial(3)).toBe(6);
     });

     it('should retrieve 0 for a neagtive number (undefined)',() => {
        expect(factorial(-30)).toBe(0);
     })

    });