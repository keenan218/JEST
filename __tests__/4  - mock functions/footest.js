
jest.mock('./foo'); // This happens automatically with automocking
const foo = require('./foo');

test("Mock implementation", () => {
// foo is a mock function 
foo.mockImplementation(() => 50);
expect(foo()).toBe(50);
// > 50

})