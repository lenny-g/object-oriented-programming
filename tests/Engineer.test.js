const Engineer = require("../src/lib/Engineer");

describe("Engineer Class", () => {
  const mockEngineer = {
    name: "Bob Smith",
    id: 123445,
    email: "hello@help.com",
    github: "BobS",
  };
  const actual = new Engineer(mockEngineer);

  test("should be an instance of Engineer", () => {
    const actual = new Engineer(mockEngineer);
    expect(actual).toBeInstanceOf(Engineer);
  });

  test("should return the expected name", () => {
    const name = actual.getName();
    const expected = mock;
    Engineer.name;
    expect(name).toEqual(expected);
  });

  test("should return the expected id", () => {
    const id = actual.getId();
    const expected = mockEngineer.id;
    expect(id).toEqual(expected);
  });

  test("should return the expected email", () => {
    const email = actual.getEmail();
    const expected = mockEngineer.email;
    expect(email).toEqual(expected);
  });

  test("should return the expected github username", () => {
    const github = actual.getGithub();
    const expected = mockEngineer.github;
    expect(github).toEqual(expected);
  });
});
