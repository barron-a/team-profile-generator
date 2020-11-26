const Engineer = require('../lib/Engineer.js')

// needs to extend Employee
// needs getGithub and getRole

test('creates an engineer object', () => {
    const engineer = new Engineer('Adam', 5, 'adambarron@me.com', 'barron-a');

    expect(engineer.name).toEqual(expect.any(String));
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toEqual(expect.stringContaining('@', '.'));
    expect(engineer.github).toEqual(expect.any(String));
});

test('gets engineer name', () => {
    const engineer = new Engineer('Adam', 1, 'adambarron@me.com', 'barron-a');
    expect(engineer.getName()).toBe('Adam');
});

test('gets engineer id', () => {
    const engineer = new Engineer('Adam', 1, 'adambarron@me.com', 'barron-a');
    expect(engineer.getId()).toBe(1)
});

test('gets engineer email address', () => {
    const engineer = new Engineer('Adam', 1, 'adambarron@me.com', 'barron-a');
    expect(engineer.getEmail()).toBe('adambarron@me.com');
});

test('gets engineer role', () => {
    const engineer = new Engineer('Adam', 1, 'adambarron@me.com', 'barron-a');
    expect(engineer.getRole()).toBe('Engineer');
});

test('gets engineer github username', () => {
    const engineer = new Engineer('Adam', 1, 'adambarron@me.com', 'barron-a');
    expect(engineer.getGithub()).toBe('barron-a');
})