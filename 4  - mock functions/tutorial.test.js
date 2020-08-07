test("Tutorial mock function", () => {
    const someMockFunction = jest.fn(() => "default");

    // change someMockFunction() to;
    someMockFunction(9, 10);
    // Check the function has been called
    // using .mock property
    expect(someMockFunction.mock.calls.length).toBe(1);
    // using custom matchers
    expect(someMockFunction).toHaveBeenCalled();

    // Check the function was called with 2 arguments 
    // using .mock property
    expect(someMockFunction.mock.calls[0][0]).toBe(9);
    expect(someMockFunction.mock.calls[0][1]).toBe(10);
    //using custom matchers
    expect(someMockFunction).toHaveBeenCalledWith(9, 10);

    // Check the function default return value 
    // using .mock 
    expect(someMockFunction.mock.results[0].value).toBe("default");

    const SomeMockConstructor = jest.fn(); 
    const a = new SomeMockConstructor(); 
    a.name = "test"; 
    const b = new SomeMockConstructor(); 
    
    expect(SomeMockConstructor.mock.instances.length).toBe(2); 
    expect(SomeMockConstructor.mock.instances[0].name).toEqual("test");
    
});