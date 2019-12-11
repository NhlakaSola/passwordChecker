var checker = require('../src/passwordChecker');

describe("checks if password is valid ", function () {
    let password = '#BuDDy2019';
   

    it("checks if password exist", function () {
        expect(password).not.toBeNull();
    });

    it("checks if password is not less than 8 characters", function () {
        expect(password.length).toBeGreaterThan(8);
    });

    it("checks if password contains a digit", function () {
        expect(password).toMatch(/^(?=.*\d)/);
    });

    it("checks if password contains a lowercase", function () {
        expect(password).toMatch(/[a-z]/);

    });

    it("checks if password contains an uppercase letter", function () {
        expect(password).toMatch(/[A-Z]/);
    });

    it("checks if password contains a special character", function () {
        expect(password).toMatch(/[!@#\$%\^&=+-_,.;'"]/);
    });

});


describe("checks if password is ok ", function () {
    let password = '#BuDDy2019';
   
    it("checks if password exist", function () {
        expect(password).not.toBeNull();
    });

    it("checks if password is not less than 8 characters", function () {
        expect(password.length).toBeGreaterThan(8);
    });

    it("checks if password contains a digit", function () {
        expect(password).toMatch(/^(?=.*\d)/);
    });

    it("checks if password contains a lowercase", function () {
        expect(password).toMatch(/[a-z]/);

    });

});