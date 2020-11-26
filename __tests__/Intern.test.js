const Intern = require('../lib/Intern.js')

// needs to extend Employee
// needs getSchool and getRole

test('creates an intern object', () => {
    const intern = new Intern('Adam', 5, 'adambarron@me.com', 'Berkeley');

    expect(intern.name).toEqual(expect.any(String));
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.email).toEqual(expect.stringContaining('@', '.'));
    expect(intern.school).toEqual(expect.any(String));
});

test('gets intern name', () => {
    const intern = new Intern('Adam', 1, 'adambarron@me.com', 'Berkeley');
    expect(intern.getName()).toBe('Adam');
});

test('gets intern id', () => {
    const intern = new Intern('Adam', 1, 'adambarron@me.com', 'Berkeley');
    expect(intern.getId()).toBe(1)
});

test('gets intern email address', () => {
    const intern = new Intern('Adam', 1, 'adambarron@me.com', 'Berkeley');
    expect(intern.getEmail()).toBe('adambarron@me.com');
});

test('gets intern role', () => {
    const intern = new Intern('Adam', 1, 'adambarron@me.com', 'Berkeley');
    expect(intern.getRole()).toBe('Intern');
});

test('gets intern school name', () => {
    const intern = new Intern('Adam', 1, 'adambarron@me.com', 'Berkeley');
    expect(intern.getSchool()).toBe('Berkeley');
})