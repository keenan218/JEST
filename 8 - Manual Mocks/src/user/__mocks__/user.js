module.exports = {
    create(username, password) {
        return new Promise(function (resolve, reject) {
            setTimeout(function () {
                resolve({ "username": username, "password": password });
            }, 100);
        });
    }
}