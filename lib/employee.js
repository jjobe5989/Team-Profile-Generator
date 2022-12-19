class Employee {
    constructor (name, id, email) {
        this.name = name;
        this.id = id;
        this.email= email;
    }
// return Name
    getName () {
        return this.name;
    }
// return ID
    getId () {
        return this.id;
    }
// return Email
    getEmail () {
        return this.email;
    }
// return Employee
    getRole () {
        return 'Employee';
    }
};

// export
module.exports = Employee;