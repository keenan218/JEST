// __tests__/displayUser-test.js
'use strict';

jest.mock('./fetchCurrentUser');

test('displays a user after a click', () => {
    // Set up our document body
    document.body.innerHTML =
        '<div>' +
        '  <span id="username" />' +
        '  <button id="butt1" />' +
        '</div>';

    // This module has a side-effect
    require('./displayUser');

    const fetchCurrentUser = require('./fetchCurrentUser');

    // Tell the fetchCurrentUser mock function to automatically invoke
    // its callback with some data
    fetchCurrentUser.mockImplementation(cb => {
        cb({
            fullName: 'Chris P. Bacon',
            loggedIn: false,
        });
    });

    // Use jquery to emulate a click on our button
    const button = document.getElementById("butt1");
    const username = document.querySelector("#username");
    button.click();


    // Assert that the fetchCurrentUser function was called, and that the
    // #username span's inner text was updated as we'd expect it to.
    expect(fetchCurrentUser).toBeCalled();
    expect(username.innerHTML).toEqual('Chris P. Bacon - Logged Out');
});