// Manager constructor 
const Manager = require('../lib/Manager');

// creates manager  
test('creates an Manager object', () => {
    const manager = new Manager('Nicole', 90, 'nicole.elisaw@gmail', 4);
    
    expect(manager.officeNumber).toEqual(expect.any(Number));
});

// gets role
test('gets role of employee', () => {
    const manager = new Manager('Nicole', 90, 'nicole.elisaw@gmail.com');

    expect(manager.getRole()).toEqual("Manager");
}); 