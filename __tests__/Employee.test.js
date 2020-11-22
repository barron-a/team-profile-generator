const Employee = require('../lib/Employee.js')

// needs name, id, email
// needs getName(), getId(), getEmail(), getRole()

test('creates an employee object', () => {
    const employee = new Employee('Adam');

    expect(employee.name).toBe('Adam');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});