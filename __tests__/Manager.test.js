const Manager = require('../lib/Manager.js')

// needs to extend Employee
// needs getSchool and getRole

test('creates a manager object', () => {
    const manager = new Manager('Adam', 1, 'adambarron@me.com', 300);

    expect(manager.name).toEqual(expect.any(String));
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toEqual(expect.stringContaining('@', '.'));
    expect(manager.officeNumber).toEqual(expect.any(Number));
});

test('gets manager name', () => {
    const manager = new Manager('Adam', 1, 'adambarron@me.com', 300);
    expect(manager.getName()).toBe('Adam');
});

test('gets manager id', () => {
    const manager = new Manager('Adam', 1, 'adambarron@me.com', 300);
    expect(manager.getId()).toBe(1)
});

test('gets manager email address', () => {
    const manager = new Manager('Adam', 1, 'adambarron@me.com', 300);
    expect(manager.getEmail()).toBe('adambarron@me.com');
});

test('gets manager role', () => {
    const manager = new Manager('Adam', 1, 'adambarron@me.com', 300);
    expect(manager.getRole()).toBe('Manager');
});

test('gets manager office number', () => {
    const manager = new Manager('Adam', 1, 'adambarron@me.com', 300);
    expect(manager.getOfficeNumber()).toBe(300);
})