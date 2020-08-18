

const TimeOut = require("../timeout");
jest.useFakeTimers();
describe("Timeout example", () => {
    it("Should fast forward 5 seconds and call a function", () => {
        const callback = jest.fn();
        TimeOut(callback);

        // The function 'callback' shouldn't be called at this point 
        expect(callback).not.toBeCalled();
        
        // Fast forward until all timers have been executed
        jest.runAllTimers(); 
        
        expect(callback).toBeCalledTimes(1);
    });
});