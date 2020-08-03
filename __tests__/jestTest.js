describe("Common Matchers", () => {
    test("Expect 10+9 to be 19", () => {
        expect(10 + 9).toBe(19);
    });

    test("Object assignment", () => {
        const data = { ham: true };
        data["cheese"] = false;
        expect(data).toEqual({ ham: true, cheese: false });
    });
});
