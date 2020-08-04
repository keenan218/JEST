import {simpleFunc, asyncfunction1, iUseAwait, getUsers} from "../src/functions";

// describe("A simple module", () => {
//     test("it should say hello", () => {
//         expect(simpleFunc()).toEqual("hello!");
//     });
// });

describe("Async functions", () => {
    // test("it should return 1", () => {
    //     // asyncfunction1();
    //     expect(asyncfunction1()).resolves.toMatch(1);
    // });
    // test("Await function example", () => {
    //     expect(iUseAwait()).resolves.toMatch("Done");
    // });
    test("Exercise", () => {
        expect(getUsers()).resolves.toMatch("Got all the data back");
    })
})