const fetchCurrentUser = require('./fetchCurrentUser.js');

const button = document.getElementById("butt1");
const username = document.querySelector("#username");

button.onclick = function () {
    fetchCurrentUser(user => {
        const loggedText = "Logged " + (user.loggedIn ? "In" : "Out");
        username.innerHTML = user.fullName + " - " + loggedText;
    })
}