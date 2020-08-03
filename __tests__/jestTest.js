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

describe("Numbers", () => {
    test("Matcher Equivalent", () => {
        const value = 2+2; 
        expect(value).toBeGreaterThan(3);
        expect(value).toBeGreaterThanOrEqual(3.5);
        expect(value).toBeLessThan(5);
        expect(value).toBeLessThanOrEqual(4.5);

        expect(value).toBe(4);
        expect(value).toEqual(4);
    });

    test("Adding floating numbers", () => {
        const value = 0.1 + 0.2;
        // expect(value).toBe(0.3); this won't work because of rounding error
        expect(value).toBeCloseTo(0.3);
    })
})
