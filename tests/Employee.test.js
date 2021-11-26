const Employee = require("../src/lib/Employee");

describe("Employee Class", () => {
  const actual = new Employee();

  test("should be an instance of Employee", () => {
    const actual = new Employee(Employee);
    expect(actual).toBeInstanceOf(Employee);
  });

  test("should return the expected name", () => {
    const name = actual.getName();
    const expected = Employee.name;
    expect(name).toEqual(expected);
  });

  test("should return the expected id", () => {
    const id = actual.getId();
    const expected = Employee.id;
    expect(id).toEqual(expected);
  });

  test("should return the expected email", () => {
    const email = actual.getEmail();
    const expected = Employee.email;
    expect(email).toEqual(expected);
  });
});
