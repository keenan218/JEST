const user = require('../person');

jest.mock('../person');
test("Uses mock user", () => {
    expect(user.name).toBe("Mock user");
})