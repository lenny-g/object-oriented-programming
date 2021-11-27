const Employee = require("../src/lib/Employee");

describe("Employee Class", () => {
  test("should be an instance of Employee", () => {
    const expected = "Employee";
    const instance = new Employee("Employee");
    const actual = instance.getRole();
    expect(actual).toEqual(expected);
  });

  test("should return the expected name", () => {
    const expected = "Leanne Gallagher";
    const instance = Employee.name(" Leanne Gallagher");
    const actual = instance.getName();
    expect(actual).toEqual(expected);
  });

  test("should return the expected id", () => {
    const expected = "024678";
    const instance = new Employee("id: 024678");
    const actual = instance.getId();
    expect(actual).toEqual(expected);
  });

  test("should return the expected email", () => {
    const expected = "Leanne_Gallag@live.co.uk";
    const instance = new Employee("email: Leanne_Gallag@live.co.uk");
    const actual = instance.getEmail();
    expect(actual).toEqual(expected);
  });
});
