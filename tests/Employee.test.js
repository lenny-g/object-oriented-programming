const Employee = require("../src/lib/Employee");

describe("Employee Class", () => {
  const employee = new Employee({
    name: "Shannen",
    id: "6789",
    email: "shannen@shannen.com",
    school: "University of Coventry",
  });

  test("should be an instance of Employee", () => {
    const expected = "Employee";
    const instance = new Employee("Employee");
    const actual = instance.getRole();
    expect(actual).toEqual(expected);
  });

  test("should return the expected name", () => {
    const expected = "Shannen";
    const actual = employee.getName("Shannen");
    expect(actual).toEqual(expected);
  });

  test("should return the expected id", () => {
    const expected = "6789";
    const actual = employee.getId("6789");
    expect(actual).toEqual(expected);
  });

  test("should return the expected email", () => {
    const expected = "shannen@shannen.com";
    const actual = employee.getEmail("shannen@shannen.com");
    expect(actual).toEqual(expected);
  });
});
