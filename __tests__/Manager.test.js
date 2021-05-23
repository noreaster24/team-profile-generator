const { test, expect } = require('@jest/globals');
const Manager = require('../lib/Manager');

test('can set office number', () => {
    const testOffice = 1234;
    const manager = new Manager("Joe", 867, "foo@foomail.com", testOffice);

    expect(manager.officeNumber).toBe(testOffice);
});

test('can set Manager with getRole()', () => {
    const testRole = "Manager";
    const manager = new Manager("Joe", 867, "foo@foomail.com", 1234);

    expect(manager.getRole()).toBe(testRole);
});