const Engineer = require("../src/lib/Engineer");

describe("Engineer Class", () => {
  const actual = new Engineer();

  test("should be an instance of Engineer", () => {
    const actual = new Engineer();
    expect(actual).toBeInstanceOf(Engineer);
  });

  test("should return the expected name", () => {
    const name = actual.getName();
    const expected = Engineer.name;
    expect(name).toEqual(expected);
  });

  test("should return the expected id", () => {
    const id = actual.getId();
    const expected = Engineer.id;
    expect(id).toEqual(expected);
  });

  test("should return the expected email", () => {
    const email = actual.getEmail();
    const expected = Engineer.email;
    expect(email).toEqual(expected);
  });

  test("should return the expected github username", () => {
    const github = actual.getGithub();
    const expected = Engineer.github;
    expect(github).toEqual(expected);
  });
});
