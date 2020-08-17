jest.useFakeTimers();
describe("Infinite Timer game", () => {
    test("Schedules a 10-second timer after 1 second", () => {
        const infinitetimergame = require('../infinitetimergame');
        const callback = jest.fn(); 

        infinitetimergame(callback);

        // At this point, there should have been a single call to setTimeout to scheule the end of the game in 1 second.
        expect(setTimeout).toHaveBeenCalledTimes(1);
        expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 1000);

        // Fast forward and exhaust only currently pending timers
        // (but not any new timers)
        jest.runOnlyPendingTimers();

        // At this pint, our 1 -sec timer should have fired its callback 
        expect(callback).toBeCalled();

        // And it should have created a new timer to start the game over in 10 seconds
        expect(setTimeout).toHaveBeenCalledTimes(2);
        expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function),10000);
    });
});