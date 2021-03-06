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
});

describe("Promises", () =>{
    test("The data returns 'Black Forest Cake'", () => {
        function fetchData(){
            return new Promise((resolve,reject)=>{
                resolve("Black Forest Cake");
            });
        }
        return fetchData().then(data => {
            expect(data).toBe("Black Forest Cake");
        });
    });
    test("The fetch fails with an error", () => {
        function fetchData() {
            return new Promise((resolve, reject) => {
                reject("error");
            });
        }
        expect.assertions(1);
        return fetchData().catch(e => expect(e).toMatch('error'));
    });

    test("The data is spag bol", () => {
        function fetchData() {
            return new Promise((resolve, reject) => {
                resolve("spag bol");
            });
        }
        return expect(fetchData()).resolves.toBe("spag bol");
    });

    test("The fetch fails with an error", () =>{
        function fetchData(){
            return new Promise((resolve,reject) => {
                reject("Error");
            })
        }
        return expect(fetchData()).rejects.toMatch("Error");
    });

    test("The data is 'Bubble Tea'", async () => {
        function fetchData(){
            return new Promise((resolve, reject) => {
                resolve("Bubble Tea");
            })
        }
        const data = await fetchData();
        expect(data).toBe("Bubble Tea");
    });

    test("The Async function fails", async () => {
        function fetchData(){
            return new Promise((resolve, reject) => {
                reject("Error");
            });
        }
        expect.assertions(1);
        try{
            await fetchData(); 
        }
        catch(uhho){
            expect(uhho).toMatch("Error");
        }
    })
});
