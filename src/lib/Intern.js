class Intern extends Employee {
    constructor(school, ...employee) {
        super (employee)
        this.school = school;
        
    }
    getSchool() {
        return this.school
    };
    getRole() {
    return "intern"
    }
}