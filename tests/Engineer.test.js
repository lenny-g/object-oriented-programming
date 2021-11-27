const Engineer = require("../src/lib/Engineer");

describe("Engineer Class", () => {
  const engineer = new Engineer({
    name: "Leanne",
    id: "024",
    email: "leanne@leanne.com",
    github: "LennyG",
  });

  test("should be an instance of Engineer ", () => {
    const expected = "Engineer";
    const instance = new Engineer("Engineer");
    const actual = instance.getRole();
    expect(actual).toEqual(expected);
  });

  test("should return the expected name", () => {
    const expected = "Leanne";
    const actual = engineer.getName("Leanne");
    expect(actual).toEqual(expected);
  });

  test("should return the expected id", () => {
    const expected = "024";
    const actual = engineer.getId("024");
    expect(actual).toEqual(expected);
  });

  test("should return the expected email", () => {
    const expected = "leanne@leanne.com";
    const actual = engineer.getEmail("leanne@leanne.com");
    expect(actual).toEqual(expected);
  });

  test("should return the expected github username", () => {
    const expected = "LennyG";
    const actual = engineer.getGithub("LennyG");
    expect(actual).toEqual(expected);
  });
});
