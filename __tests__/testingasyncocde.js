describe("Asynchronous Code Testing", () => {
    test("The data returned is 'Strawberry shortcake'", () => {
        function fetchData(callback) {
            callback("Strawberry Shortcake");
        }
        function callback(data) {
            expect(data).toBe("Strawberry Shortcake");
        }
        fetchData(callback);
    });
    test("The data returned is 'Strawberry shortcake'", done => {
        function fetchData(callback) {
            callback("Strawberry shortcake");
        }
        function callback(data) {
            try {
                expect(data).toBe("Strawberry shortcake");
                done();
            }
            catch (error) {
                done(error);
            }
        }

        fetchData(callback);
    });
})