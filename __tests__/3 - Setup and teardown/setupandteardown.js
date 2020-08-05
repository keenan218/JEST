let countries = []; 

function intiialiseCountryDatabase() {
    return new Promise((resolve ,reject)=>{
        setTimeout(()=>{
            countries.push("Fiji");
            countries.push("Norway");
            resolve();
        },1000);
    });
}

function clearCountryDatabase(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            countries = [];
            resolve();
        },1000);
    });
}

function isCountry(name){
    return countries.includes(name);
}

beforeAll(() => {
    return intiialiseCountryDatabase();
});
afterAll(() => {
    return clearCountryDatabase();
});

test("Country database has Norway", () => {
    expect(isCountry("Norway")).toBeTruthy();
});
test("Country database has Fiji", () => {
    expect(isCountry("Fiji")).toBeTruthy();
});


// beforeAll(() => console.log("1 - beforeAll"));
// afterAll(() => console.log("1 - afterAll"));
// beforeEach(() => console.log("1 - beforeEach"));
// afterEach(() => console.log("1 - afterEach"));
// test("", () => console.log("1 - test"));
// describe("nested block", () => {
//     beforeAll(() => console.log('2 - beforeAll'));
//     afterAll(() => console.log('2 - afterAll'));
//     beforeEach(() => console.log('2 - beforeEach'));
//     afterEach(() => console.log('2 - afterEach'));
//     test('', () => console.log('2 - test'));
// });