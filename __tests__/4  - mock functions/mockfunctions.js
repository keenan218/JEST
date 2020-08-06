function forEach(items, callback) {
    for (let index = 0; index < items.length; index++) {
        callback(items[index]);
    }
}

test("mockFunctions", () => {
    const mockCallback = jest.fn(x => 42 + x);
    forEach([0, 1], mockCallback);

    // The mock function is called twice
    expect(mockCallback.mock.calls.length).toBe(2);

    // The first argument of the first call to the function was 0
    expect(mockCallback.mock.calls[0][0]).toBe(0);

    // The first argument of the second call to the function was 1
    expect(mockCallback.mock.calls[1][0]).toBe(1);

    // The return value of the first call to the function was 42
    expect(mockCallback.mock.results[0].value).toBe(42);
});

test("This in mock", () => {
    const myMock = jest.fn();

    // Create a new instance of the mock
    const a = new myMock();
    a.name = "a";
    // Create an empty object and assign to "b"
    const b = {};
    b.name = "b";
    // The bind replace the 'this' of this instance to use the object that is passed - in this case 'b'
    const bound = myMock.bind(b);

    // Create the instance
    bound();

    // Print the values
    console.log(myMock.mock.instances);
    // > {<a>,<b>}
});

test("Mock return values", () => {
    const myMock = jest.fn();
    console.log(myMock());
    // > Undefined

    myMock
        .mockReturnValueOnce(10)
        .mockReturnValueOnce("x")
        .mockReturnValue(true);

    console.log(myMock(), myMock(), myMock(), myMock());

});

test("Filter function", () => {
    const filterTestFunction = jest.fn();

    // Make the mock return 'true' for the first call, and 'false' for the second.

    filterTestFunction.mockReturnValueOnce(true).mockReturnValueOnce(false);

    // When the filter calls the function and gets the return value - if the return value is true it will keep the element of the array, if false it will remove the element of the array
    const result = [11, 12].filter((num) => filterTestFunction(num));

    console.log(result);
    // > [11]

    console.log(filterTestFunction.mock.calls);
    // >[ [11], [12] ]
});

test("Mock implementation", () => {
    const myMockfn = jest.fn(cb => cb(null, true));
    myMockfn((err, val) => console.log(val));
    // true
});

test("Mock Implementation Once", () => {
    const myFn = jest.fn(() => "default")
        .mockImplementationOnce(() => "First Call")
        .mockImplementationOnce(() => "Second Call");

    console.log(myFn(), myFn(), myFn(), myFn());
    //> "First Call", "Second Call", "default", "default"
});

test("return this", () => {
    const myObj = { myMethod: jest.fn().mockReturnThis() };

    // which is the same as 

    const anotherObject = {
        myMethod: jest.fn(function () {
            return this;
        })
    }

    // console.log(myObj.myMethod());
    // console.log(anotherObject.myMethod());
});

test("MockName", () => {
    const mymockfunction = jest.fn()
    .mockReturnValue("default")
    .mockImplementation(scalar => 50 + scalar)
    .mockName("add50"); // comment this line and observe the difference in the output

    mymockfunction();
    // expect(mymockfunction).toBeCalled();
});

test("Custom Matchers", () => {

    const mockFunc = jest.fn();

    const arg1 = "arg1";
    const arg2 = "arg2";

    mockFunc(arg1, arg2);
    // Expect the function to be called at least once
    expect(mockFunc).toHaveBeenCalled();

    // Expect the function to have been called at least once with the specified args
    expect(mockFunc).toHaveBeenCalledWith(arg1, arg2);

    // Expect the last call to have been done with the specified args
    expect(mockFunc).toHaveBeenLastCalledWith(arg1, arg2);
});

