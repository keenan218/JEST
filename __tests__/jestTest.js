describe("Common Matchers", () => {
    test("Expect 10+9 to be 19", () => {
        expect(10 + 9).toBe(19);
    });

    test("Object assignment", () => {
        const data = { ham: true };
        data["cheese"] = false;
        expect(data).toEqual({ ham: true, cheese: false });
    });
    test("Adding positive numbers is not 0", () => {
        for (let a = 1; a < 10; a++) {
            for (let b = 1; b < 10; b++) {
                expect(a + b).not.toBe(0);
            }
        }
    });
});

describe("Truthiness", () => {
    test("Null", () => {
        const n = null;
        expect(n).toBeNull();
        expect(n).toBeDefined();
        expect(n).not.toBeUndefined();
        expect(n).not.toBeTruthy();
        expect(n).toBeFalsy();
    });

    test('zero', () => {
        const z = 0;
        expect(z).not.toBeNull();         // true
        expect(z).toBeDefined();          // true
        expect(z).not.toBeUndefined();    // true
        expect(z).not.toBeTruthy();       // true
        expect(z).toBeFalsy();            // true
    });
})


