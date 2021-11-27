const Engineer = require("../src/lib/Engineer");

describe("Engineer Class", () => {
  test("should be an instance of Engineer ", () => {
    const expected = "Engineer";
    const instance = new Engineer("Engineer");
    const actual = instance.getRole();
    expect(actual).toEqual(expected);
  });

  test("should return the expected name", () => {
    const instance = new Engineer();
    const expected = "Leanne";
    const actual = instance.getName("Leanne");
    expect(actual).toEqual(expected);
    expect(instance).toBeInstanceOf(Engineer);
  });

  test("should return the expected id", () => {
    const engineer = new Engineer();
    const expected = "024";
    const actual = engineer.getId("024");
    expect(actual).toEqual(expected);
  });

  test("should return the expected email", () => {
    const engineer = new Engineer();
    const expected = "Leanne@leanne.com";
    const actual = engineer.getEmail("Leanne@leanne.com");
    expect(actual).toEqual(expected);
  });

  test("should return the expected github username", () => {
    const engineer = new Engineer();
    const expected = "LennyG";
    const actual = engineer.getGithub("LennyG");
    expect(actual).toEqual(expected);
  });
});
