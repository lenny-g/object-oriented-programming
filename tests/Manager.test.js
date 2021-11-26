const Manager = require("../src/lib/Manager");

describe("Manager class", () => {
  test("should be an instance of Manager", () => {
    const actual = new Manager();
    expect(actual).toBeInstanceOf(Manager);
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
