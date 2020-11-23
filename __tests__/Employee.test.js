const Employee = require('../lib/Employee.js')

// needs name, id, email
// needs getName(), getId(), getEmail(), getRole()

test('creates an employee object', () => {
    const employee = new Employee('Adam', 1, 'adambarron@me.com');

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});

test('gets employee name', () => {
    const employee = new Employee('Adam', 1, 'adambarron@me.com');
    expect(employee.getName()).toBe('Adam');
});

test('gets employee id', () => {
    const employee = new Employee('Adam', 1, 'adambarron@me.com');
    expect(employee.getId()).toBe(1)
});

test('gets employee email address', () => {
    const employee = new Employee('Adam', 1, 'adambarron@me.com');
    expect(employee.getEmail()).toBe('adambarron@me.com');
});

test('gets employee role', () => {
    const employee = new Employee('Adam', 1, 'adambarron@me.com');
    expect(employee.getRole()).toBe('Employee');
})