const Intern = require("../src/lib/Intern");

describe("Intern class", () => {
  const mockIntern = {
    name: "Bob Smith",
    id: 6787,
    email: "hello@hello.com",
    school: "school",
  };
  const actual = new Intern(mockIntern);
  test("should be an instance of Intern", () => {
    const actual = new Intern(mockIntern);
    expect(actual).toBeInstanceOf(Intern);
  });

  test("should return the expected name", () => {
    const name = actual.getName();
    const expected = mockIntern.name;
    expect(name).toEqual(expected);
  });

  test("should return the expected id", () => {
    const id = actual.getId();
    const expected = mockIntern.id;
    expect(id).toEqual(expected);
  });

  test("should return the expected email", () => {
    const email = actual.getEmail();
    const expected = mockIntern.email;
    expect(email).toEqual(expected);
  });

  test("should return the school name ", () => {
    const schoolName = actual.getSchool();
    const expected = mockIntern.school;
    expect(schoolName).toEqual(expected);
  });
});
