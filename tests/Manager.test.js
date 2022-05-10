const Manager = require("../src/lib/Manager");

describe("Manager Class", () => {
  const manager = new Manager({
    name: "Fahra",
    id: "077",
    email: "fahra@fahra.com",
    officeNumber: "89898",
  });

  test("should be an instance of Manager", () => {
    const expected = "Manager";
    const instance = new Manager("Manager");
    const actual = instance.getRole();
    expect(actual).toEqual(expected);
  });

  test("should return the expected name", () => {
    const expected = "Fahra";
    const actual = manager.getName("Fahra");
    expect(actual).toEqual(expected);
  });

  test("should return the expected id", () => {
    const expected = "077";
    const actual = manager.getId("077");
    expect(actual).toEqual(expected);
  });

  test("should return the expected email", () => {
    const expected = "fahra@fahra.com";
    const actual = manager.getEmail("fahra@fahra.com");
    expect(actual).toEqual(expected);
  });

  test("should return the office number ", () => {
    const expected = "89898";
    const actual = manager.getOfficeNumber("89898");
    expect(actual).toEqual(expected);
  });
});
