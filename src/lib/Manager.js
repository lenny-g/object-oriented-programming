class Manager extends Employee {
  constructor(officeNumber, ...employee) {
    super(employee);
    this.officeNumber = officeNumber;

    
    getOfficeNumber() {
      return this.officeNumber;
    }
    
    getRole() {
      return "Manager";
    }
  }
