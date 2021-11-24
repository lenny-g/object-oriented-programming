const Manager = require("../src/lib/Manager");

describe("Manager class", () => {
  const mockManager = {
    name: "Bob Smith",
    id: 1234,
    email: "hello@hi.com",
    officeNumber: 378778378,
  };
  const actual = new Manager(mockManager);

  test("should be an instance of Manager", () => {
    const actual = new Manager(mockManager);
    expect(actual).toBeInstanceOf(Manager);
  });

  test("should return the expected name", () => {
    const name = actual.getName();
    const expected = mockManager.name;
    expect(name).toEqual(expected);
  });

  test("should return the expected id", () => {
    const id = actual.getId();
    const expected = mockManager.id;
    expect(id).toEqual(expected);
  });

  test("should return the expected email", () => {
    const email = actual.getEmail();
    const expected = mockManager.email;
    expect(email).toEqual(expected);
  });

  test("should return the office number ", () => {
    const officeNumber = actual.getOfficeNumber();
    const expected = mockManager.officeNumber;
    expect(officeNumber).toEqual(expected);
  });
});
