const Manager = require("../src/lib/Manager");

describe("Manager Class", () => {
  test("should be an instance of Manager", () => {
    const expected = "Manager";
    const instance = new Manager("Manager");
    const actual = instance.getRole();
    expect(actual).toEqual(expected);
  });

  test("should return the expected name", () => {
    const name = Manager.getName();
    const expected = Manager.name;
    expect(name).toEqual(expected);
  });

  test("should return the expected id", () => {
    const id = Manager.getId();
    const expected = Manager.id;
    expect(id).toEqual(expected);
  });

  test("should return the expected email", () => {
    const email = Manager.getEmail();
    const expected = Manager.email;
    expect(email).toEqual(expected);
  });

  test("should return the office number ", () => {
    const officeNumber = Manager.getOfficeNumber();
    const expected = Manager.officeNumber;
    expect(officeNumber).toEqual(expected);
  });
});
