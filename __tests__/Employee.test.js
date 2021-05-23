const { test, expect } = require("@jest/globals");
const Employee = require("../lib/Employee");


test('creates new employee object', () => {
    const employee = new Employee();

    expect(typeof employee).toBe("object");
});

test('can set id', () => {
    const testId = 867;
    const e = new Employee("Joe", testId);

    expect(e.id).toBe(testId);
});

test('can set email', () => {
    const testEmail = "foo@foomail.com";
    const employee = new Employee('Joe', 1, testEmail);

    expect(employee.email).toBe(testEmail);
});

test('can get name via getName()', () => {
    const testName = "Joe";
    const employee = new Employee(testName);

    expect(employee.getName()).toBe(testName);
});

test('can get id via getId()', () => {
    const testId = 867;
    const employee = new Employee("Joe", testId);

    expect(employee.getId()).toBe(testId);
});

test('can set email via getEmail()', () => {
    const testEmail = "foo@foomail.com";
    const employee = new Employee("joe", 867, testEmail);

    expect(employee.getEmail()).toBe(testEmail);
});

test('confirm employee role', () => {
    const testRole = "Employee";
    const employee = new Employee("Joe", 867, "foo@foomail.com");

    expect(employee.getRole()).toBe(testRole);
});