const { test, expect } = require('@jest/globals');
const Engineer = require('../lib/Engineer');

test('Can set GH account', () => {
    const testGhAccount = "noreaster24";
    const engineer = new Engineer("Joe", 867, "foo@foomail.com", testGhAccount);

    expect(engineer.github).toBe(testGhAccount);
});

test('confirm getGitHub', () => {
    const testGhAccount = "noreaster24";
    const engineer = new Engineer("Joe", 867, "foo@foomail.com", testGhAccount);

    expect(engineer.getGithub()).toBe(testGhAccount);
});

test("confirm engineer's role via getRole()", () => {
    const testRole = "Engineer";
    const engineer = new Engineer("Joe", 867, "foo@foomail.com", "noreaster24");

    expect(engineer.getRole()).toBe(testRole);
});