const { test, expect } = require('@jest/globals');
const Intern = require('../lib/Intern');

test("Can set school", () => {
    const testSchool = "UofA";
    const intern = new Intern("Joe", 867, "foo@foomail.com", testSchool);
    
    expect(intern.school).toBe(testSchool);
});

test('can set school with getSchool()', () => {
    const testSchool = "UofA";
    const intern = new Intern("Joe", 867, "foo@foomail.com", testSchool);

    expect(intern.getSchool()).toBe(testSchool);
});

test('role is intern with getRole()', () => {
    const testRole = "Intern";
    const intern = new Intern("Joe", 867, "foo@foomail.com", "UofA");

    expect(intern.getRole()).toBe("Intern");
});