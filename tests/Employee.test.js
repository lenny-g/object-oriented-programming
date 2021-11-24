const Employee = require("../src/lib/Employee");

describe("Employee Class", () => {
  const mockEmployee = {
    name: "Jane Smith",
    id: 1553445,
    email: "hello@hop.com",
  };
  const actual = new Employee(mockEmployee);

  test("should be an instance of Employee", () => {
    const actual = new Employee(mockEmployee);
    expect(actual).toBeInstanceOf(Employee);
  });

  test("should return the expected name", () => {
    const name = actual.getName();
    const expected = mockEmployee.name;
    expect(name).toEqual(expected);
  });

  test("should return the expected id", () => {
    const id = actual.getId();
    const expected = mockEmployee.id;
    expect(id).toEqual(expected);
  });

  test("should return the expected email", () => {
    const email = actual.getEmail();
    const expected = mockEmployee.email;
    expect(email).toEqual(expected);
  });
});
