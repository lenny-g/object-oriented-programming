const inquirer = require("inquirer");

class Employee {
    constructor({ name, id, email, role }) {
        const role = "Employee";

        this.name = name;
        this.id = id;
        this.email = email;
        this.role = role;
    }

    getName() 
    getId() 
    getEmail();
    getRole()
}

class Manager extends Employee {
    constructor(officeNumber) {
        this.officeNumber = officeNumber;
        const role = "Manager";


        super({ name, id, email, role });
      
    }
    getOfficeNumber() {
        console.log('Github username: ${this.github}');
    }
    getRole() 
}

class Engineer extends Employee {
    constructor(github) {
        this.github = github;
        const role = "Engineer";
        super({ name, id, email, role });
    }
    getGithub();
    getRole();
}

class Intern extends Employee {
    constructor(school) {
        this.school = school;
        const role = "Intern"

        super({ name, id, email, role });
    }
    getSchool();
    getRole();
}