const Intern = require("../src/lib/Intern");

describe("Intern Class", () => {
  test("should be an instance of Intern", () => {
    const expected = "Intern";
    const instance = new Intern("Intern");
    const actual = instance.getRole();
    expect(actual).toEqual(expected);
  });

  test("should return the expected name", () => {
    const name = new Intern.getName();
    const expected = Intern.name;
    expect(name).toEqual(expected);
  });

  test("should return the expected id", () => {
    const id = new Intern.getId();
    const expected = Intern.id;
    expect(id).toEqual(expected);
  });

  test("should return the expected email", () => {
    const email = new Intern.getEmail();
    const expected = Intern.email;
    expect(email).toEqual(expected);
  });

  test("should return the school name ", () => {
    const schoolName = new Intern.getSchool();
    const expected = Intern.school;
    expect(schoolName).toEqual(expected);
  });
});
