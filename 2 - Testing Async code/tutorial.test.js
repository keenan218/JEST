// import {simpleFunc, asyncfunction1, iUseAwait, getUsers} from "./functions";

describe("functions.js tests", () => {
    test("Simple function should return hello", () => {
        function simpleFunction() {
            return "Hello";
        }
        expect(simpleFunction()).toEqual("Hello");
    });
});

describe("Async functions", () => {
    test("it should return 1", () => {
        async function asyncfunction1() {
            return 1; // this the same as writing return Promise.resolve(1);
        }
        // asyncfunction1();
        expect(asyncfunction1()).resolves.toMatch("1");
    });
    test("Await function example", () => {
        async function iUseAwait() {
            let promise = new Promise((resolve, reject) => {
                setTimeout(() => resolve("Done"), 1000);
            });
            let result = await promise; 
        }
        expect(iUseAwait()).resolves.toMatch("Done");
    });
    test("Exercise", () => {
        function getUsers() {
            return new Promise(async (resolve, reject) => {
                let response = await fetch("https://api.github.com/users");
                let users = await response.json();
                for (let i = 0; i < users.length; i++) {
                    console.log(users[i].login);
                }
                if (users.parseJSON() !== null) {
                    resolve("Got all the data back");
                }
                reject("Something went wrong!");
            });
        }
        expect(getUsers()).resolves.toMatch("Got all the data back");
    })
})