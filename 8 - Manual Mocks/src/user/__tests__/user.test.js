const user = require('../user');
jest.mock("../user")
test('user creation works', () => {
    return user.create("mitchell", "boo");
});