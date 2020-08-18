const user = require('../person');

jest.mock("../person");
test("Person mock user", () => {
    expect(user.name).toBe("Mock user");
})