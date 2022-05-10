const Intern = require("../src/lib/Intern");

describe("Intern Class", () => {
  const intern = new Intern({
    name: "Pete",
    id: "1234",
    email: "pete@pete.com",
    school: "Finham Park",
  });

  test("should be an instance of Intern", () => {
    const expected = "Intern";
    const instance = new Intern("Intern");
    const actual = instance.getRole();
    expect(actual).toEqual(expected);
  });

  test("should return the expected name", () => {
    const expected = "Pete";
    const actual = intern.getName("Pete");
    expect(actual).toEqual(expected);
  });

  test("should return the expected id", () => {
    const expected = "1234";
    const actual = intern.getId("1234");
    expect(actual).toEqual(expected);
  });

  test("should return the expected email", () => {
    const expected = "pete@pete.com";
    const actual = intern.getEmail("pete@pete.com");
    expect(actual).toEqual(expected);
  });

  test("should return the school name ", () => {
    const expected = "Finham Park";
    const actual = intern.getSchool("Finham Park");
    expect(actual).toEqual(expected);
  });
});
