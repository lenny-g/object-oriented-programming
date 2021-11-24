const Employee = require("./Employee");

class Engineer extends Employee {
  constructor({ github, ...employee }) {
    super(employee);
    this.github = github;
  }
  getGithub() {
    return this.github;
  }
  getRole() {
    return "Engineer";
  }

  generateCard() {}
}

module.exports = Engineer;
