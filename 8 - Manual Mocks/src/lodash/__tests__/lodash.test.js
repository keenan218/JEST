const lodash = require("lodash");

test("Check lodash function", () => {
    expect(lodash.repeat("B", 3)).toBe("BBB");
});